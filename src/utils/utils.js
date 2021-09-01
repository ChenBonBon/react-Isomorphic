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
