import React from "react";
import { Link } from "react-router-dom";

function EventItem({ imgUrl, title, desc, eventId, date }) {
  const imgPath = `http://localhost:8000${imgUrl}`;
  return (
    <Link
      to={`/event/${eventId}`}
      className="flex flex-col rounded-lg bg-white shadow-md  md:flex-row border-b-2 mb-1 cursor-pointer p-1 h-36"
    >
      <img src={imgPath} alt="" className="w-52 rounded-md" />
      <div className="flex flex-col justify-start pt-2 px-4">
        <h2 className="text-md font-semibold text-amber-500">{date}</h2>
        <h5 className="mb-1 text-xl font-medium text-neutral-800 ">{title}</h5>
        <p className="text-base text-neutral-600">{desc}</p>

        <p className="text-md text-neutral-400 font-semibold text-left">
          eggnam
        </p>

        <div className="flex gap-2">
          <p className="mb-2 text-sm text-neutral-400 text-left">
            20 Attendees
          </p>
          <p className="mb-2 text-sm text-neutral-400 text-left">Online</p>
        </div>
      </div>
    </Link>
  );
}

export default EventItem;
