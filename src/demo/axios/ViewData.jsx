import { Img } from '@chakra-ui/react'
import React from 'react'

export const ViewData = (props) => {
  const { datas } = props
  return (
    <div>
    {datas &&
      datas.map((data) => (
        <div key={data.id}>
          id:{data.id},{data.title === undefined ? `name:${data.name}` :`name:${data.title}`}
          {data.url && 
            <img src={`${data.url}`} />
          }
        </div>
      ))}
  </div>
  )
}
