import { Button } from '../../UI/atoms/Button/Button'
import { Checkbox } from '../../UI/atoms/Checkbox/Checkbox'
import { Form } from '../../UI/atoms/Form/FormStyles'
import { H3 } from '../../../styles/SearchResultsStyles'
import { Input } from '../../UI/atoms/Input/Input'
import { useSearchDetailForm } from '../../../hooks/useSearchDetailForm'
import { useParams } from 'react-router-dom'

export const SearchDetail = () => {
  const { id } = useParams()
  const {
    disabledSubmit,
    handleOnBlur,
    handleOnChange,
    handleOnSubmit,
    keywordError,
    loading,
    maxPriceError,
    minPriceError,
    values,
  } = useSearchDetailForm({ searchId: id || '' })

  const { keyword, minPrice, maxPrice, allreadySeen } = values

  return (
    <Form onSubmit={handleOnSubmit} width={'40%'}>
      <H3>Detalle de la búsqueda: {keyword}</H3>
      <Input
        error={keywordError}
        height={'50px'}
        id="keyword"
        loading={loading}
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
        loading={loading}
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
        loading={loading}
        name="maxPrice"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Precio maximo'}
        required
        type={'number'}
        value={maxPrice}
      />
      <Checkbox
        checked={allreadySeen}
        // TODO: Integrar con BE
        disabled={true}
        id="allreadySeen"
        label={'Marcado como visto'}
        name="allreadySeen"
        onChange={handleOnChange}
        type={'checkbox'}
      />
      <Button
        disabled={disabledSubmit}
        fontWeight={'bold'}
        loading={loading}
        textColor="white"
        type="submit"
        width={'100%'}
      >
        Guardar cambios
      </Button>
    </Form>
  )
}
