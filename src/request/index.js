import { message, Modal } from "antd";
import "isomorphic-fetch";
import qs from "qs";
import { getItem } from "../utils/cookie.js";
import Intl from "../utils/LocalizeComponent.js";
import { checkIsPublicRoute } from "../utils/utils";
import errorMessage from "./errorMessage";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url, options, errorHandler) {
  const { configLanguage, newOperationApi, defaultLanguage } = globalThis;

  let defaultOptions = {
    credentials: "include",
  };

  let newOptions = { ...defaultOptions, ...options };

  newOptions.headers = newOptions.headers || {};

  if (options?.query) {
    url += "?" + qs.stringify(options.query);
  }

  if (getItem(configLanguage, options?.cookie)) {
    newOptions.headers["Accept-Language"] =
      getItem(configLanguage, options?.cookie) || defaultLanguage;
  }

  if (
    newOptions.method === "POST" ||
    newOptions.method === "PUT" ||
    newOptions.method === "PATCH" ||
    newOptions.method === "DELETE"
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Accept-Language":
          getItem(configLanguage, options?.cookie) || defaultLanguage,
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: "application/json",
        "Accept-Language":
          getItem(configLanguage, options?.cookie) || defaultLanguage,
        ...newOptions.headers,
      };
    }
  }

  if (typeof window === "undefined") {
    url = `http://localhost${url}`;
  }

  return fetch(url, newOptions)
    .then((response) => {
      if (errorHandler) return response;
      if (response.status === 401 && window.location.pathname !== "/login") {
        if (checkIsPublicRoute(window.location.pathname)) {
          return;
        }
        jumpLogin();
        return;
      }
      // Check Status
      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      if (
        newOptions &&
        newOptions.headers &&
        newOptions.headers.Accept === "application/octet-stream"
      ) {
        return response;
      }

      response.json().then((responseObj) => {
        // 為了給出來密碼錯誤次数 还剩余次数 特意做的处理

        let targetUrl = newOperationApi + "/sign_in";
        if (url === targetUrl) {
          // 在看下message下有没有content字段
          try {
            let result = JSON.parse(responseObj.message);

            if (result.context) {
              if (result.context.userId) {
                const userId = result.context.userId;
                history.pushState(`/user/status/${userId}`);
                // store.dispatch(routerRedux.push(`/user/status/${userId}`));
                return;
              } else {
                let final = result.context;
                let retryCount = final.retryCount;
                let totalCount = final.totalCount;

                if (totalCount - retryCount === 0) {
                  responseObj.subCode = result.subCode;
                } else {
                  let onete = Intl.t(
                    { id: result.subCode },
                    { total: totalCount - retryCount }
                  );
                  message.error(onete);
                  return;
                }
              }
            } else {
              responseObj.subCode = result.subCode;
            }
          } catch (e) {
            responseObj.errorCode = "UNKOWN_ERROR";
          }
        }

        // 把 subCode转化成 errorCode继续走 下面原来的逻辑
        if (responseObj.errorCode === undefined) {
          try {
            JSON.parse(responseObj.message);
            let result = JSON.parse(responseObj.message).subCode.replace(
              /"/g,
              ""
            );
            responseObj.errorCode = result;
          } catch (e) {
            // 用 if 语句 catch Daas的报错，daas的message不是JSON字符串
            if (responseObj.error_detail) {
              return message.error(responseObj.message);
            } else {
              if (
                responseObj.subCode === undefined &&
                responseObj.errorCode === undefined &&
                response.error === undefined &&
                responseObj.message === undefined
              ) {
                responseObj.errorCode = "UNKOWN_ERROR";
              }
            }
          }
        }

        let errortext =
          errorMessage[responseObj.errorCode] ||
          errorMessage[responseObj.error] ||
          responseObj.errorMessage;

        if (
          !errortext &&
          responseObj.message &&
          responseObj.message.indexOf("Data too long for column ") !== -1
        ) {
          errortext = errorMessage["INPUT_TOO_LONG"];
        }

        if (responseObj.errorCode === "FUWU_HAS_BEEN_STOPPED") {
          message.error(Intl.t({ id: "service.stop" }));
        } else if (
          responseObj.errorCode === "MAXIMUM_LIMIT_FOR_DEPLOYMENTS_REACHED"
        ) {
          Modal.confirm({
            width: 500,
            title: Intl.t({ id: "service.reach.limit" }),
            // content: <div style={{marginTop: 20, marginLeft: 2}}><a target="_blank" href="/my/fuwu/deployments">查看我的服务实例</a></div>,
          });
        } else if (responseObj.errorCode === "FAILED_PRECONDITION") {
          message.error(
            JSON.parse(responseObj.message).message || responseObj.errorCode
          );
        } else if (responseObj.errorCode === "ORG_ALREADY_EXISTS") {
          Modal.warn({
            title: Intl.t({ id: "error.org.already.exists" }),
            onOk() {
              window.location.href = "/company";
            },
          });
        } else {
          if (errortext === undefined) {
            message.error(Intl.t({ id: "common.error" }));
          } else {
            if (errortext) {
              message.error(Intl.t({ id: errortext }));
            }
          }
        }

        return responseObj;
      });
    })
    .then((response) => {
      if (newOptions.method === "DELETE" || response.status === 204) {
        return response.text();
      }
      if (
        newOptions &&
        newOptions.headers &&
        newOptions.headers.Accept === "application/octet-stream"
      ) {
        return response.json();
      }
      return response.json();
    })
    .catch((e) => {
      console.log(e);
      const status = e.name;
      if (status === 401) {
        if (checkIsPublicRoute(window.location.pathname)) {
          return;
        }
        jumpLogin();
        return;
      }
    });
}

function jumpLogin() {
  window.location.href = "/login";
}
