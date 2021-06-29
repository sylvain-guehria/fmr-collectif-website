export const truncateText = (text: string, maxLength: number): string => {
  if (typeof text !== 'string' || isNaN(maxLength) || !maxLength) {
    return '';
  }
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const formatTimeStamp = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleDateString('fr');
};
