import React from 'react';
import { PROJECTS } from '../../api/db';
import { useParams } from 'react-router-dom';
import Button from "../../components/shared/Button";
import Flex from "../../components/utils/Flex";
import cx from "classnames";
import { STACK_ICONS_MAP, STACK_ICONS, STACK_LABELS_MAP } from '../../api/utils';

/** Wyciąga id z url i zwraca adekwatny projekt z listy projektów. */
const useProject = () => {
    const { short } = useParams();

    return PROJECTS.find(pr => pr.short === short);
}

const Project = () => {
    const data = useProject();

    
    // Wyświetlamy error handler w razie gdyby produkt nie istniał.
    if(data === null) return <div>Nie znaleziono projektu</div>
    // Wyświetlamy loader...
    if(!data) return <div>Loading...</div>
    
    // Nasz thumbnail wyjęty z data.media gotowy do maltretowania.
    const thumbnail = data.media[0];

    // Sklejamy klase dla "Project__ImgWrapper" plus "Project__ImgWrapper--vertical" pod WARUNKIEM, że thumbnail.orientation ma podaną wartość "vertical"
    const imgWrapperClass = cx("Project__ImgWrapper", { "Project__ImgWrapper--vertical": thumbnail.orientation === "vertical" });

    return <div className="Project">
            <div className="Project__Container">
                <div className={imgWrapperClass}>
                    <img src={thumbnail.url} alt="project thumbnail" />
                </div>
                
                <div style={{flex: 1}} className="Project__ContentWrapper">
                    <div>
                        <h1>Project {data?.title}</h1>
                        <StackIcons stack={data.stack} />

                        <p>{data?.description}</p>              
                    </div>
                    <div className="Project__ButtonWrapper">
                        <Button brandColor="primary" onClick={console.log}>VISIT DEMO</Button>
                    </div>
                </div>
            </div>
            <div className="Project__BottomContainer">
            </div>
        </div>
}

const StackIcons = ({stack}: {stack: STACK_ICONS[]}) => {

    return <Flex justifyContent="flex-start" flexWrap="wrap" alignItems="center" className="Project__ContentWrapper__StackIcons">
        { stack.map(item => <i title={STACK_LABELS_MAP[item]} className={STACK_ICONS_MAP[item]} />) }
    </Flex>
}

export default Project;
