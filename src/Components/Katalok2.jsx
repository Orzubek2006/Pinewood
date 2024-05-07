import React from 'react'

const Katalok2 = () => {
  return (
    <div className=' w-[550px] h-[300px] '>
      <h1>Когда планируете начать работы по внутренней отделке?</h1>
      <div className="block-chek w-[550px] h-[100px] flex items-center justify-center gap-6 flex-wrap">
        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Как можно быстрее</p>
        </div>

        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>В течение этого года</p>
        </div>

        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>В течение месяца</p>
        </div>

        <div className="chek flex items-center justify-center gap-1">
           <input type="checkbox" className=' text-sm'/>
           <p>Пока нет точного плана</p>
        </div>  
      </div>
    </div>
  )
}

export default Katalok2
