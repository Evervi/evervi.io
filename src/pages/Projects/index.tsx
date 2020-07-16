import React, { useMemo, useState, useEffect } from 'react';
import { PROJECTS, IProject } from '../../api/db';
import ProjectCard from '../../components/shared/ProjectCard';
import SearchBar from '../../components/shared/SearchBar';
import ErrorComponent from '../../components/shared/ErrorComponent';
import { translateHead } from '../../utils/translateHead';
import {useLittera, useLitteraMethods} from 'react-littera';

const findKeywords = (haystack: string[], needle: string) => {
    return haystack.find((hay: string) => hay.includes(needle));
}

const filterProject = (search: string) => (project: IProject) => {
    let pass = false;

    // Sprawdza czy w stacku jest element równy wyszukiwaniu.
    if(Boolean(findKeywords(project?.stack ?? [], search))) 
        pass = true;

    // Sprawdza czy w keywordsach jest element równy wyszukiwaniu.
    if(Boolean(findKeywords(project?.keywords ?? [], search))) 
        pass = true;

    // Sprawdza czy wyszukiwanie zawiera frazę tytułu.
    if(Boolean(project?.title.includes(search))) 
        pass = true;

    // Sprawdza czy wyszukiwanie zawiera frazę skrótu.
    if(Boolean(project?.short.includes(search))) 
        pass = true;

    return pass;
}

const Projects = () => {
    const { locale } = useLitteraMethods();
    useEffect (()=> {
        translateHead(locale as "pl_PL" | "en_US",  "portfolio")
  
    },[locale])
    
    const [search, setSearch] = useState('');

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const projectsMap: IProject[] = useMemo(() => {
        if(!search) return PROJECTS;

        const matchSearch = PROJECTS.filter(filterProject(search))
        if(search && matchSearch) return matchSearch;

        return [];
    }, [search]);

    return <div className="Projects">
            <div className="Projects__HalfKolo"><div></div></div>

            <>
                <div style={{ maxWidth: "60%", margin: "0 auto", paddingTop: "40px" }}>
                    <SearchBar onChange={handleSearch} />
                </div>
                <div className="Projects__Container">
                    {
                        projectsMap.length > 0 ?
                            projectsMap.map(project => <ProjectCard {...project} />)
                            :
                            <ErrorComponent message="Brak wyników wyszukiwania." />
                    }
                </div>
            </>

        </div>
}


export default Projects;