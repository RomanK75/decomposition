// Поисковая строка, принимает ads data для отоброжения рекламного блока,
// Использует состояние для работы с поиском

import React, { MouseEventHandler, PropsWithChildren, useState } from 'react'

type Props = {
  ads : {title: string, data: string}[]
}

function SearchBar(props:Props) {


  const [activeFilter, setActiveFilter] = useState<string>('') 
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const value = e.currentTarget.value
    setActiveFilter(value)
  }

  return (
    <div>
      <div className='search__filters'>
      </div>
      <div>
        <button onClick={handleClick} value={'Видео'}><p>Видео</p></button>
        <button onClick={handleClick} value={'Картинки'}><p>Картинки</p></button>
      </div>
      <input type="text" placeholder='Поиск'/>
      <div className='search__ads'>{props.ads[0].title}</div>
      <div className='search__ads'>{props.ads[1].title}</div>
    </div>
  )
}

export default SearchBar