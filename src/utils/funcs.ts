export const APIROOT = "http://localhost:8080";

export function ApiRoot(subdomain: string): string {
  return `${APIROOT}/${subdomain}`;
}
