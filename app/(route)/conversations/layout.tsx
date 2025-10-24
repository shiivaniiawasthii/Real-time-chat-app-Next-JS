import React from 'react'

type Props = React.PropsWithChildren<{}>

function layout({ children }: Props) {
  return (
    <div>{children}</div>
  )
}

export default layout