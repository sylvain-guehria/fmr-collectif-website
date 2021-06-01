/**
 * @param {string} text
 * @param {number} maxLength
 * @return {string}
 */
export const truncateText = (text, maxLength) => {
    if (typeof text !== 'string' || !isNumber(maxLength) || !maxLength) {
        return '';
    }
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

/**
 * @param {string} a
 */
export const isNumber = a => parseFloat(a) === +a;