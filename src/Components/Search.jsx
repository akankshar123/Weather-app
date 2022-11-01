import React, { useRef } from 'react'

export default function Search(props) {
    const searchInput = useRef();
    return (
        <div className='flex shadow-xl'>
            <input type="search" value={props.searchData} className='border border-black w-full p-3 text-2xl' onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
            <button onClick={props.searchWeather} className='p-3 bg-emerald-300 text-black'>Search</button>
        </div>
    )
}