import { useState } from "react";

import API from "../../API";
import Users from "./../Users/index";
import styles from "./app.module.scss";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleSetFavorite = (id) => {
    setUsers(
      [...users].map((el) =>
        el._id === id ? { ...el, bookmark: !el.bookmark } : el
      )
    );
  };

  return (
    <div className={styles.parant}>
      <Users users={users} setFavorite={handleSetFavorite} />
    </div>
  );
}

export default App;
