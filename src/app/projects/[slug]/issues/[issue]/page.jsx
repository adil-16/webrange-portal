"use client";
import Card from "@/components/Card";
import React, {useEffect, useState} from "react";

const Page = ({ params }) => {

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://azure-project-2ek8.onrender.com/api/projects/getWorkItemHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project: params.slug,
        id: params.issue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [params.slug, params.issue]);

  const sectotime = (sec) => {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor((sec - hours * 3600) / 60);
    var seconds = sec - hours * 3600 - minutes * 60;

    return hours + "h " + minutes + "m " + seconds + "s";
  };


  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col md:px-8 md:py-6 px-4 py-3">
      <h1 className="font-semibold text-2xl">Welcome to Webrange Portal</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 grid-flow-row mt-10">
        <Card title="TODO" quantity={sectotime(data["To Do"])}/>
        <Card title="Doing" quantity={sectotime(data["Doing"])}/>
        <Card title="Testing" quantity={sectotime(data["TESTING"])}/>
        <Card title="Done" quantity={sectotime(data["Done"])}/>
      </div>
    </main>
  );
};
export default Page;
