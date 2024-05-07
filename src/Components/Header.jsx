import React from 'react'
import logo from './logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import Blockimg1 from '../Components/Blockimg1'
import BlockImg from '../Components/BlockImg'
import Folder from '../Components/Folder'
import Footer from '../Components/Footer'
import Photo from '../Components/Photo'
import Shop from '../Components/Shop'


const Header = () => {
  return (
    <div>
        <header>
            <div className="container_one">
              <Link className='link'to={`/`}><img className='logo' src={logo} alt="" /></Link>
                <div className="block_one">
                  <Link className='link' to={`/Projekts`}><span>Проекты</span></Link>
                  <Link className='link' to={`/Clear`}><span>Услуги</span></Link>
                  <Link className='link' to={`/Sena`}><span>Цены</span></Link>
                  <Link className='link' to={`/Nas`}><span>О нас</span></Link>
                  <Link className='link' to={`/Kontakt`}><span>Контакты</span></Link>
                </div>
                <div className="block_two">
                <p className='col'><i className='bx bxs-phone bx-rotate-270' ></i></p>
                <p>+998 99 891 32 00</p>
                </div>
            </div>
        </header>
     
      
    </div>
  )
}

export default Header