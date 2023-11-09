import React, { useState, useEffect } from 'react';
import { FaSistrix } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import apiService from '../service/search'

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const Header = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    const eventOpenSearch = (e) => {
        e.preventDefault()
        const inputSearch = document.querySelector('#inputSearch')
        const aSearchOpen = document.querySelector('#searchOpen')
        const aClose = document.querySelector('#close')
        inputSearch.classList.toggle('invisible')
        aSearchOpen.classList.toggle('invisible')
        aClose.classList.toggle('visible')
    }

    useEffect(() => {
        async function fetchData(){
            try{
                const result = await apiService.fetchMovies(search)
                props.setResponse(result)
            }catch(error) {
                console.log(error)
            }
        }
    }, [search])

    return (
        <div id='header' className={`flex justify-between items-center w-screen h-16  ${scrollY > 1 ? 'fixed top-0 left-0 right-0 bg-violet-500' : 'bg-violet-500'}`}>
            <div className='ml-10'>
                <h1 className='font-mono text-3xl text-white'>
                    Logo
                </h1>
            </div>
            <div id='inputSearch' className='w-1/2 invisible flex'>
                <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                placeholder='Pesquise seu filme aqui...' 
                className='w-full rounded-sm focus:outline-none px-5' />
                <a href='#' id='ID' className='font-mono fixed z-10 right-1/4'><FaSistrix className='text-2xl' color='black' /></a>
            </div>
            <div className='flex justify-start items-center mr-10'>
                <a href="" onClick={eventOpenSearch} id='searchOpen' className='font-mono w-full'><FaSistrix className='text-2xl' color='white' /></a>
                <div className='invisible flex justify-between fixed z-10 w-10'>
                    <a href="" onClick={eventOpenSearch} id='close' className='font-mono'><FaX className='text-2xl' color='white' /></a>
                </div>
            </div>
        </div>
    )
}

export default Header;
