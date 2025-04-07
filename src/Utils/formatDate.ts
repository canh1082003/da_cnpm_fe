import { format } from "date-fns";

/**
 * Định dạng ngày giờ theo chuỗi mong muốn.
 * @param date - Chuỗi thời gian hoặc đối tượng Date.
 * @param formatStr - Định dạng mong muốn (mặc định: "dd/MM/yyyy").
 * @returns Chuỗi ngày giờ đã được định dạng hoặc chuỗi rỗng nếu ngày không hợp lệ.
 */
export const formatDate = (
  date: string | Date | undefined,
  formatStr: string = "dd/MM/yyyy"
): string => {
  if (!date) {
    console.warn(`Ngày không hợp lệ: ${date}`);
    return "";
  }

  if (typeof date === "string" && !date.includes("T")) {
    date = date.replace(" ", "T") + "Z";
  }

  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    console.warn(`Ngày không hợp lệ: ${date}`);
    return "";
  }

  return format(dateObj, formatStr);
};
