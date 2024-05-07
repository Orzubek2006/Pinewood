import React from 'react'

const Katalok1 = () => {
  return (
    <div className='bg w-[550px] h-[300px] '>
      <h1>Есть ли у вас смета на внутреннюю отделку?</h1>
      <div className="block-chek w-[500px] h-[70px] flex items-center justify-center gap-6">
        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Да, смета есть</p>
        </div>

        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>У меня нет сметы</p>
        </div>
      </div>
    </div>
  )
}

export default Katalok1
