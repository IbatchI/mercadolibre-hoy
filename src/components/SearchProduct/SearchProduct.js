import { useFormik } from 'formik'
import { useLocation } from 'wouter'
import { BiSearchAlt } from 'react-icons/bi'
import './SearchProduct.css'

export default function SearchProduct() {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      pushLocation(`/search/${values.search}`)
    },
  })
  return (
    <form className='FormSearchProduct' onSubmit={formik.handleSubmit}>
      <input
        type='text'
        placeholder='Buscar producto...'
        {...formik.getFieldProps('search')}
      />
      <button type='submit' value='Buscar'>
        <BiSearchAlt />
      </button>
    </form>
  )
}
