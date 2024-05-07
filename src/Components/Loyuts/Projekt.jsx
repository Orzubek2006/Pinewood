import React from 'react'
import './projekt.css'
import Header from '../Header'
import Footer from '../Footer'
 
const Projekt = () => {
  return (
    <div>
        <Header />
        <div className="wrapper-one ">
            <h1>Наши проекты</h1>
            <div className="box-one">
                <div className="box-two">
                    <img className='img-one' src="../../../../public/3.png" alt="" />
                    <div className="well">
                    <p>КП Золотые сосны 290</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two">
                    <img className='img-one' src="../../../../public/1.png" alt="" />
                    <div className="well">
                    <p className='lo'>КП Золотые сосны 290
                    Название проекта</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two">
                    <img className='img-one' src="../../../../public/2.png" alt="" />
                    <div className="well">
                    <p>КП Золотые сосны 290</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two">
                    <img className='img-one' src="../../../../public/1.png" alt="" />
                    <div className="well">
                    <p className='lo'>КП Золотые сосны 290
                    Название проекта</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
            </div>
            <button className='btnn-1'>Загрузить еще</button>
        </div>
        <Footer />
    </div>
  )
}

export default Projekt