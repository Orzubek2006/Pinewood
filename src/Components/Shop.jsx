import React, { useRef, useState } from 'react'
import "./Shop.css"
import Katalok5 from './Katalok5'
import Katalok from './Katalok'
import Katalok1 from './Katalok1'
import Katalok2 from './Katalok2'
import Katalok3 from './Katalok3'
import Katalok4 from './Katalok4'
import Katalok6 from './Katalok6'

const Shop = () => {

    const [counter, setCounter] = useState(1)

    const handleClick1 = () => {
		setCounter(counter - 1);
        const prev = () => imageContainerRef.current.scrollLeft -=540;
        prev();
	};

	const handleClick2 = () => {
		setCounter(counter + 1);
        const next = () => imageContainerRef.current.scrollLeft +=540;
        next();
	};

    let imageContainerRef = useRef(null)




  return (
        <div className="wrapper_three">
            <h1 className='bon'>Ответьте на 5 простых вопросов
            и получите расчеты по вашему объекту</h1>
            <div className="box1_three">
                <div className="block2">
                    <div className=" w-[150px] flex items-center justify-center">
                        <p>Вопрос</p>
                        <div className="jj flex items-center justify-center">
                            <p>{counter}</p>
                            <p>/7</p>
                        </div>
                    </div>
                    <h1>Укажите площадь дщма:</h1>
                    <div className="block5">
                       <div className="block3">
                        <div className="slider flex" ref={imageContainerRef}>
                            <Katalok5 /> 
                            <Katalok />
                            <Katalok1 />
                            <Katalok2 />
                            <Katalok3 />
                            <Katalok4 /> 
                            <Katalok6 />
                        </div>      
                           <div className="bonv">
                                  <button className='btnn1' onClick={handleClick1} ><i className='bx bx-left-arrow-alt' ></i> назад</button>
                                  <button className='btnn2' onClick={handleClick2}>Далее <i className='bx bx-left-arrow-alt bx-rotate-180'></i></button>
                               </div> 
                       </div> 
                        <div className="block6">
                            <div className="block2_one">
                                <img className='img1_4' src="../../public/person.png" alt="" />
                                <div className="bun">
                                    <h2>Иванов Борис</h2>
                                    <p>Инженер проектов</p>
                                </div>
                            </div>
                            <p>Здравствуйте, меня зовут Борис, и я помогу Вам понять, какой бюджет нужен для отделки вашего дома под ключ</p>
                            <h3>Ответив на вопросы, Вы получите:</h3>
                            <div className="lion">
                                <img className='img1_5' src="../../public/50.png" alt="" />
                                <p>Ориентировочную стоимость</p>
                            </div>
                            <div className="lion">
                                <img className='img1_5' src="../../public/51.png" alt="" />
                                <p>Точную подборку проектов, исходя из ваших ответов, 
                                либо предложим новый вариант</p>
                            </div>
                            <div className="lion">
                                <img className='img1_5' src="../../public/52.png" alt="" />
                                <p>Один из 3-х подарков 
                                при заказе отделки у нас</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Shop