const UserCard = ({user}) => {
  return ( 

        <div
          key={user._id}
          className="bg-fuchsia-100 p-4 space-y-2 rounded-lg shadow"
        >
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex flex-wrap">
              <div>Name</div>
              <div className="p-3 text-sm">{user.name}</div>
            </div>
            <div className="flex flex-wrap">
              <div>Qualities</div>
              <div className="p-3 text-sm">
                {Object.values(user.qualities).map((prof) => (
                  <span className="" key={prof._id}>
                    {prof.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap">
              <div>Profession</div>
              <div className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {user.profession.name}
              </div>
            </div>

            <div className="flex flex-wrap">
              <div>Met once</div>
              <div className="p-3 text-sm">{user.completedMeetings}</div>
            </div>
            <div className="flex flex-wrap">
              <div>Rating</div>
              <div className="p-3 text-sm">{user.rate}</div>
            </div>
            <div className="flex flex-wrap">
              <div>Delete</div>
              <div className="p-3 text-sm">Удалить</div>
            </div>
          </div>
        </div>
   );
}
 
export default UserCard;