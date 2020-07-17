import React from 'react';
import Button from '../../components/shared/Button';
import ProjectCard from '../../components/shared/ProjectCard';
import { useHistory } from "react-router-dom";
import { PROJECTS } from '../../api/db';
import { useLittera } from 'react-littera';
import translations from '../../translations/pages';


const Portfolio = () => {
  const translated = useLittera(translations);

    const history = useHistory();

    const handleButtonClick = () => {
      history.push("/projects");
      document.documentElement.scrollTop = 0;
    }

    return <>
      <div className="Portfolio">
        <h2>{translated.recentWorks}</h2>

        <div className="Portfolio__Projects">
          {
            PROJECTS.filter((__p, index) => index < 3).map(project => <ProjectCard key={project.short} {...project} />)
          }
        </div>
        <Button brandColor="third" onClick={handleButtonClick}>{translated.seeMore}</Button>
      </div>
    </>
}

export default Portfolio;