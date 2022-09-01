import { useState } from 'react'
import { Button } from '../../atoms/Button/StyledButton'
import { Input } from '../../atoms/TextInput/StyledTextInput'

export const SearchBox = () => {
  const [search, setSearch] = useState<string>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ search })
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={search} placeholder="Busque su product..." />
      <Button>Submit</Button>
    </form>
  )
}
