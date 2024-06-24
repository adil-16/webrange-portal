"use client";

import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState(0);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetch('https://azure-team-project.onrender.com/api/projects/getTotalWorkItem')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log("data", data)
        setLoading(false)
      })
  }, []);


  if (isLoading) return <p>Loading...</p>

  return (
    <main className="flex flex-col md:px-8 md:py-6 px-4 py-3">
      <h1 className="font-semibold text-2xl">Welcome to Webrange Portal</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 grid-flow-row mt-10">
        <Card title="Work Items" quantity={data} />
        <Card title="Developers" />
        <Link href="/projects">
          <Card title="Projects" />
        </Link>
      </div>
    </main>
  );
}
