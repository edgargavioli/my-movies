import React from 'react'

const TableRow = ({index, Title, Year, Genre, Poster}) => {
  return (
    <div id={index} className='m-3 flex-row justify-center items-center'>
        <div className='flex items-center justify-center h-full'>
            <img src={Poster} alt={Title} className='w-72 h-72 self-center' />
        </div>
        <p>{Title}</p>
        <p>{Genre}</p>
        <p>{Year}</p>
    </div>
  )
}

export default TableRow