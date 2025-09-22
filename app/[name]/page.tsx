'use client';

import React from "react";
import Hello from "@/app/hello";
import {useParams} from "next/navigation";

export default function HomeName() {
  const params = useParams<{ name: string }>();
  return <Hello name={params.name}></Hello>
}
