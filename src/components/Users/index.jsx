// import { useState } from "react";
import Bookmark from "../Bookmark";

const Users = ({ users, ...props }) => {
  // console.log(users);

  // const [checkedFavorite, setCheckedFavorite] = useState(false)

  // const handleSetFavorite = (id) => {
  //   const findUser = users.filter(item => item._id === id)
  //   const changeUserStatus = [{ ...findUser, bookmark: !findUser.bookmark }]
  //   console.log(changeUserStatus);

  // }

  function setBgcolorToRole(key) {
    switch (key) {
      case "success":
        return "bg-emerald-500";
      case "dark":
        return "bg-slate-500";
      case "primary":
        return "bg-cyan-500";
      case "secondary":
        return "bg-orange-500";
      case "info":
        return "bg-sky-500";
      case "danger":
        return "bg-red-500";

      default:
        break;
    }
  }

  /*
   * "success" - "Троль"
   * "dark" "Неуверенный"
   * "primary" "Нудила"
   * "secondary" "Странный"
   * "info" "Красавчик"
   * "danger""Алкоголик"
   */

  return (
    <>
      <h1>User</h1>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-emerald-100">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Qualities
              </th>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Profession
              </th>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Met once
              </th>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Rating
              </th>
              <th className="p-3 text-sm font-semibold tracking-white text-left">
                Favorite
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="devide-y devide-gray-100">
            {users.length > 0 &&
              users.map((item, index) => (
                <tr
                  key={item._id}
                  className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}
                >
                  <td className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold">
                    {item.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex flex-wrap gap-2 justify-start">
                    {Object.values(item.qualities).map((qual) => (
                      <span
                        className={`${setBgcolorToRole(
                          qual.color
                        )} rounded-lg px-3 text-white`}
                        key={qual._id}
                      >
                        {qual.name}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 text-gray-700 text-base whitespace-nowrap">
                    {item.profession.name}
                  </td>
                  <td className="p-3 text-gray-700 text-base whitespace-nowrap">
                    {item.completedMeetings}
                  </td>
                  <td className="p-3 text-gray-700 text-base whitespace-nowrap">
                    {item.rate}
                  </td>
                  <td className="p-3 text-gray-700 text-base whitespace-nowrap">
                    <Bookmark
                      onClick={() => props.setFavorite(item._id)}
                      checked={item.bookmark}
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.length > 0 &&
          users.map((item) => (
            <div
              key={item._id}
              className="bg-fuchsia-100 p-4 space-y-2 rounded-lg shadow"
            >
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex flex-wrap">
                  <div>Name</div>
                  <div className="p-3 text-sm">{item.name}</div>
                </div>
                <div className="flex flex-wrap">
                  <div>Qualities</div>
                  <div className="p-3 text-sm">
                    {Object.values(item.qualities).map((prof) => (
                      <span className="" key={prof._id}>
                        {prof.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div>Profession</div>
                  <div className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.profession.name}
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div>Met once</div>
                  <div className="p-3 text-sm">{item.completedMeetings}</div>
                </div>
                <div className="flex flex-wrap">
                  <div>Rating</div>
                  <div className="p-3 text-sm">{item.rate}</div>
                </div>
                <div className="flex flex-wrap">
                  <div>Delete</div>
                  <div className="p-3 text-sm">Удалить</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Users;
