import React, { useState } from 'react'
import Image from './image';
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utils/hooks/useDebounce';
import { LayoutGroup, motion, AnimatePresence } from "framer-motion"






// FUNCTIONAL BASE COMPONENET rfc

export default function Images() {

    const [page, setPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState(null);

    const [images, setImages, errors, isLoading] = useFetchImage( 
            page,
            searchTerm
        );

   


    function handleRemove(index) {

        setImages([
            ...images.slice(0, index),
            ...images.slice(index + 1, images.length),
        ]);
    }


    // SHOW IMAGES 


    const [showPreview, setShowPreview] = useState(false);
    


    const debounce = useDebounce();

    function handleInput(e) {

        const text = e.target.value;

        debounce(() => setSearchTerm(text));
        
    }



    return  ( 
        
        <section>

            <div className='py-5'>
                <input 
                    type='text' 
                    onChange={handleInput} 
                    className='w-full border-2 border-green-500 p-2 rounded shadow' 
                    placeholder='Search Photos Here...'
                />
            </div>

            {errors.length > 0 && (
                <div className='flex h-screen'>
                    <p className='m-auto text-red-700 text-lg font-semibold'> {errors[0]} </p>
                </div>
            )}


            <LayoutGroup>

                <InfiniteScroll
                    dataLength={images.length} 
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    className='flex flex-wrap'
                >
                    {images.map((img, index) => (

                        <motion.div className='w-1/5 p-1 border flex justify-center' 
                            key={index} 
                            layoutId={ img.urls.regular }
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 2 } }}
                        >
                            <Image 
                                show={() => setShowPreview( img.urls.regular )}
                                image={ img.urls.regular } 
                                handleRemove={handleRemove} 
                                index={index}
                            />
                        </motion.div>
                    ))}
                </InfiniteScroll>

                <AnimatePresence>
                    {
                        showPreview && (
                            <motion.section 
                                layoutId={ showPreview }
                                exit={{ opacity: 0, rotate: 360, transition: {duration: 1} }}
                                className='fixed w-full h-full flex justify-center items-center top-0 left-0 z-50'
                                onClick={() => setShowPreview(false)} 
                            >
                                <div className='border-green-600 border-[2px] rounded-lg relative'>
                                    <img 
                                        className='rounded-lg'
                                        alt='Random img'
                                        src={showPreview} 
                                        width="300" height="auto" 
                                    />
                                    <i className="fa fa-times absolute right-2 top-2 text-red-700 
                                        opacity-25 hover:opacity-100 cursor-pointer text-[18px]">
                                    </i>
                                </div>
                            </motion.section>
                        )
                    }
                </AnimatePresence>

            </LayoutGroup>

            {isLoading && <Loading />}

        </section>
    );


}




