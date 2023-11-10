import React, { useEffect } from 'react'
import TableRow from './tablerow'

const body = ({response}) => {
  return (
    <div className="flex-col justify-center items-center text-center">
        {
          response.map((item, index) => (
            <TableRow key={index} index={index} Title={item.Title} Year={item.Year} Type={item.Genre} Poster={item.Poster}/>
          ))
        }
    </div>
  )
}

export default body