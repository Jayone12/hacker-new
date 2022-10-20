const domainFromUrl = (url: string) => {
  let result;
  let match;
  if (
    (match = url.match(
      // eslint-disable-next-line
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
    ))
  ) {
    result = match[1];
    // eslint-disable-next-line
    if ((match = result.match(/^[^\.]+\.(.+\..+)$/))) {
      result = match[1];
    }
  }
  return result;
};

export default domainFromUrl;
