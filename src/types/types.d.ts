interface IProduct {
  id: string
  permalink: string
  title: string
  price: number
}

interface IProductDetail extends IProduct {
  pictures: string[]
  description: string
  totalResults: number
}

interface IPicture {
  id
  url
  secure_url
  size
  max_size
  quality
}
