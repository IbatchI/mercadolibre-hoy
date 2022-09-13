import { API_URL } from './settings'

export default async function getDetailProduct(id: string) {
  const detailUrl = `${API_URL}/items/${id}`
  const descriptionUrl = `${API_URL}/items/${id}/description`

  const res = await fetch(detailUrl)
  const response = await res.json()
  const pictures = response.pictures.map((picture: IPicture) => picture.url)

  const resDescription = await fetch(descriptionUrl)
  const responseDescription = await resDescription.json()
  const description = responseDescription.plain_text
  return { pictures, description }
}
