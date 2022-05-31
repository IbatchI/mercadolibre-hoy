import { fireEvent, render, screen } from "@testing-library/react";
import App from '../App'

test('search form could be used', async () => {
    render(<App />)
    const input = await screen.findAllByRole('textbox')
    const button = await screen.findAllByRole('button')
    
    fireEvent.change(input, {target : {value: 'gtx 1060'}})
    fireEvent.click(button)
    
    const title = await screen.findByText('gtx 1060')

    expect(title).toBeVisible()
})