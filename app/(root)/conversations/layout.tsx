import React from 'react'

type Props = {
  children: React.PropsWithChildren<{}>;
}

const ConversationLayout  = ({children} : Props) => {
  return (
    <>
      {children}
    </>
  )
}
    
  


export default ConversationLayout
