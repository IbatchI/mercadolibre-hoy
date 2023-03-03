import { Button } from '../../UI/atoms/Button/Button'
import { Checkbox } from '../../UI/atoms/Checkbox/Checkbox'
import { Form } from '../../UI/atoms/Form/FormStyles'
import { H3 } from '../../../styles/SearchResultsStyles'
import { Input } from '../../UI/atoms/Input/Input'
import { useSearchDetailForm } from '../../../hooks/useSearchDetailForm'

export const SearchDetail = () => {
  const {
    disabledSubmit,
    handleOnBlur,
    handleOnChange,
    handleOnSubmit,
    keywordError,
    maxPriceError,
    minPriceError,
    values,
  } = useSearchDetailForm()

  const { keyword, minPrice, maxPrice, alreadySeen } = values

  console.log({ keyword, minPrice, maxPrice, alreadySeen })

  return (
    <Form onSubmit={handleOnSubmit} width={'40%'}>
      <H3>Detalle de la búsqueda: {keyword}</H3>
      <Input
        error={keywordError}
        height={'50px'}
        id="keyword"
        name="keyword"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={keyword || ''}
        required
        type={'text'}
        value={keyword}
      />
      <Input
        error={minPriceError}
        height={'50px'}
        id="minPrice"
        name="minPrice"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Precio minimo'}
        required
        type={'number'}
        value={minPrice}
      />
      <Input
        error={maxPriceError}
        height={'50px'}
        id="maxPrice"
        name="maxPrice"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Precio maximo'}
        required
        type={'number'}
        value={maxPrice}
      />
      <Checkbox
        checked={alreadySeen}
        id="alreadySeen"
        label={'Marcado como visto'}
        name="alreadySeen"
        onChange={handleOnChange}
        type={'checkbox'}
      />
      <Button
        disabled={disabledSubmit}
        fontWeight={'bold'}
        // loading={loading}
        textColor="white"
        type="submit"
        width={'100%'}
      >
        Guardar cambios
      </Button>
    </Form>
  )
}
