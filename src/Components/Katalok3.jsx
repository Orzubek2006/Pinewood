import React from 'react'

const Katalok3 = () => {
  return (
    <div className=' w-[550px] h-[300px] '>
      <h1>Когда планируете начать работы по внутренней отделке?</h1>
      <div className="block-chek w-[550px] h-[100px] flex items-center justify-center gap-6 flex-wrap">
        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Шлифовка и покраска</p>
        </div>

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Плиточные работы</p>
        </div>

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Отделка и устройство 
           потолков, пола и стен</p>
        </div>

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Установка дверей и окон</p>
        </div>  

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Прокладка инженерных систем</p>
        </div>  

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Сантехнические услуги</p>
        </div>

        <div className="chek w-[200px] flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Все работы «под ключ»</p>
        </div>   

        <div className="chek w-[200px] flex items-center justify-center gap-1">
                <input className='w-[200px] h-[40px] border-2 rounded-lg' type="text" placeholder='Свой вариант' />
        </div> 
      </div>
    </div>
  )
}

export default Katalok3
