import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types';
import useTFClassify from '../utils/hooks/useTFClassify';


function Image({ index, image, handleRemove, show}) {

    const [isHovering, setIsHovering] = useState(false);

    const imageRef = useRef();

    const [predict, predictions, setPredictions, isLoading] = useTFClassify();




  return (

    <div className='relative'

        onMouseEnter={() => setIsHovering (true)} 
        onMouseLeave={() => setIsHovering (false)}
        >

        {
            (predictions.length > 0 || isLoading) && (
                <span 
                    onClick={() => setPredictions([])}
                    className='absolute bg-gray-800 text-white 
                    px-2 rounded-lg shadow ml-7 top-1 left-0 cursor-pointer'
                >
                    {isLoading && <p>Fetching Results...</p>}
                    {
                        predictions.map((prediction) => (

                            <div className='flex justify-between text-sm'>
                                <p>{prediction.className}</p>
                                <p>{Math.floor(prediction.probability * 100)} %</p>
                            </div>
    
                        ))
                    }
                </span>
            )
        }

        <i className={`fa fa-times absolute right-2 top-2 text-red-700 
            opacity-25 hover:opacity-100 cursor-pointer ${
                isHovering ? "" : "hidden"
            }`}
            onClick={() => handleRemove (index)} >
        </i>
        <i className={`fa fa-search absolute left-2 top-2 text-red-700 
            opacity-25 hover:opacity-100 cursor-pointer ${
                isHovering ? "" : "hidden"
            }`}
            onClick={() => predict (imageRef.current)} >
        </i>

        <img 
            ref={imageRef}
            onClick={show}
            alt='Random img'
            src={image} 
            width="100%" 
            height="auto" 
            crossOrigin='anonymous'
        />
    </div>
    
  )
}



// const types = {
//     function(props, propName){
//         if (typeof props[propName] !== "function") {
//             return new Error(
//                 `
//                     '${propName}' must be a function but you have provided 
//                     ${typeof props[
//                         propName
//                     ]}
//                 `
//             );
//         }
//     },
//     number (props, propName) {
//         if (typeof props[propName] !== "number") {
//             return new Error(
//                 `
//                     '${propName}' must be a number but you have provided 
//                     ${typeof props[
//                         propName
//                     ]}
//                 `
//             );
//         }
//     }
// }


Image.propTypes = {
    show: PropTypes.func,

    index: PropTypes.number,

    image: PropTypes.string,

    handleRemove: PropTypes.func,
};


export default Image;
