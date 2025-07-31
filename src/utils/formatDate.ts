export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const formattedParts = new Intl.DateTimeFormat('vi-VN', options).formatToParts(date);
  const getPart = (type: string) => formattedParts.find((p) => p.type === type)?.value ?? '';

  return `${getPart('day')}/${getPart('month')}/${getPart('year')} ${getPart('hour')}:${getPart('minute')}`;
}
