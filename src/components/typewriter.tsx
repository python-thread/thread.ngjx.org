'use client'
import { TypeAnimation } from 'react-type-animation'

export default () => {
  return (
    <TypeAnimation
      sequence = {[
        'pip install thread',
        1000,
        'pipx install thread',
        1000,
        'poetry install thread',
        1000
      ]}
      // wrapper = 'span'
      speed = {50}
      repeat = {Infinity}
    />
  )
}
