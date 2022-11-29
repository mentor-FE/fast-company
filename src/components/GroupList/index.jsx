/* eslint-disable */
function GroupList(props) {
  const { professions = {}, onSelect } = props
  return (
    <nav className="flex flex-col justify-center grow-[1]">
      <ul className="list-none">
        {Object.keys(professions).map((item) => (
          <li
            key={professions[item]._id}
            href="/dashboard"
            className="self-start font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-indigo-300 ease-in-out duration-300 hover:text-slate-900"
            onClick={() => onSelect(professions[item].name)}
            role="button"
          >
            {professions[item].name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GroupList
