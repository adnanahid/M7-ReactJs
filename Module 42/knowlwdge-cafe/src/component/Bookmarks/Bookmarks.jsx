import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarksInfo, markAsRead }) => {
  let sum = markAsRead;
  return (
    <div className="w-1/3">
      <h2 className=" bg-slate-300 rounded-2xl text-2xl font-bold text-center p-5">
        Spent time on read:{markAsRead} min
      </h2>
      <div className="p-5">
        <h2 className=" bg-slate-200 rounded-2xl text-2xl font-bold text-center p-5">
          Bookmarked Blog: {bookmarksInfo.length}
        </h2>
        {bookmarksInfo.map((title, index) => (
          <Bookmark key={index} title={title}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
