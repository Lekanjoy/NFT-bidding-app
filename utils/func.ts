
export function formatCountdown(timestampInSeconds:number) {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const remainingTime = timestampInSeconds - currentTime;
  
    if (remainingTime < 0) {
      return "00:00:00"; // The timestamp has already passed
    }
  
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
  
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  export function shortenAddress(address:string):string {
    const shortened = `${address.slice(0, 4)}...${address.slice(-5)}`;
    return shortened;
  }
