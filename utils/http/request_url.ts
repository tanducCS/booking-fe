"use server";


export const getRequestURL = async (url: string) => {
  if (!url.startsWith("/")) {
    url = `/${url}`;
  }
  return `${process.env.API_URL}${url}`;
};

