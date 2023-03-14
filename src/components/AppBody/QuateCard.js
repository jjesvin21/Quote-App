
import React, { useContext} from 'react'
import { QuatesContext } from '../Context/QuatesContext';
import './QuateCard.css';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

export default function QuateCard(props) {
  const ctx = useContext(QuatesContext);

  const BtHandler =()=>
  {
    console.log("hello");
    ctx.SetList(props.data);
    console.log(ctx.bookmarklist);
  }
  return (
    <div className='QuatecardInnerDiv'> 
    <h3>{props.data.name}</h3>
    <p>{props.data.aname}</p>
    <div className="PBt">
      
    <button className='Bt' onClick={BtHandler}>      <BookmarkAddIcon/></button>
    </div>
  </div>
  )
}
