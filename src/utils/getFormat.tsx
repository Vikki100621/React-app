function getImageFormat(base64String: string) {
  const matches = base64String.match(/^data:image\/([a-zA-Z+]+);base64,/);
  if (matches && matches[1]) {
    return matches[1];
  }
  return null;
}
export default getImageFormat;
