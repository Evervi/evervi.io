import React from 'react'
import { ReactComponent as ErrorImg } from '../../assets/error_image.svg';

const ErrorComponent = ({ message }: {message: string}) => {
        
    return <div className="ErrorComponent">
        <ErrorImg className="ErrorComponent__Image" />
        <h2>Upss...</h2>
        <p>{message}</p>
    </div>
}





export default ErrorComponent