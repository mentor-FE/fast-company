/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import DashBoard from "../Dashboard"
import Login from "../Login"
import Users from "../Users"
import Posts from "./../Posts/index"
import Post from "./../Post/index"
import Layout from "../Layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<h1>Page not exist</h1>} />{" "}
      </Route>
    </Routes>
  )
}

export default App
