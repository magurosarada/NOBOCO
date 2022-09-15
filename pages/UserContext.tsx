import React, { createContext, FC, ReactNode, useContext } from 'react'

const UserContext = createContext<any>('');

type user ={
  userImageURL:string,
  userId:string,
  userName:string,
  children:ReactNode,
}

export const UserContentProvider:FC<user> = ({children}) => {
  return (
    <div>
      <UserContext.Provider value={UserContentProvider}>{children}</UserContext.Provider>
    </div>
  )
}

 export const useUser = () => useContext(UserContext);

