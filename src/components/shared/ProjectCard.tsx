import React from 'react'
import { useHistory } from 'react-router-dom';
import { IProject } from '../../api/db';
import Ink from 'react-ink';

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
            <img alt="projects front" style={props.media[0].orientation === "horizontal" ?{width: "auto", height: "100%"}:{width: "100%", height: "auto"}} src={props.media[0].url} />
            <Ink />
          </div>
          <div className="ProjectCard__ContentContainer">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
}





export default ProjectCard