import { useFormik } from 'formik'
import { useLocation } from 'wouter'

const SearchProduct = () => {
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
    <form onSubmit={formik.handleSubmit}>
      <input type="text" {...formik.getFieldProps('search')} />
      <button type="submit" value="Buscar">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  )
}

export default SearchProduct
