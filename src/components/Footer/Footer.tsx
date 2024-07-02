// Подвальный блок с виджетами.
// Получает данные для виджетов и передает их в нужный компонент
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      Footer
      {/* Условный компонент с погодой <Weather data={weatherData}/> */}
      {/* Условный компонент с ТВ программой <TV data={tvData}/> */}
      {/*И т.д.*/}
    </div>
  )
}

export default Footer