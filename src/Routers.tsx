import { Route, Routes } from "react-router";
import About from "./pages/About";
import Ask from "./pages/Ask";
import Home from "./pages/Home";
import Item from "./pages/Item";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Show from "./pages/Show";
import Top from "./pages/Top";
import Job from "./pages/Job";
import User from "./pages/User";
import Submissions from "./features/User/Submissions";
import Comments from "./features/User/Comments";
import Favorites from "./features/User/Favorites";
import TopPost from "./features/Top/Post";
import TopUsers from "./features/Top/User";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top/*" element={<Top />}>
        <Route path="post" element={<TopPost />} />
        <Route path="users" element={<TopUsers />} />
      </Route>
      <Route path="/top/item/:id" element={<Item />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/item/:id" element={<Item />} />
      <Route path="/show" element={<Show />} />
      <Route path="/show/item/:id" element={<Item />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/ask/item/:id" element={<Item />} />
      <Route path="/job" element={<Job />} />
      <Route path="/job/item/:id" element={<Item />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/item/:id" element={<Item />} />
      <Route path="/user/:name/*" element={<User />}>
        <Route path="submissions" element={<Submissions />} />
        <Route path="comments" element={<Comments />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default Routers;
