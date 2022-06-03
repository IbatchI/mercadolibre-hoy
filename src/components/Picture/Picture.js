import React from 'react'
import './Picture.css'

function Picture({ pictureURL }) {
  return <img src={pictureURL} className="Picture" />
}

export default React.memo(Picture)
