import React from 'react';
import { PROJECTS } from '../../api/db';
import { useParams } from 'react-router-dom';

/** Wyciąga id z url i zwraca adekwatny projekt z listy projektów. */
const useProject = () => {
    const { short } = useParams();

    return PROJECTS.find(pr => pr.short === short);
}

const Project = () => {
    const data = useProject();

    // Wyświetlamy error handler w razie gdyby produkt nie istniał.
    if(data === null) return <div>Nie znaleziono projektu</div>

    return <div>
            <h1>Project {data?.title}</h1>
        </div>
}


export default Project;