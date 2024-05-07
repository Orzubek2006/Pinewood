import React from 'react'
import './Folder.css'

const Folder = () => {
  return (
    <div>
        <div className="container_two">
            <div className="folder_one">
                <div className="box1">
                <h1>Отделка 
                деревянных домов
                в Москве и области</h1>
                <p>с оптимизацией сметы до 30%
                и гарантией до 15 лет</p>
                </div>
                <div className="btns">
                    <button className='btn_1'>РАСЧИТАТЬ СТОИМОСТЬ РАБОТ</button>
                    <button className='btn_2'><i className='bx bxl-instagram'></i></button>
                </div>
            </div>
            <div className="folder_one">
              <img className='img_one' src="../../public/chair.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Folder