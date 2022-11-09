import Bookmark from "../Bookmark";
import Qualitie from "../Qualitie";
import Rating from "../Rating";

const User = ({ user, index, ...props }) => {
  return (
    <>
      <tr className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}>
        <td className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold">
          {user.name}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex flex-wrap gap-2 justify-start">
          <Qualitie qualities={user.qualities} />
        </td>
        <td className="p-3 text-gray-700 text-base whitespace-nowrap">
          {user.profession.name}
        </td>
        <td className="p-3 text-gray-700 text-base whitespace-nowrap">
          {user.completedMeetings}
        </td>
        <td className="p-3 text-gray-700 text-base whitespace-nowrap">
          <Rating rating={user.rate} />
        </td>
        <td className="p-3 text-gray-700 text-base whitespace-nowrap">
          <Bookmark
            onClick={() => props.setFavorite(user._id)}
            checked={user.bookmark}
          />
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <button
            disabled={user.bookmark}
            onClick={() => props.onDelete(user._id)}
            className={`py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md ${
              user.bookmark ? "bg-slate-700" : "hover:bg-red-700"
            }  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
