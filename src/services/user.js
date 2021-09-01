import request from "../request";

export function fetchUser(params) {
  return request(`${globalThis.mockApi}/fetchUser`, params);
}
