


import { getRequestURL } from "./request_url";

const httpRequest = async <TEntity>(
  url: string,
  method: string,
  data: TEntity,
  options: RequestInit = {},
  isNeedAuth = false
) => {
  
  let request_body = data;
  if (!options.headers && method !== "GET") {
    options.headers = {
      "Content-Type": "application/json",
    };
    request_body = JSON.stringify(data) as any;
  }
  options.headers = {
    Accept: "application/json",
    ...options.headers
  };
  const requestOptions: RequestInit = {
    method,
    ...(method !== "GET" && { cache: "no-store" }),
    body: request_body as any,
    ...options,
  };
  const res = await fetch(await getRequestURL(url), requestOptions);
  if (!res.ok) {
    if (res.status >= 500)
      return { error_code: 500, detail: "Internal server error" };
    const body = await res.json();
    return { error_code: res.status, detail: body.detail };
  }
  const body = await res.json();
  return body;
};

export const http = {
  get: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
    httpRequest(url, "GET", undefined, options, isNeedAuth),
  post: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "POST", data, options, isNeedAuth),
  put: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "PUT", data, options, isNeedAuth),
  delete: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
    httpRequest(url, "DELETE", undefined, options, isNeedAuth),
  patch: <TEntity>(
    url: string,
    data: TEntity,
    options?: RequestInit,
    isNeedAuth: boolean = false
  ) => httpRequest(url, "PATCH", data, options, isNeedAuth),
};
