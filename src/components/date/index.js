import { parseJSON, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseJSON(dateString);
  return <time className="text-sm text-gray-600" dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
