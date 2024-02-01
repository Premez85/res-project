import './ProjectList.css';
import {useRef, useState} from "react";
import ProjectPage from "./ProjectPage";

export default function ProjectList({projects, addNewProject, projectId, addNewTask, changeId, deleteTask, deleteProject}) {
    const [idx, setIdx] = useState(0);
    const [inputActive, setInputActive] = useState(false);
    const projectTitle = useRef('');
    const projectDescription = useRef('');
    const proDate = useRef('');

    const projectList = projects.map((project) => <button onClick={(e)=>handleClickChoose(e)} key={project.id} data-id={project.id}>{project.title}</button>)
    function addId() {
        setIdx((prev) => prev + 1 )
        return idx;
    }
    function handleClickChoose(e) {
        changeId(e.target.getAttribute('data-id'));
    }
    function handleClickAdd() {
        setInputActive((prev) => !prev);
        projectTitle.current.value && addNewProject({id: addId(), title: projectTitle.current.value, description: '', date: '', tasks: []});
        projectTitle.current.value = '';
        projectDescription.current.value = '';
    }
    return (
        <>
            <h2>Your Projects</h2>
            <div className="project-list-buttons">
                {projectList}
            </div>

            <button className='add_project_button' type='button' onClick={handleClickAdd}>
                {inputActive? 'Close': '+ Add Project'}
            </button>
            <div className={inputActive? undefined: 'invisible'}>
                <input id='add_project_title'   type="text" ref={projectTitle}/>
                <input type="text" ref={projectDescription}/>
                <input type="date" ref={proDate}/>

            </div>

            <ProjectPage
                projectList={projects}
                projectId={projectId}
                addNewTask={addNewTask}
                deleteTask={deleteTask}
                deleteProject={deleteProject}
            />
        </>
    );
}