import { useState } from "react";

import API from "../../API";
import Users from "./../Users/index";
import styles from "./app.module.scss";

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || API.users.fetchAll());
  const handleSetFavorite = (id) => {
    const newUsers =  [...users].map((el) =>
    el._id === id ? { ...el, bookmark: !el.bookmark } : el
    )
    localStorage.setItem('users', JSON.stringify(newUsers))
    setUsers(
      newUsers
    );
    
  };
  const handleDelete = (id) => {
    const findNewUsers = [...users].find((el) => el._id === id)
    if (findNewUsers.bookmark) return
    
    const newUsers = [...users].filter((el) => el._id !== id)
    localStorage.setItem('users', JSON.stringify(newUsers))
    setUsers(newUsers);
  };

  return (
    <div className={styles.parant}>
      <Users users={users} setFavorite={handleSetFavorite} onDelete={handleDelete} />
    </div>
  );
}

export default App;
