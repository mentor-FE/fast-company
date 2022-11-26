import { useState } from "react"
import Pagination from "../Pagination"
import SearchStatus from "../SearchStatus"
import User from "../User"
import UserCard from "../UserCard/Index"
import { paginate } from "./../../Utils/paginate"

const Users = ({ users, ...props }) => {
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (e, pageIndex) => {
    e.preventDefault()
    setCurrentPage(pageIndex)
  }

  const cropUser = paginate(users, currentPage, pageSize)

  return (
    <>
      <SearchStatus length={users.length} />
      {count > 0 && (
        <>
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
                  cropUser.map((user, index) => (
                    <User key={user._id} {...props} user={user} index={index} />
                  ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {count > 0 &&
              cropUser.map((item) => (
                <UserCard key={item._id} user={item} {...props} />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            itemCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}

export default Users
