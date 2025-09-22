import {describe, expect, it} from "vitest";

describe("Test Express backend", () => {
  const BACKEND = (process.env.EXPRESS_HOST ?? "http://localhost") + ":" + (process.env.EXPRESS_PORT ?? "3001");
  it('should return hello', async () => {
    await fetch(BACKEND + "/hello?name=Vitest").then((res) => res.text()).then(hello => {
      expect(hello).toBe("Hello, Vitest!");
    });
  });

  it('should return ip', async () => {
    await fetch(BACKEND + "/ip").then((res) => res.text()).then(ip => {
      expect(ip).toMatch(/Your IP address is .+/);
    });
  });
});