import React from 'react';
import Button from '../../components/shared/Button';
import { useHistory } from "react-router-dom";
import { PROJECTS, IProject } from '../../api/db';
import Ink from 'react-ink';


const Portfolio = () => {
    const history = useHistory();

    const handleButtonClick = () => {
      history.push("/projects");
    }

    return <>
      <div className="Portfolio">
        <h2>😍 See our portfolio! 😍</h2>

        <div className="Portfolio__Projects">
          {
            PROJECTS.map(project => <ProjectCard key={project.short} {...project} />)
          }
        </div>

        <Button brandColor="third" onClick={handleButtonClick}>SEE MORE</Button>
      </div>
    </>
}

// TODO: Przenieść ProjectCard do osobnego pliku. src/components/Shared/ProjectCard.tsx

type ProjectCardProps = IProject & {};

/**
 * Opisz po co ta funkcja (komponent) jest.
 */
export const ProjectCard = (props: ProjectCardProps) => {
  const history = useHistory();

  const handleNavigation = () => {
    const url = `/project/${props.short}`;
    history.push(url);
  }
  
  return <div className="ProjectCard" onClick={handleNavigation}>
          <div className="ProjectCard__ImgContainer">
            <img src={props.front_url} />
            <Ink />
          </div>
          <div className="ProjectCard__ContentContainer">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
}

export default Portfolio;