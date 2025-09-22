import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import Home from "@/app/page";

beforeEach(() => {
  const mock = vi.fn((input: RequestInfo | URL) => {
    const url = input.toString();
    if (url.includes("/hello")) {
      return Promise.resolve(new Response("Hello, Guest", { status: 200 }));
    }
    if (url.includes("/ip")) {
      return Promise.resolve(new Response("Your IP address is 127.0.0.1", { status: 200 }));
    }
    return Promise.reject(new Error("unknown url: " + url));
  });
  vi.stubGlobal("fetch", mock);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("Test Next frontend", () => {
  it("should render placeholder on init", () => {
    render(<Home/>);
    expect(screen.getAllByText(/Loading.../i)).toHaveLength(2);
  });

  it("should render hello and ip", async () => {
    render(<Home/>);
    await waitFor(() => expect(screen.findByText(/Hello, .+/)).toBeDefined());
    await waitFor(() => expect(screen.findByText(/Your IP address is .+/)).toBeDefined());
  });
});