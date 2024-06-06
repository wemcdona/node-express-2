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

  const minuteWords = [
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
  ];

  let minuteWordStr;
  if (minutes < 20) {
    minuteWordStr = minuteWords[minutes];
  } else {
    const tensWords = ['twenty', 'thirty', 'forty', 'fifty'];
    const tens = Math.floor(minutes / 10);
    const units = minutes % 10;
    minuteWordStr = `${tensWords[tens - 2]}${units ? ' ' + minuteWords[units] : ''}`;
  }

  const suffix = isAm ? 'am' : 'pm';
  const result = `${hourWord}${minutes === 0 ? " o'clock" : ' ' + minuteWordStr} ${suffix}`;

  // Handle special cases
  if (time === '00:00') return 'midnight';
  if (time === '12:00') return 'noon';

  return result.trim();
}

module.exports = timeWord;
