import React from 'react';
import Button from '../../components/shared/Button';
import ProjectCard from '../../components/shared/ProjectCard';
import { useHistory } from "react-router-dom";
import { PROJECTS } from '../../api/db';



const Portfolio = () => {
    const history = useHistory();

    const handleButtonClick = () => {
      history.push("/projects");
      document.documentElement.scrollTop = 0;
    }

    return <>
      <div className="Portfolio">
        <h2>Recent works</h2>

        <div className="Portfolio__Projects">
          {
            PROJECTS.filter((__p, index) => index < 3).map(project => <ProjectCard key={project.short} {...project} />)
          }
        </div>
        <Button brandColor="third" onClick={handleButtonClick}>SEE MORE</Button>
      </div>
    </>
}

export default Portfolio;