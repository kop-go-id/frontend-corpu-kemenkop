export const replaceUrl = (url, params) => {
  if (!url) {
    return url;
  }
  const re = new RegExp(Object.keys(params).join('|'), 'gi');

  return url.replace(re, (matched) => {
    // Check if the URL contains the parameter with : prefix
    const paramWithColon = `:${matched}`;
    if (url.includes(paramWithColon)) {
      return params[matched];
    }
    return matched;
  });
};
