import { Children, createContext, useState } from "react";
import { URLTASK } from "../Services/URL";
import API from "../Services/webapiservices";
export const TasksContext = createContext({});

export const TasksProvider = () => {
  //Como geralmente são TAREFAS, logo ,talvez,usa-se um array
  const [tasks, setTasks] = useState([]);

  const postTask = async (param) => {
    await API.post(URLTASK, param)
      .then((response) => {
        if (response) setTasks(response);

        return response;
      })
      .catch((error) => console.log(error));
  };

  //Estudar como será de fato o get e post de tarefas,no caso a variável de context,
  const getTask = async (id) => {
    return await API.get(`${URLTASK}/${id}`)
      .then((response) => {
        if (response) setTasks(response);
      })
      .catch((error) => console.log(error));
  };
  const putTask = async (param) => {
    return await API.put(URLTASK, param)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {Children}
    </TasksContext.Provider>
  );
};
