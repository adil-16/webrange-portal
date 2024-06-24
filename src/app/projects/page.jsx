"use client";

import IssueRow from "@/components/IssueRow";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/projects/getAllProjects")
      .then((res) => res.json())
      .then((data) => {
        setData(data.value);

        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col md:px-8 md:py-6 px-4 py-3">
      <h1 className="font-semibold text-2xl">Projects</h1>

      <div className="w-full flex gap-y-2 flex-col mt-4 bg-gray-300 rounded-xl overflow-hidden">
        {data.map((item) => {
          return (
            <IssueRow name={item.name} link={`/projects/${item.name}/issues`} />
          );
        })}
        {/* <IssueRow name={"asdasa"} link={"/projects/123456/issues"} /> */}
      </div>
    </main>
  );
};

export default page;