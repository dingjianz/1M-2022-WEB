import { useEffect, useState } from "react";

const SearchPanel = ({ param, setParam }) => {
  const [users, setUsers] = useState([]);
  
  const handleChange = (e) => {
    setParam((preParam) => ({
      ...preParam,
      name: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    setParam((preParam) => ({
      ...preParam,
      personId: e.target.value,
    }));
  };

  return (
    <form action="">
      <div>
        <input type="text" value={param.name} onChange={handleChange} />
        <select value={param.personId} onChange={handleSelect}>
          {users.map((user) => (
            <option value={user?.id}>{user?.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
