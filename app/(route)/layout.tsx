import SideBar from '@/components/ui/shared/SideBar'
import React from 'react'

type Props = React.PropsWithChildren<{}>

 const layout = ({ children }: Props) => {
  return (
    <SideBar>{children}</SideBar>
  )
}
export default layout