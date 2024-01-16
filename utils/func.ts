export function formatCountdown(timestampInSeconds: number) {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const remainingTime = timestampInSeconds - currentTime;

  if (remainingTime < 0) {
    return "00:00:00"; // The timestamp has already passed
  }

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function shortenAddress(address: string): string {
  const shortened = `${address.slice(0, 4)}...${address.slice(-5)}`;
  return shortened;
}

export function formatDate(dateString: string) {
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

export function generateCountdown(endDate: string) {
  const now = new Date();
  const end = new Date(endDate);

  const timeDifference = end.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "Sale has ended.";
  }

  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);

  if (timeDifference <= 3600000) {
    return `Sale ends in ${hours} hours and ${minutes} minutes.`;
  } else {
    return `Sale ends on ${formatDate(endDate)}.`;
  }
}
