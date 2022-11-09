// import { useState } from "react";
import User from "../User";
import UserCard from "../UserCard/Index";

const Users = ({ users, ...props }) => {
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
              users.map((user, index) => (
                <User key={user._id} {...props} user={user} index={index} />
              ))}
          </tbody>
        </table>
      </div>
      {/* mobile version */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.length > 0 &&
          users.map((item) => (
            <UserCard  key={item._id} user={item} />
          ))}
      </div>
    </>
  );
};

export default Users;
