import React from "react";
import { Link } from "react-router-dom";

function GroupItem({ imgUrl, title, desc, groupId }) {
  const imgPath = `http://localhost:8000${imgUrl}`;

  return (
    <Link
      to={`/group/${groupId}`}
      className="flex flex-col rounded-lg bg-white shadow-md  md:flex-row border-b-2 mb-1 cursor-pointer"
    >
      <img src={imgPath} alt="" className="w-52 rounded-md" />
      <div className="flex flex-col justify-start pt-2 px-4">
        <h5 className="mb-1 text-xl font-medium text-neutral-800 ">{title}</h5>
        <h2 className="text-md font-semibold text-amber-500">Osaka, Japan</h2>
        <p className="text-base text-neutral-600">{desc}</p>
        <p className="mb-2 text-sm text-neutral-400 text-right">20 Members</p>
      </div>
    </Link>
  );
}

export default GroupItem;
