import { FC } from 'react'

type User = {
  name: string,
  id: number | string
}

interface IProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: IProps["param"]) => void;
}

const SearchPanel: FC<IProps> = ({ param, setParam, users }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParam((preParam: IProps["param"]) => ({
      ...preParam,
      name: e.target.value,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParam((preParam: IProps["param"]) => ({
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
          // onChange={evt => setParam({
          //   ...param,
          //   name: evt.target.value
          // })}
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
