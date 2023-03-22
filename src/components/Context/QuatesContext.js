import React, { createContext, useState } from 'react'

export const QuatesContext = createContext();

export const  QuatesContextProvider = ({children})=> {

    const [BookMarkList,SetBookMarkList] = useState([]);
    const SetList =(value)=>{
        SetBookMarkList([...BookMarkList,value])
    }
    const [bookmarked,setbookmarked] = useState(false);
  return (
    <QuatesContext.Provider 
    value={
        {
            bookmarklist : BookMarkList,
            SetList : SetList,
            bk:bookmarked,
            setbk:setbookmarked

        }
    }>
        {children}
    </QuatesContext.Provider>
  )
}
