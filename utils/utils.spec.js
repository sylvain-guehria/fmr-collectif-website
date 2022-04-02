import { truncateText } from './utils';

describe('#truncateText', () => {
  describe('there is a text and a maxLength', () => {
    it('should truncate the text when text is long enough', () => {
      expect(truncateText('I am a text to truncate', 14)).toBe('I am a text to...');
      expect(truncateText('I am a text to truncate', '14')).toBe('I am a text to...');
    });
    it('should writte the original text when text is not long enough', () => {
      expect(truncateText('I am a text to truncate', 99)).toBe('I am a text to truncate');
    });
  });
  describe('Writte nothing', () => {
    it('the maxLength is not a number > 0', () => {
      expect(truncateText('I am a text to truncate', null)).toBe('');
      expect(truncateText('I am a text to truncate', 0)).toBe('');
      expect(truncateText('I am a text to truncate', 'random string')).toBe('');
    });
    it('the text is not a string', () => {
      expect(truncateText(445454, 14)).toBe('');
      expect(truncateText(null, 14)).toBe('');
    });
  });
});
