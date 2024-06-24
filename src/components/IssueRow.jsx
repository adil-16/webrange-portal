import Link from "next/link";
import React from "react";

const IssueRow = ({name, link}) => {
  return (
    <Link href={link} className="border-b border-gray-700 px-3 py-3 flex flex-row gap-x-4 items-center">
      <div className="w-16 h-16 rounded-md bg-blue-500 flex justify-center items-center">
        <p className="text-white text-xl">
            {name.slice(0, 1)}
        </p>
      </div>
      <p className="text-xl">{name}</p>
    </Link>
  );
};
export default IssueRow;
