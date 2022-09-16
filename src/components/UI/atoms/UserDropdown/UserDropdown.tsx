import { useRef } from 'react'
import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick'
import './stylesDropDown.css'

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */

export function UserDropDown() {
  const dropdownRef = useRef(null)
  const [isActive, handleIsActive] = useDetectOutsideClick(dropdownRef, false)

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={() => handleIsActive} className="menu-trigger">
          <span>User</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a> cm
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
