const SearchPanel = ({ param, setParam, users }) => {
  const handleChange = (e) => {
    setParam((preParam) => ({
      ...preParam,
      name: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    setParam((preParam) => ({
      ...preParam,
      personId: Number(e.target.value),
    }));
  };

  return (
    <form action="">
      <div>
        <label htmlFor="ipt">名称：</label>
        <input
          id="ipt"
          type="text"
          value={param.name}
          onChange={handleChange}
        />
        <select value={param.personId} onChange={handleSelect}>
          {users.map((user) => (
            <option value={user?.id} key={user?.id}>
              {user?.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
