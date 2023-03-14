import React, { useContext } from 'react'
import { QuatesContext } from '../Context/QuatesContext'
import BookMarkCard from './BookMarkCard'
import './Bookmark.css';

export default function Bookmark() {
  const ctx = useContext(QuatesContext);
  return (
    <div className='BookMarkOuterDiv'>
      
      {ctx.bookmarklist.map((item)=>{
        return(
          <BookMarkCard name={item.name} aname={item.aname}/>

        )})}
    </div>

  )
}
