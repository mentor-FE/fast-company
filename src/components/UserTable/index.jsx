import TableBody from "../TableBody"
import TableHeader from "../TableHeader"
// import User from "../User"

function UserTable({
 users, onSort = (f) => f, selectedSort
}) {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: {
      path: "completedMeetings",
      name: "Количество встреч"
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное" },
    delete: {}
  }
  return (
    <table className="w-full">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody className="devide-y devide-gray-100">
        {users.map((user, index) => (
          <User key={user._id} {...props} user={user} index={index} />
        ))}
      </tbody> */}
    </table>
  )
}
export default UserTable
