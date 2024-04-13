import React from 'react'
import './songcard.css'
import AlbumInfo from './albumInfo'
import AlbumImage from './albumImage'

export default function Songcard({album}) {
  return (
    <div className='songCard-body'>
      <AlbumImage url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>
    </div>
  )
}
