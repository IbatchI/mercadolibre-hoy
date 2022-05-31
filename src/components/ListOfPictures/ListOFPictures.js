import Picture from 'components/Picture/Picture'
import './ListOfPictures.css'

export default function ListOfPictures({ pictures }) {
  return (
    <div className="ListOfPictures">
      {pictures.map((picture, index) => 
        <Picture pictureURL={picture} key={index} />
      )}
    </div>
  )
}
