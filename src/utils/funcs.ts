export const APIROOT = "http://www.nilsmf.com:8080";

export function ApiRoot(subdomain: string): string {
  return `${APIROOT}/${subdomain}`;
}
