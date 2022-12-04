import _ from "lodash"

function TableBody({ data, columns }) {
  return (
    <tbody className="devide-y devide-gray-100">
      {data.map((item, index) => (
        <tr
          key={item._id}
          className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}
        >
          {Object.keys(columns).map((tableData) => (
            <td className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold">
              {_.get(item, columns[tableData].path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody

/* <tr className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}>
<td className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold">
  {user.name}
</td>
</tr> */
