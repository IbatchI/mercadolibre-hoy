import { useState, useRef } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { DropDownMenuContainer, ListOfDropsItmes } from './DropDownMenuStyles'
import { ItemDropDownMenu } from './ItemsDropDownMenu/ItemsDropDownMenuStyles'
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick'

interface IDropDownMenuItem {
  text: string
  handleOnClick(): void
}

interface IDropDownMenuProps {
  items: Array<IDropDownMenuItem>
}

export const DropDownMenu = ({ items }: IDropDownMenuProps) => {
  const [dropDownMenuIsOpen, setDropDownMenuIsOpen] = useState<boolean>(false)
  const dropDownMenuRef = useRef(null)

  const handleOnClickOutOfMenu = () => {
    if (dropDownMenuIsOpen) setDropDownMenuIsOpen(false)
  }

  useDetectOutsideClick(dropDownMenuRef, handleOnClickOutOfMenu, dropDownMenuIsOpen)

  const handleOnClickAvatar = () => {
    setDropDownMenuIsOpen(!dropDownMenuIsOpen)
  }

  return (
    <DropDownMenuContainer ref={dropDownMenuRef}>
      <Avatar
        alt="user"
        handleOnClick={handleOnClickAvatar}
        src="https://64.media.tumblr.com/b45b7e1fc7b7d59209fa83f2a73c3913/1928a2d225706847-47/s640x960/e1d6d1fa71c4a474731ec50b26f36dc0b342fe09.jpg"
      />
      <ListOfDropsItmes isOpen={dropDownMenuIsOpen}>
        {items.map((item) => (
          <ItemDropDownMenu key={item.text} onClick={item.handleOnClick}>
            {item.text}
          </ItemDropDownMenu>
        ))}
      </ListOfDropsItmes>
    </DropDownMenuContainer>
  )
}
