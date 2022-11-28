/* eslint-disable */
function GroupList(props) {
  const { professions, onSelect } = props
  return (
    <nav className="flex flex-col justify-center grow-[1]">
      {Object.keys(professions).map((item) => (
        <a
        key={professions[item]._id}
          href="/dashboard"
          className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
          onClick={() => onSelect(professions[item].name)}
        >
          {professions[item].name}
        </a>
      ))}
    </nav>
  )
}

export default GroupList
