import React from 'react'
import { render } from '@testing-library/react'
import App from '../src/App'

describe('Tests in  <App />', () => {
  test('Should render <App />', () => {
    render(<App />)
  })
})
