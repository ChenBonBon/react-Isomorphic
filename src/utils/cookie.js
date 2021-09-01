export const getItem = (key, cookie) => {
  const _cookie = cookie || document.cookie;
  let value = undefined;

  if (typeof _cookie === "undefined") {
    return undefined;
  }

  const cookieKeyValues = _cookie.split(";");
  cookieKeyValues.forEach((item) => {
    const [_key, _value] = item.trim().split("=");
    if (key === _key) {
      value = _value;
    }
  });

  return value;
};

export const setItem = (cookie, key) => {};
