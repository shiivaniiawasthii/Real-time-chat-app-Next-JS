import SideBar from '@/components/ui/shared/SideBarWrapper';
import React from 'react'

type Props =  React.PropsWithChildren<{}>;


const Layout  = ({children} : Props) => {
  return (
    <SideBar>{children}</SideBar>
  )
}
    
  


export default Layout
