import React, { useContext, useState } from 'react'
import "./AppBody.css"
import QuateCard from './QuateCard'
import axios from 'axios';
import { QuatesContext } from '../Context/QuatesContext';

export default function AppBody() {
  const ctx = useContext(QuatesContext);
  const [quatedata,setquatedata] = useState({name: 'If only wed stop trying to be happy wed have a pretty good time.', aname: 'Edith Wharton'});
  var text = "";

  const SelectHandler = (e)=>{
    
    text = e.target.value;
    console.log(text);
  }
  const Quatefech =()=>{

    ctx.setbk(false);

    axios({
      url :'https://api.quotable.io/random?tags='+text,
      method: 'GET'

    }).then( (res)=>{
      console.log(res.data);
      const d ={
          name:res.data.content,
          aname:res.data.author
        }
        setquatedata(d);
        console.log(quatedata);
      
    }).catch((err)=>{
      console.log("error");
      console.log(err);
    });
  }

  
  return (
    <div className='OuterDiv'>
      <QuateCard data = {quatedata} />
      <select className='Select'   onChange={SelectHandler} >
        <option value=" " selected="selected"></option>
        <option value="motivational">motivational</option>
        <option value="famous-quotes">famous-quotes</option>
        <option value="wisdom">wisdom</option>
      </select>
      <button className='Buttion' onClick={Quatefech}>Next Quote</button>
    </div>
  )
}
