
import React, { useContext} from 'react'
import { QuatesContext } from '../Context/QuatesContext';
import './QuateCard.css';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

export default function QuateCard(props) {
  const ctx = useContext(QuatesContext);
  

  const BtHandler =()=>
  {
    console.log("hello");
    ctx.SetList(props.data);
    console.log(ctx.bookmarklist);
    ctx.setbk(true)
  }
  return (
    <div className='QuatecardInnerDiv'> 
    <h3>{props.data.name}</h3>
    <p>{props.data.aname}</p>
    <div className="PBt">
      
    <button className='Bt' onClick={BtHandler}>{ctx.bk?<BookmarkAddedIcon/>:<BookmarkAddIcon/>}</button>
    </div>
  </div>
  )
}
