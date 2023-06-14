import { useEffect, useState } from 'react';
import { getProjects } from "../services/Api.js";


export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

}
