import React from 'react'

export default function NotFound() {
  return (
    <section className='flex justify-center'>
                
        <div className='Container'>
            <div className='flex h-screen'>
                <h1 className='m-auto text-[50px] text-red-600 text-center font-bold'>
                  <span className='items-center'>
                    <i className="fa fa-times text-[200px] font-bold"></i>
                  </span> <br />
                  Error 404 <br/> Page not found !!!
                </h1>
            </div>
        </div>
    </section>
  )
}

