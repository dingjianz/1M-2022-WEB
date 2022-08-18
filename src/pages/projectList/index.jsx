import { useEffect, useState } from "react";
import List from "../../components/projectList/List";
import SearchPanel from "../../components/projectList/SearchPanel";

const apiUrl = process.env.REACT_APP_API_URL

const ProjectListPages = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch(`${apiUrl}/projects`);
      console.log('res:::', res);
      if (res.ok) {
        const r = await res.json()
        console.log(r)
        setList(r)
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers()
  }, [param]);

  return (
    <div>
      <SearchPanel {...{
        param,
        setParam
      }} />
      <List list={list} />
    </div>
  );
}

export default ProjectListPages;
