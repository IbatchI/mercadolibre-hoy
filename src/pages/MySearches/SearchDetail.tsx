import { useParams } from 'react-router-dom'
import { SiCashapp } from 'react-icons/si'

import { Button } from '../../components/UI/atoms/Button/Button'
import { Form } from '../../components/UI/atoms/Form/FormStyles'
import { H3 } from '../../styles/SearchResultsStyles'
import { Input } from '../../components/UI/atoms/Input/Input'
import { useSearchDetailForm } from '../../hooks/useSearchDetailForm'

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

  const { keyword, minPrice, maxPrice } = values

  return (
    <Form onSubmit={handleOnSubmit} width={'50%'}>
      <H3>Detalle de la búsqueda: {keyword}</H3>
      <Input
        error={keywordError}
        height={'50px'}
        id="keyword"
        loading={loading}
        name="keyword"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Nombre de la búsqueda'}
        required
        type={'text'}
        value={keyword}
      />
      <Input
        error={minPriceError}
        height={'50px'}
        icon={<SiCashapp />}
        id="minPrice"
        loading={loading}
        name="minPrice"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Precio mínimo'}
        type={'number'}
        value={minPrice}
      />
      <Input
        error={maxPriceError}
        height={'50px'}
        icon={<SiCashapp />}
        id="maxPrice"
        loading={loading}
        name="maxPrice"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        placeholder={'Precio máximo'}
        type={'number'}
        value={maxPrice}
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
