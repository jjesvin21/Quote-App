import React, { createContext, useState } from 'react'

export const QuatesContext = createContext();

export const  QuatesContextProvider = ({children})=> {

    const [BookMarkList,SetBookMarkList] = useState([]);
    const SetList =(value)=>{
        SetBookMarkList([...BookMarkList,value])
    }
  return (
    <QuatesContext.Provider 
    value={
        {
            bookmarklist : BookMarkList,
            SetList : SetList
        }
    }>
        {children}
    </QuatesContext.Provider>
  )
}
