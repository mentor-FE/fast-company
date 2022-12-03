/* eslint-disable */
import { useState, useEffect } from "react"
import GroupList from "../GroupList"
import Pagination from "../Pagination"
import SearchStatus from "../SearchStatus"
import UserCard from "../UserCard/Index"
import API from "../../API"
import { paginate } from "../../Utils/paginate"
import UserTable from "../UserTable"

function Users({ users = [], ...props }) {
  const pageSize = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  useEffect(() => {
    API.professions.fetchAll().then((data) =>
      setProfessions({
        ...data,
        allProfessions: {
          name: "Все профессии"
        }
      })
    )
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [professions])
  const handlePageChange = (e, pageIndex) => {
    e.preventDefault()
    setCurrentPage(pageIndex)
  }
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  const filtredUsers =
    selectedProf && selectedProf["_id"]
      ? users.filter((user) => {
          return (
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
          )
        })
      : users
  const count = filtredUsers.length
  const cropUser = paginate(filtredUsers, currentPage, pageSize)

  // choose profession item
  const handleProfessionSelect = (params) => {
    setSelectedProf(params)
  }
  //sort
  const handleSort = (params) => {
    console.log('params', params);
    
  }
  return (
    <>
      <SearchStatus length={users.length} />
      <div>
        <div className="flex self-start mt-12">
          {professions && (
            <GroupList
              professions={professions}
              onSelect={handleProfessionSelect}
              selectField={selectedProf}
            />
          )}
          {count > 0 && (
            <>
              <div className="grow-[3] overflow-auto rounded-lg shadow hidden md:block">
                <UserTable users={cropUser} onSort={handleSort} {...props} />
              </div>
              <div className="flex flex-wrap gap-4 md:hidden">
                {count > 0 &&
                  cropUser.map((item) => (
                    <UserCard key={item._id} user={item} {...props} />
                  ))}
              </div>
            </>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          itemCount={count}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default Users
