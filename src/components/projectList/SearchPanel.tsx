import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  users: ITodo.IUser[];
  param: ITodo.IParam;
  setParam: Dispatch<SetStateAction<ITodo.IParam>>;
}

const SearchPanel: FC<IProps> = ({ param, setParam, users }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParam((preParam: ITodo.IParam) => ({
      ...preParam,
      name: e.target.value,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
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
