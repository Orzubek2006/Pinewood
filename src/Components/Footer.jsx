import React from 'react'
import logo from './logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="c"></div>
        <div className="footer_one">
          <div className="footer">
            <div className="block_1">
              <img className='img_1' src={logo} alt="" />
              <p>Отделка деревянных домов
              в Москве и области</p>
              <p>ООО "Пайнвуд Хомс"
                 ИНН: 9715410587
                 ОГРН: 1217700593857</p>
            </div>
            <div className="block_2">
              <p>Главная</p>
              <p>Проекты</p>
              <p>Услуги</p>
            </div>
            <div className="block_2">
              <p>Цены</p>
              <p>О нас</p>
              <p>Контакты</p>
            </div>
          </div>
          <div className="footer_3">
            <div className="p_p">
              <i className='bx bxs-phone bx-rotate-270' ></i>
              <i className='bx bx-envelope'></i>
              <i className='bx bx-map'></i>
            </div>
            <div className="p_p1">
            <p> +998 99 891 32 00</p>
            <p> orzubekyoldoshev@gmail.com</p>
            <p> Владимирская обл. 
            г. Александров 
            ул. Ленина 13/7 БЦ Свечка, 
            оф. 211</p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer