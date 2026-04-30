import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <nav className='flex items-center'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header