export const checkImageExists = async (url: string): Promise<boolean> => {
  if (!url) return false;

  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
};
