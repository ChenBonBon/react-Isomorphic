import dayjs from "dayjs";
import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import ErrorBoundary from "../components/ErrorBoundary/Index";
import Loading from "../components/Loading";

var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

const { UnifiedApi } = globalThis;

export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
  var context = "";
  if (r != null) context = r[2];
  reg = null;
  r = null;
  return context == null || context == "" || context == "undefined"
    ? ""
    : context;
}

export function getFileSize(fileByte) {
  var fileSizeByte = fileByte;
  var fileSizeMsg = "";
  if (fileSizeByte < 1048576)
    fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + " KB";
  else if (fileSizeByte == 1048576) fileSizeMsg = " 1MB";
  else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824)
    fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + " MB";
  else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824)
    fileSizeMsg = " 1GB";
  else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776)
    fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + " GB";
  else if (fileSizeByte > 1073741824 && fileSizeByte == 1099511627776)
    fileSizeMsg = " 1TB";
  else if (fileSizeByte > 1099511627776 && fileSizeByte < 1099511627776 * 1024)
    fileSizeMsg =
      (fileSizeByte / (1024 * 1024 * 1024 * 1024)).toFixed(2) + " TB";
  else fileSizeMsg = " More than 1PB";
  return fileSizeMsg;
}

export function transDataType(dataType) {
  const maps = {
    STRING: "field-text",
    INTEGER: "field-num",
    TIMESTAMP: "field-time",
    DECIMAL: "field-num",
    DOUBLE: "field-num",
    DATETIME: "field-time",
    DATE: "field-date",
    BOOLEAN: "field-bool",
  };
  return maps[dataType] ? maps[dataType] : "";
}

export function getFileFormat(path, parquetDirectory) {
  let format = "RAW";
  let rgx1 = /\.csv$/gi;
  let rgx2 = /\.(xls|xlsx)$/gi;
  let rgx3 = /\.parquet$/gi;
  if (rgx1.test(path)) {
    format = "CSV";
  } else if (parquetDirectory) {
    format = "PARQUET_DIR";
  } else if (rgx2.test(path)) {
    format = "EXCEL";
  } else if (rgx3.test(path)) {
    format = "PARQUET";
  } else {
    format = "OTHER";
  }
  return format;
}

export function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function base64toBlob(base64, mime) {
  let bstr = atob(base64);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export function checkPermission(permissions, permission, action) {
  if (permissions && permissions[permission]) {
    if (
      permissions[permission].indexOf("*") > -1 ||
      permissions[permission].indexOf(action) > -1
    ) {
      return true;
    }
    return false;
  }
  return false;
}

export function formatTime(time) {
  if (!time) return "";
  let formatTemplate = "YYYY/MM/DD HH:mm";
  return dayjs(time).tz().format(formatTemplate);
}

export function formatCustomTime({
  time,
  template = "YYYY/MM/DD HH:mm",
  short = false,
}) {
  if (!time) return "";
  if (short) {
    template = "YYYY/MM/DD";
  }
  return dayjs(time).tz().format(template);
}

export function formatObjectAllTime(obj) {
  if (!obj) return {};
  let newObject = { ...obj };
  Object.keys(newObject).forEach((key) => {
    if (typeof newObject[key] === "string") {
      switch (key) {
        case "createdAt":
        case "updatedAt":
        case "createTime":
        case "updateTime":
        case "created_at":
        case "updated_at":
          try {
            newObject[key] = formatTime(newObject[key]);
          } catch (err) {}
          break;
      }
    }
  });
  return newObject;
}

export function getBase64(file, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
}

/**
 * 完整路由
 * 提供懒加载及 Switch
 * @param {*} list
 * @returns
 */
export function renderRoute(list) {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>{renderTopRoute(list)}</Switch>
    </Suspense>
  );
}

/**
 * 顶级路由
 * 未提供懒加载及 Switch
 * @param {*} list
 * @returns
 */
export function renderTopRoute(list) {
  return list.map((route) => {
    if (route.from) {
      return <Redirect key={route.from} from={route.from} to={route.to} />;
    }

    if (route.authority && route.authority.length > 0) {
      return (
        <AuthRoute
          authority={route.authority}
          key={route.path}
          exact={route.exact}
          path={route.path}
          render={(props) => (
            <ErrorBoundary>
              <route.component {...props} routes={route.children} />
            </ErrorBoundary>
          )}
        />
      );
    }
    return (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        render={(props) => (
          <ErrorBoundary>
            <route.component {...props} routes={route.children} />
          </ErrorBoundary>
        )}
      />
    );
  });
}

/**
 * 用于补足整数位数
 * @param: number number;
 * @param: length number;
 * @returns
 */
export const formatInteger = (number, length) => {
  if (number < Math.pow(10, length - 1)) {
    return (
      new Array(length - number.toString().length).fill("0").join("") + number
    );
  }

  return number;
};

export const formLayout = {
  labelCol: {
    xl: { span: 3 },
    sm: { span: 6 },
    xs: { span: 24 },
  },
  wrapperCol: {
    xl: { span: 10 },
    sm: { span: 10 },
    xs: { span: 24 },
  },
  layout:
    typeof window !== "undefined" && window.innerWidth < 576
      ? "vertical"
      : "horizontal",
};

export function setTimeLocale(local) {
  dayjs.tz.setDefault(local);
}

const unitArr = new Array(
  "Bytes",
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
);
export function turnStorageSize(filesize) {
  if (null == filesize || filesize == "" || filesize == 0) {
    return "0.00 " + unitArr[0];
  }
  let index = 0;
  let srcsize = parseFloat(filesize);
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  let size = srcsize / Math.pow(1024, index);
  size = size.toFixed(2);
  return size + " " + unitArr[index];
}

/**
 * 公开路由，未登录可以访问
 * @param {*} pathname
 * @returns
 */
export function checkIsPublicRoute(pathname) {
  if (!pathname) {
    return false;
  }
  if (pathname.indexOf("/community") === 0) {
    return true;
  }
  if (pathname === "/") {
    return true;
  }
  return false;
}

export function getImageSrc(data) {
  if (!data) return data;
  if (data.startsWith("data:")) {
    return data;
  } else {
    return `${UnifiedApi}/oss/${data}`;
  }
}
