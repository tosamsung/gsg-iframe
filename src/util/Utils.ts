import dayjs from "dayjs";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { useLocation } from "react-router-dom";

export function addDaysToDate(date: Date | string, daysToAdd: number): Date {
  const startDate = typeof date === "string" ? new Date(date) : date;
  if (isNaN(startDate.getTime())) {
    throw new Error("Ngày không hợp lệ");
  }
  startDate.setDate(startDate.getDate() + daysToAdd);
  return startDate;
}
export function checkScreenSize() {
  if (isMobile) {
    return "mobile";
  }
  if (isTablet) {
    return "tablet";
  }
  if (isDesktop) {
    return "desktop";
  }
  return "desktop"
}
export function searchParamUrl(params: string) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get(params)
}
export function formatDate(date: string | Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format);
}

export function saveBooleanVariable(iframeId: string,boolean:boolean) {
  if (WA.player.state.loadVariable(iframeId)) {
    WA.player.state.saveVariable(iframeId, !boolean);
  }
  WA.player.state.saveVariable(iframeId, boolean);
}