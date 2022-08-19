import { useEffect, useState } from "react";
import List from "../../components/projectList/List";
import SearchPanel from "../../components/projectList/SearchPanel";
import{ useDebounce } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListPages = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  
  const debounceParam = useDebounce(param, 500) // 防抖 hook形式

  const getProjects = async () => {
    try {
      const searchParams = new URLSearchParams();
      let url = `${apiUrl}/projects`;
      if (param?.name) {
        searchParams.append("name", param?.name);
      }
      if (param?.personId) {
        searchParams.append("personId", param?.personId);
      }
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`;
      }
      const res = await fetch(url);
      if (res.ok) {
        const r = await res.json();
        setList(r);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async () => {
    try {
      const res = await fetch(`${apiUrl}/users`);
      if (res.ok) {
        const r = await res.json();
        setUsers(r);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <SearchPanel
        {...{
          param,
          setParam,
          users,
        }}
      />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectListPages;
