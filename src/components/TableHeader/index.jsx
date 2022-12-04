function TableHeader({ onSort, selectedSort, columns = {} }) {
  const handleSort = (items) => {
    if (selectedSort.path === items) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "desc" ? "asc" : "desc"
      })
    } else {
      onSort({ path: items, order: "desc" })
    }
  }
  return (
    <thead className="bg-emerald-100">
      <tr>
        {Object.keys(columns).map((col) => (
          <th
            key={col}
            onClick={
              columns[col].path
                ? () => handleSort(columns[col].path)
                : undefined
            }
            className="p-3 text-sm font-semibold tracking-white text-left"
            {...{ role: columns[col].path && "button" }}
          >
            {columns[col].name}
          </th>
        ))}
        <th> </th>
      </tr>
    </thead>
  )
}

export default TableHeader
