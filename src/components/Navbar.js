import React from 'react'
import logo from '../assets/images/logo.svg'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/*<!-- Section Links-->*/}
        <PageLinks parentClass='nav-links' itemClass='nav-link' />
        {/*!-- Social Media Icons-->*/}
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.key} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
