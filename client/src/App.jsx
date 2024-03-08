import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import DashPosts from "./components/DashPosts";
import UpdatePost from "./pages/UpdatePost";
import ScrollToTop from "./components/ScrollToTop";
import DashUsers from "./components/DashUsers";
import DashComments from "./components/DashComments";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path='/update-post/:postId' element={<UpdatePost/>}/>
        </Route>
        <Route path="/comments" element={<DashComments/>}/>
        <Route path="/users" element={<DashUsers/>}/>
        <Route path="/posts" element={<DashPosts/>}/>
        <Route path='/post/:postSlug' element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
