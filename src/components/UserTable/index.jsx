/* eslint-disable */
import Bookmark from "../Bookmark"
import Qualitie from "../Qualitie"
import Table from "../Table"
import TableBody from "../TableBody"
import TableHeader from "../TableHeader"
// import User from "../User"

function UserTable({
  users,
  onSort = (f) => f,
  onDelete,
  selectedSort,
  setFavorite
}) {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      // eslint-disable-next-line react/no-unstable-nested-components
      component: (user) => <Qualitie qualities={user.qualities} />
    },
    profession: { path: "profession.name", name: "Профессия" },
    completedMeetings: {
      path: "completedMeetings",
      name: "Количество встреч"
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      // eslint-disable-next-line react/no-unstable-nested-components
      component: (user) => (
        <Bookmark
          onClick={() => setFavorite(user._id)}
          checked={user.bookmark}
        />
      )
    },
    delete: {
      // eslint-disable-next-line react/no-unstable-nested-components
      component: (user) => (
        <button
          type="button"
          disabled={user.bookmark}
          onClick={() => onDelete(user._id)}
          className={`py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md ${
            user.bookmark ? "bg-slate-700" : "hover:bg-red-700"
          }  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        >
          Удалить
        </button>
      )
    }
  }
  return (
    <Table {...{ onSort, selectedSort, columns, users }}>
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
  )
}
export default UserTable
