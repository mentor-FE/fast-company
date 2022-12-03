import User from "../User"

function UserTable({ users, onSort = (f) => f, ...props }) {
  return (
    <table className="w-full">
      <thead className="bg-emerald-100">
        <tr>
          <th
            onClick={() => onSort("name")}
            className="p-3 text-sm font-semibold tracking-white text-left"
          >
            Name
          </th>
          <th className="p-3 text-sm font-semibold tracking-white text-left">
            Qualities
          </th>
          <th
            onClick={() => onSort("profession")}
            className="p-3 text-sm font-semibold tracking-white text-left"
          >
            Profession
          </th>
          <th
            onClick={() => onSort("completedMeetings")}
            className="p-3 text-sm font-semibold tracking-white text-left"
          >
            Met once
          </th>
          <th
            onClick={() => onSort("rate")}
            className="p-3 text-sm font-semibold tracking-white text-left"
          >
            Rating
          </th>
          <th
            onClick={() => onSort("bookmark")}
            className="p-3 text-sm font-semibold tracking-white text-left"
          >
            Favorite
          </th>
          <th> </th>
        </tr>
      </thead>
      <tbody className="devide-y devide-gray-100">
        {users.map((user, index) => (
          <User key={user._id} {...props} user={user} index={index} />
        ))}
      </tbody>
    </table>
  )
}
export default UserTable
