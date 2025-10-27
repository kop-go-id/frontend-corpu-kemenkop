export function matchPath(pattern, pathname) {
  if (pattern.includes('[')) {
    // Handle dynamic routes like /[id]
    const regex = new RegExp('^' + pattern.replace(/\[.*?\]/g, '[^/]+') + '$');
    return regex.test(pathname);
  }
  return pattern === pathname;
}
