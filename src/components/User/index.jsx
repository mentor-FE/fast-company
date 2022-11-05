import { useState, Fragment } from "react";
import API from "../../API";

const User = () => {
  const [users] = useState(API.users.fetchAll());
  console.log(users);

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
              <th></th>
            </tr>
          </thead>
          <tbody className="devide-y devide-gray-100">
            {users.map((item) => (
              <tr key={item._id} className="bg-indigo-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {Object.values(item.qualities).map((prof) => (
                    <span key={prof._id}>{prof.name}</span>
                  ))}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {item.profession.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {item.completedMeetings}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {item.rate}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <button>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((item) => (
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
                    <span className="flex gap-2 justify-evenly" key={prof._id}>
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

export default User;
