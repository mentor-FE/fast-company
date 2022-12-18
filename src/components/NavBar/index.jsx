/* eslint-disable */
import CustomLink from './../Custom/CustomLink';

const NavBar = () => {

  return (
    <nav>
      <ul className="flex">
        <li className="mr-6">
          <CustomLink to="/">
            Home
          </CustomLink>
        </li>
        <li className="mr-6">
          <CustomLink to="/login">
            Login
          </CustomLink>
        </li>
        <li className="mr-6">
          <CustomLink to="/posts">
            Posts
          </CustomLink>
        </li>
        <li className="mr-6">
          <CustomLink to="/dashboard">
            Dashboard
          </CustomLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
