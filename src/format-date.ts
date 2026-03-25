/**
 * Formats a Date object into "YYYY-MM-DD" string.
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Formats a Date object into a human-readable French string.
 * e.g. "15 mars 2024"
 */
const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export function formatDateFr(date: Date): string {
  const day = date.getDate();
  const month = MONTHS_FR[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
