import React from 'react';
import { PROJECTS } from '../../api/db';
import { ProjectCard } from '../Home/Portfolio';

const Projects = () => {
    return <div>
            <h1>Projects!!!</h1>
            
            <div className="Projects__Container">
                {
                    PROJECTS.map(project => <ProjectCard {...project} />)
                }
            </div>
        </div>
}


export default Projects;