export function convertUTCToDate(utcTimestamp) {
  // Convert the timestamp from seconds to milliseconds
  const milliseconds = utcTimestamp * 1000;

  // Create a new Date object
  const date = new Date(milliseconds);

  // Return the formatted date string
  return date.toISOString(); // Example output: "2025-01-23T14:46:36.000Z"
}

// Example usage
// const created_utc = 1737619196.0;
// console.log(convertUTCToDate(created_utc)); // Outputs the date
