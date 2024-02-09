export function formatCountdown(timestampInSeconds: number) {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const remainingTime = timestampInSeconds - currentTime;

  if (remainingTime < 0) {
    return "00:00:00"; // The timestamp has already passed
  }

  const days = Math.floor(remainingTime / 86400); // 86400 = 24 * 60 * 60
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  if (days > 0) {
    return `${formattedDays}d : ${formattedHours}hr : ${formattedMinutes}m : ${formattedSeconds}s`;
  }

  return `${formattedHours}hr : ${formattedMinutes}m : ${formattedSeconds}s`;
}

export function shortenAddress(address: string): string {
  const shortened = `${address.slice(0, 4)}.....${address.slice(-5)}`;
  return shortened;
}

export function formatDate(dateString: string | number) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

export function generateCountdown(endDate: number) {
  const now = Math.floor(Date.now() / 1000);

  const timeDifference = endDate - now;

  if (timeDifference < 0) {
    return "Sale has ended.";
  }
  const hours = Math.floor(timeDifference / 3600);
  const minutes = Math.floor((timeDifference % 3600) / 60);

  if (timeDifference <= 3600) {
    return `Sale ends in ${hours} hour and ${minutes} minutes.`;
  } else {
    const closingDate = new Date(endDate * 1000);
    const formattedClosingDate = closingDate.toISOString().replace("Z", "");
    return `Sale ends on ${formatDate(formattedClosingDate)}.`;
  }
}
