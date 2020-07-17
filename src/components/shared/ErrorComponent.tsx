import React from 'react'
import { ReactComponent as ErrorImg } from '../../assets/error_image.svg';
import translations from '../../translations/pages';
import { useLittera } from 'react-littera';

const ErrorComponent = ({ message }: {message: string}) => {
    const translated = useLittera(translations);
        
    return <div className="ErrorComponent">
        <ErrorImg className="ErrorComponent__Image" />
        <h2>{translated.searchErrorTitle}</h2>
        <p>{translated.searchErrorText}</p>
    </div>
}





export default ErrorComponent