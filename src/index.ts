function generateCheckDigit(baseDigits: string[]): string {
  const total = baseDigits.reduce((acc, digit) => (acc + parseInt(digit, 10)) * 2, 0);
  const remainder = total % 11;
  const result = (12 - remainder) % 11;
  return result === 10 ? 'X' : result.toString();

}

export default function isValidOrcid(maybeOrcid: string): boolean {
  if (!maybeOrcid || maybeOrcid.length < 19) {
    return false;
  }

  const digits = maybeOrcid.replace(/-/g, '');

  if (digits.length !== 16) {
    return false;
  }

  const baseDigits = digits.slice(0, 15).split('');
  const checkDigit = digits.charAt(15);
  const expectedCheckDigit = generateCheckDigit(baseDigits);

  return checkDigit === expectedCheckDigit;
}
