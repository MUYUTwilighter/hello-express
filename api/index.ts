/**
 * We declare server actions here to avoid CORS when calling an Express backend.
 **/
'use server';

const EXPRESS = (process.env.EXPRESS_HOST ?? "http://localhost") + ":" + (process.env.EXPORESS_PORT ?? "3001");

export async function hello(name?: string): Promise<string> {
  if (name) {
    return fetch(EXPRESS + "/hello?name=" + name).then((res) => res.text());
  } else {
    return fetch(EXPRESS + "/hello").then((res) => res.text());
  }
}

export async function ip(): Promise<string> {
  return fetch(EXPRESS + "/ip").then((res) => res.text());
}