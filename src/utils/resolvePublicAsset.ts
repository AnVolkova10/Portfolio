export const resolvePublicAsset = (file: string): string => {
  const normalizedFile = file.replace(/^\/+/, '');

  return `${import.meta.env.BASE_URL}${normalizedFile}`;
};
