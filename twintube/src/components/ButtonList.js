import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Shorts"/>
      <Button name="Videos"/>
      <Button name="Playlist"/>
      <Button name="Watched"/>
      <Button name="Sports"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="Ukraine"/>
      <Button name="Kents"/>
    </div>
  )
}

export default ButtonList