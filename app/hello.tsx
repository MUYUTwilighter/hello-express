'use client';

import React, {useEffect} from "react";
import styles from "@/app/page.module.css";
import {hello, ip} from "@/api";

export default function Hello({name}: { name?: string }) {
  const host = process.env.BACKEND_HOST ?? "http://localhost" + ":" + (process.env.BACKEND_PORT ?? "3001");
  const [helloRes, setHelloRes] = React.useState<string | undefined>();
  const [ipRes, setIpRes] = React.useState<string | undefined>();

  useEffect(() => {
    hello(name).then((res) => setHelloRes(res)).catch(e => setHelloRes("Error: " + e));
    ip().then((res) => setIpRes(res)).catch(e => setIpRes("Error: " + e));
  }, [host, name]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          {helloRes || "Loading..."}
        </h1>
        <ul>
          <li>
            {ipRes || "Loading..."}
          </li>
        </ul>
      </main>
    </div>
  );
}