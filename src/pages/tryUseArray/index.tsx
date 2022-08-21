import { useArray } from "../../utils";

interface IPerson {
  name: string;
  age: number;
}

const TryUseArray = () => {
  const persons: Array<IPerson> = [
    { name: "zhangsan", age: 25 },
    { name: "lisi", age: 22 },
  ];

  const { value, clearAll, removeIndex, add } = useArray<IPerson>(persons);

  return (
    <div>
      <div>
        <button onClick={() => add({ name: "John", age: 18 })}>add john</button>
        <button onClick={() => removeIndex(0)}>removeIndex(0)</button>
        <button onClick={clearAll}>clearAll</button>
      </div>
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            <span>index: {index}</span>&emsp;
            <span>name: {item.name}</span>&emsp;
            <span>age: {item.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TryUseArray;
