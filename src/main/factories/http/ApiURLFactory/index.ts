export const makeApiUrl = (path: string): string => {
  const url = `https://api.github.com${path}`;
  return url;
};
