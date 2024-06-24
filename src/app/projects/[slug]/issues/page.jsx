"use client";

import IssueRow from "@/components/IssueRow";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  console.log(params.slug);

  useEffect(() => {
    fetch("http://localhost:4000/api/projects/getProjectWorkItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName: params?.slug,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.workItems);

        setLoading(false);
      });
  }, [params?.slug]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="flex flex-col md:px-8 md:py-6 px-4 py-3">
      <h1 className="font-semibold text-2xl">Issues</h1>

      <div className="w-full flex gap-y-2 flex-col mt-4 bg-gray-300 rounded-xl overflow-hidden">
        {data.map((item) => {
          return (
            <IssueRow
              key={item?.id}
              name={item?.fields["System.Title"]}
              link={`/projects/${params?.slug}/issues/${item?.id}`}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Page;
