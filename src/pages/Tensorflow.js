import React, { useRef} from 'react'
import { motion } from "framer-motion";
import useTFClassify from '../utils/hooks/useTFClassify';



export default function Tensorflow() {

    const imageRef = useRef();
    
    const [predict, predictions, isLoading] = useTFClassify();


  return (
    
    <section className='flex justify-center'>
                
        <div className='Container'>
            <div className='flex py-12'>
                <motion.h1 
                  initial={{ opacity: 0, x: -300}} animate={{ scale: 1.5, opacity: 1, x: 0,
                    transition: { duration: 2 },
                    rotate: 360,
                  }}
                  className='m-auto font-semibold text-[30px] text-green-600 text-center'>
                    TensorFlow Img Display
                </motion.h1>
            </div>

            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                <img 
                    src='https://tinyurl.com/2bxzxbun' 
                    ref={imageRef} 
                    crossOrigin='anonymous'
                    width="500"
                />
            </motion.div>

            <div className='text-center my-7'>

                {
                    predictions.length > 0 && 
                        
                    predictions.map((prediction) => (

                        <div className='flex justify-between'>
                            <p>{prediction.className}</p>
                            <p>{Math.floor(prediction.probability * 100)} %</p>
                        </div>

                    ))
                }

                <button 
                    onClick={() => predict (imageRef.current)}
                    className='p-2 w-80 rounded bg-green-600 text-white hover:bg-green-400' 
                    >

                    {isLoading && "⏳"}
                    
                    {!isLoading && "Predict Result"}
                    

                    
                </button>
            </div>

        </div>
    </section>

  )
}
