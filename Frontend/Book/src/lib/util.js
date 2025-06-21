export default function formatCustomDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // or your custom format
}