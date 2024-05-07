import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Projekts = () => {
  return (
    <>
    <div className="wrapper-one w-[1300px] h-[1000px] flex items-center justify-center flex-col">
            <h1>Наши проекты</h1>
            <div className="box-one w-[1250px] h-[800px] flex items-start flex-wrap justify-center gap-[10px]">
                <div className="box-two w-[500px] h-[370px] border-2 rounded-lg">
                    <img className='img-one w-full' src="../../../../public/3.png" alt="" />
                    <div className="well">
                    <p>КП Золотые сосны 290</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two w-[500px] h-[370px] border-2 rounded-lg">
                    <img className='img-one' src="../../../../public/1.png" alt="" />
                    <div className="well">
                    <p className='lo'>КП Золотые сосны 290
                    Название проекта</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two w-[500px] h-[370px] border-2 rounded-lg">
                    <img className='img-one' src="../../../../public/2.png" alt="" />
                    <div className="well">
                    <p>КП Золотые сосны 290</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
                <div className="box-two w-[500px] h-[370px] border-2 rounded-lg">
                    <img className='img-one' src="../../../../public/1.png" alt="" />
                    <div className="well">
                    <p className='lo'>КП Золотые сосны 290
                    Название проекта</p>
                    <button className='btn1_3'>Оставить заявку  <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
                  </div>
                </div>
            </div>
            <button className='btnn-1 w-auto h-[40px] border-2 m-2 p-3 flex items-center justify-center rounded-2xl'>Загрузить еще</button>
    </div>
    </>
  )
}

export default Projekts
