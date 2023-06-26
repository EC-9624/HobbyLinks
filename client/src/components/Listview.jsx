import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import GroupItem from "./GroupItem";
import axios from "axios";

function Listview({ showList }) {
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/events");
        setEvents(response.data);
        console.log(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEventsData();
  }, []);

  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/groups");
        setGroups(response.data);
        console.log(groups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroupsData();
  }, []);

  return (
    <div className=" max-w-7xl  mx-auto overflow-y-auto">
      {showList === "event" ? eventlist({ events }) : grouplist({ groups })}
    </div>
  );
}

function eventlist({ events }) {
  return events.map((e) => (
    <EventItem
      key={e.event_id}
      desc={e.desc}
      title={e.event_name}
      eventId={e.event_id}
      imgUrl={e.header_path}
      date={e.date}
    />
  ));
}

function grouplist({ groups }) {
  return groups.map((e) => (
    <GroupItem
      key={e.group_id}
      desc={e.desc}
      title={e.group_name}
      groupId={e.group_id}
      imgUrl={e.header_path}
    />
  ));
}

export default Listview;
