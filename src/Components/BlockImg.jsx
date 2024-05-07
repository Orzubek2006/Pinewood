import React from 'react'
import './BlockImg.css'

const BlockImg = () => {
  return (
    <div>
        <div className="contayner_four">
            <div className="box2">
                <h1>Более 130 выполненых проектов
                по всей Москве и области </h1>
                <p>По предварительной записи, Вы можете
                посетить объект,
                который уже готов 
                или находится
                в процессе отделки</p>
            </div>
            <div className="box4">
                <button className='btn2'><i className='bx bx-chevron-left'></i></button>
                <div className="img_box">
                  <img className='img_png' src="../../public/2.png" alt="" />
                  <div className="well">
                    <p>КП Золотые сосны 290</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="img_box">
                  <img className='img_png' src="../../public/1.png" alt="" />
                  <div className="well">
                    <p className='wet'>КП Золотые сосны 290
                    Название проекта</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <button className='btn2'><i className='bx bx-chevron-right'></i></button>
            </div>
            <button className='btn3'>Смотреть все проекты</button>
        </div>
    </div>
  )
}

export default BlockImg