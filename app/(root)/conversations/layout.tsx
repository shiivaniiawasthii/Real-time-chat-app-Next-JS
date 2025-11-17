import ItemList from '@/components/ui/shared/ItemList';
import React from 'react'

type Props = {
  children: React.PropsWithChildren<{}>;
}

const ConversationLayout  = ({children} : Props) => {
  return (
    <>
<ItemList title="Conversations"> Convesation Pae</ItemList>
      {children}
    </>
  )
}
    
  


export default ConversationLayout
