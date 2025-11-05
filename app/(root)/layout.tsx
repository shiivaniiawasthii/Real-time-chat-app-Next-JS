import React from 'react'

type Props = {
  children: React.PropsWithChildren<{}>;
}

const Layout  = ({children} : Props) => {
  return (
    <>
      {children}
    </>
  )
}
    
  


export default Layout
