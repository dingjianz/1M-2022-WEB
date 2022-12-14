import { FC } from "react";
interface IProps {
  users: ITodo.IUser[];
  list: ITodo.IProject[];
}

const List: FC<IProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((project) => (
          <tr key={project?.id}>
            <td>{project?.name}</td>
            <td>{users.find((user) => user.id === project?.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
