import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationItem from '../Components/NavigationItem'
import HomeStatic from '../Images/Icons/home.png'
import HomeGif from '../Images/Icons/home.gif'
import ContactStatic from '../Images/Icons/phone.png'
import ContactGif from '../Images/Icons/phone.gif'
import AboutStatic from '../Images/Icons/info.png'
import AboutGif from '../Images/Icons/info.gif'
import ClassroomStatic from '../Images/Icons/classroom.png'
import ClassroomGif from '../Images/Icons/classroom.gif'
import Logo from '../Images/Icons/Logo.jpg'
export default function Navigation() {
  return (
    <>
    <header>
      <img className="logo" src={Logo} alt="Logo" />
        <nav>
          <ul>
            <li><NavigationItem path='/' icon={HomeStatic} go='მთავარი' hover={HomeGif} /></li>
            <li><NavigationItem path='/about' icon={AboutStatic} go='ჩვენს შესახებ' hover={AboutGif} /></li>
            <li><NavigationItem path='/contact' icon={ContactStatic} go='კონტაქტი' hover={ContactGif} /></li>
            <li><NavigationItem path='/classroom' icon={ClassroomStatic} go='Classroom' hover={ClassroomGif} /></li>
          </ul>
        </nav>
    </header>    
      <Outlet />
    </>
    
  )
}
