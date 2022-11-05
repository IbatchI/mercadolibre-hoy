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
        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <ListOfDropsItmes isOpen={dropDownMenuIsOpen}>
        {items.map((item) => (
          <ItemDropDownMenu onClick={item.handleOnClick} key={item.text}>
            {item.text}
          </ItemDropDownMenu>
        ))}
      </ListOfDropsItmes>
    </DropDownMenuContainer>
  )
}
