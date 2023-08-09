export function formatTimeAgo(dateString) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  const elapsedMilliseconds = currentDate - inputDate;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    const minutes = Math.floor(elapsedSeconds / 60);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (elapsedSeconds < 86400) {
    const hours = Math.floor(elapsedSeconds / 3600);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (elapsedSeconds < 2592000) {
    const days = Math.floor(elapsedSeconds / 86400);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (elapsedSeconds < 31536000) {
    const months = Math.floor(elapsedSeconds / 2592000);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(elapsedSeconds / 31536000);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}
