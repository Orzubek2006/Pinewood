import React from 'react'
import './Kontakt.css'
import Header from '../Header'
import Footer from '../Footer'


const Kontakt = () => {
    const [showPhone, setShowPhone] = React.useState(false)
    const [telPhone, setTelPhone] = React.useState(false)


  return (
    <div>
        <div className="wrapper1-three">
            <div className="box-three">
                <h1>Контактные данные</h1>
                <div className="box1-one">
                    <div className="box1-two">
                        <img src="../../../../public/iphone.png" alt="" />
                        <h5>Позвоните нам</h5>
                        <p>Есть вопросы? Мы поможем!</p>
                        <div className="block_two">
                            <p className='col'><i className='bx bxs-phone bx-rotate-270' ></i></p>
                            <p>+998 99 891 32 00</p>
                        </div>
                    </div>
                    <div className="box1-two">
                        <img src="../../../../public/iphone1.png" alt="" />
                        <h5>Напишите нам</h5>
                        <p className='bn'>Идеи? Предложения? Мы открыты для любых вопросов!</p>
                        <div className="block_two">
                            <p className='col'><i className='bx bx-envelope'></i></p>
                            <p>orzubekyoldoshev@gmail.com</p>
                        </div>
                    </div>
                    <div className="box1-two">
                        <img src="../../../../public/iphone2.png" alt="" />
                        <h5>Закажите звонок</h5>
                        <p className='bn'>Мы перезвоним Вам
                        в ближайшее время!</p>
                        <button onClick={() => setShowPhone(!showPhone)} className='bttn' >Заказать звонок</button>
                    </div>
                </div>
                <div className="box1-three">
                    <div className="ong">
                        <p className='vb'><i className='bx bxs-map'></i></p>
                        <p className='vm'>Владимирская обл. г. Александров 
                        ул. Ленина 13/7 БЦ Свечка, оф. 211</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d816.2779215618843!2d67.6774921248061!3d37.91711708630978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1707994422963!5m2!1suz!2s" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        {showPhone ? <div className="tele">
            <span onClick={() => setShowPhone(!showPhone)}  className='btn5 block'><i className='bx bx-x'></i></span>
            <div className="box0">
                <h3>Закажите консультацию</h3>
                <p>Мы перезвоним Вам в течении 15 минут</p>
                <input className='name' type="text" required  placeholder='Ваше имя'/>
                <input className='name' type="tel" required placeholder='Ваш телефон' />
                <button onClick={() => setTelPhone(!telPhone)} className='tel1'>Отправить заявку <i className='bx bx-left-arrow-alt bx-rotate-180' ></i></button>
            </div>

        </div>: ""}
        {telPhone ?   <div className="tele2 w-[100%] border-2 h-[400px] flex items-center justify-center absolute bg-white top-[65px] ">
            <span onClick={() => setTelPhone(!telPhone)} className='btn5 block'><i className='bx bx-x'></i></span>
            <div className="tele3 border-2 w-[400px] h-[150px] flex items-center justify-center flex-col">
               <h3>Заявка отправлена!</h3>
               <p>Мы перезвоним Вам в течении 15 минут</p>
            </div>
        </div>: ""}

        
    </div>
  )
}

export default Kontakt