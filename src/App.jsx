import {useState} from "react";
import ProjectList from "./components/ProjectList";

function App() {
    const [projectList, setProjectList] = useState([]);
    const [projectId, setProjectId] = useState(0);


    console.log(projectList);


    function addNewProject(newproject) {

        if(newproject.title) {
            setProjectList((prevProjects) => {
                return [...prevProjects, newproject];
            })

        }
    }
    function changeId(id) {
        setProjectId(id);
    }
    function addNewTask(id, taskTitle, taskId) {
        let arrayId = 0;
        const list = [...projectList];
        list.forEach((val, i)  => {
            if(+val.id === +id) {
                arrayId = i;
            }
        });
        list[arrayId].tasks.push(taskTitle);
        setProjectList(list);
    }

    function deleteTask(id) {
        console.log(id);
    }
    function deleteProject(id) {
        const newProjectList = projectList.filter(val => val.id !== id);
        setProjectList(newProjectList);
    }
  return (
    <>
        <h1 className="{/*my-8 text-center text-5xl font-bold*/}">Hello World</h1>
        <ProjectList
            projects={projectList}
            addNewProject={addNewProject}
            projectId={projectId}
            addNewTask={addNewTask}
            changeId={changeId}
            deleteTask={deleteTask}
            deleteProject={deleteProject}
        />
    </>
  );
}

export default App;
