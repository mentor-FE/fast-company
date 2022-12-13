/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import DashBoard from "../Dashboard"
import Login from "../Login"
import Users from "../Users"
import Posts from "./../Posts/index"
import Post from "./../Post/index"

const App = () => {
  return (
    <Routes>
      <Route element={<Users />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Posts />} path="/posts">
        <Route element={<Posts />} index />
        <Route element={<Post />} path=":slug" />
      </Route>

      <Route element={<DashBoard />} path="/dashboard" />
    </Routes>
  )
}

export default App
