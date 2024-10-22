import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmark from "./component/Bookmark/Bookmark";
import Header from "./component/Heaader/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  );
}

export default App;
