import { Form } from '../../UI/atoms/Form/FormStyles'
import { H3 } from '../../../styles/SearchResultsStyles'
import { Input } from '../../UI/atoms/Input/Input'
import { StyledGlobalContainer } from '../../../../utils/styledGlobal'
import { useAppSelector } from '../../../store/hooks'
import { Checkbox } from '../../UI/atoms/Checkbox/Checkbox'
import { useState } from 'react'

export const SearchDetail = () => {
  const { searchById } = useAppSelector((state) => state.searches)
  const [checked, setchecked] = useState(false)

  return (
    <StyledGlobalContainer>
      <H3>Detalle de la busqueda :{searchById?.keyword}</H3>
      <Form width="100%">
        <Input
          height={'50px'}
          id="name"
          name="name"
          placeholder={searchById?.keyword || ''}
          required
          type={'text'}
        />
        <Input
          height={'50px'}
          id="minPrice"
          name="minPrice"
          placeholder={'Precio minimo'}
          required
          type={'number'}
        />
        <Input
          height={'50px'}
          id="maxPrice"
          name="maxPrice"
          placeholder={'Precio maximo'}
          required
          type={'number'}
        />
        <Checkbox
          checked={checked}
          id="marcadoComoVisto"
          label={'Marcado como visto'}
          name="marcadoComoVisto"
          onClick={() => setchecked((oldChecked: boolean) => !oldChecked)}
          required
          type={'checkbox'}
        />
      </Form>
    </StyledGlobalContainer>
  )
}
