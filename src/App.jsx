import { useState } from 'react'
import Menu from './Menu'
import Header from './Header'
import Card from './Card'

function App() {
  

  return (
    <div>
      <div>
        <ul>
          <li>
          <Menu href = '#' title = 'Home' />
          </li>
          <li>
          <Menu href = '#' title = 'Films' />
          </li>
          <li>
          <Menu href = '#' title = 'Series'/>
          </li>
        </ul>
        
        
       
      </div>
      <div>
        <Header img = 'https://img.freepik.com/free-vector/film-strip-background-with-clapper-board_1017-33456.jpg' />
      </div>
      <div>
        <Card title = 'AVATAR' img = 'https://lumiere-a.akamaihd.net/v1/images/image_b88fdde2.jpeg?region=0,0,540,810&width=480' description = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum'/>
        <Card title = 'HARRY POTTER' img = 'https://t2.uc.ltmcdn.com/es/posts/7/3/7/como_conseguir_caratulas_para_peliculas_1737_orig.jpg' description = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum'/>
        <Card title = 'THOR' img = 'https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg' description = 'Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum'/>
      </div>
    </div>
  )
}

export default App
