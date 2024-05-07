import React from 'react'

const Katalok = () => {
  return (
    <div className='w-[550px] h-[300px]'>
      <h1>Укажите метериал дома:</h1>
        <div className="block-gr w-[550px] flex items-center flex-wrap gap-3 ">
         <div className="box-xm w-[140px] border-2">
           <img className='imagk w-[120px]' src="../public/imagess.png" />
           <p>Клееный брус</p>
         </div>

         <div className="box-xm w-[140px] border-2">
           <img className='imagk w-[120px]' src="../public/imagess1.png" />
           <p className='text-xs'>Профилированный 
            брус</p>
         </div>

         <div className="box-xm w-[140px] border-2">
           <img className='imagk w-[120px]' src="../public/imagess2.png" />
           <p className='text-xs'>Оцилиндрованное 
            бревно</p>
         </div>

         <div className="box-xm w-[140px] border-2">
           <img className='imagk w-[120px]' src="../public/imagess3.png" />
           <p>Лафет</p>
         </div>

         <div className="box-xm w-[140px] border-2">
           <img className='imagk w-[120px]' src="../public/imagess4.png" />
           <p>Рубленное бревно</p>
         </div>
        </div>
    </div>
  )
}

export default Katalok
