import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

export async function responsiveValues() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const parser = new UAParser(userAgent);
  const device = parser.getDevice();
  const result = device.type === "mobile" || device.type === "tablet";
  return result;
}
