// biome-ignore lint/correctness/noConstantCondition: <explanation>
export const APIROOT = true ? "http://www.nilsmf.com:8080" : "localhost:8080";

export function ApiRoot(subdomain: string): string {
	return `${APIROOT}/${subdomain}`;
}
