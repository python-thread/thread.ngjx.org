import HomePage from '@/app/page'
import { render, screen } from '@testing-library/react'

test('testing', () => {
  render(HomePage)

  const button = screen.getByText('a')
  expect(button).toBeDefined()
})
