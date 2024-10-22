import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (blogInfo) => {
    const newBookmarks = [...bookmarks, blogInfo];
    setBookmarks(newBookmarks);
  };

  const [markAsRead, setMarkAsRead] = useState(0);
  const handleMarkAsRead = (time) => {
    setMarkAsRead(markAsRead+time);
  };
  return (
    <>
      <Header></Header>
      <main className="flex justify-between gap-5">
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarksInfo={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </main>
    </>
  );
}

export default App;
