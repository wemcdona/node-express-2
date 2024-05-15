function timeWord(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const isAm = hours < 12;
    const hourWord = [
      'twelve',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
    ][hours % 12 || 12];
    const minuteWord = [
      'oh',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ][minutes];
    const minuteWord2 = [
      '',
      '',
      '',
      '',
      '',
      '',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thir',
      'for',
      'fif',
      'six',
      'seven',
      'eigh',
      'nin',
    ][Math.floor(minutes / 10)];
    const minuteWord3 = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ][(minutes % 10)];
    const minuteWordStr =
      minutes === 0
        ? ''
        : minuteWord2 && minuteWord3
        ? `${minuteWord2} ${minuteWord3}`
        : minuteWord;
    const suffix = isAm ? 'am' : 'pm';
    return `${hourWord} ${hourWord === 'twelve' ? 'o’clock' : ''} ${
      minutes === 0 ? '' : minuteWordStr
    } ${suffix}`;
  }
  
  module.exports = timeWord;