import './ProjectPage.css';
import { createPortal } from 'react-dom';
import {useRef} from "react";


export default function ProjectPage({projectList, projectId, addNewTask, deleteTask, deleteProject}) {
    const taskTitle = useRef('');
    function handleClick() {
        taskTitle.current.value && addNewTask(id, taskTitle.current.value);
        taskTitle.current.value = '';
    }

    function handleClickDeleteProject(idx) {
        deleteProject(idx);
    }

    if(projectList[projectId]) {

        const {id, title, tasks, description} = projectList[projectId];

        const htmlTasks = tasks.map((val, i) => {
            return(
                <li key={`${val}-${i}`} className="project-page-item">
                    {val}
                    <button data-id={1}>Delete</button>
                </li>
            );
        })
        return createPortal(
            <section className='project-page'>
                <header className='project-page-header'>
                    <h1 className="project-page-title">{title}</h1>
                    <button onClick={()=>handleClickDeleteProject(id)}>Delete</button>
                </header>
                <main>
                    <div className="project-page-description">
                        {description}
                    </div>
                    <div className='project-page-form'>
                        <input ref={taskTitle} className='project-page-input' type="text"/>
                        <button onClick={handleClick} className='project-page-button'>Add Task</button>
                    </div>
                    <hr/>
                    <ul className="project-page-list">
                        {htmlTasks}
                    </ul>
                </main>
            </section>,
            document.getElementById('right-side')
        )
    }
    return false;




}

