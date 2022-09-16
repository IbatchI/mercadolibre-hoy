export const capitalizeFirstLetter = (str: string) => {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalized
}
interface IQuantities {
  id: number
  quantity: number
}

const originalQuantities = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 2 },
  { id: 3, quantity: 3 },
  { id: 4, quantity: 4 },
]

const editedQuantities = [
  { id: 1, quantity: 6 },
  { id: 2, quantity: 6 },
  { id: 3, quantity: 6 },
  { id: 4, quantity: 6 },
]
const areAllQuantitiesEdited = (quantities: IQuantities[], editedQuantities: IQuantities[]) => {
  
}
