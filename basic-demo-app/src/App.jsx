import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './assets/Item' 
import ItemDate from './assets/ItemDate'

function App() {
      const temp = [{
          name:'nirma',
          day:'20', 
          month:'July',
          year:'2025'
      },
      {
         name: "Rai",
         day : "hu",
         month : "uvfli",
         year : "igrf"
      }
    ];
      return <div className='AppHead'>
          <Item name={temp[0].name}></Item>
          <ItemDate day= {temp[0].day} month={temp[0].month} year={temp[0].year}></ItemDate>
          <Item name={temp[1].name}></Item>
          <ItemDate  day= {temp[1].day} month={temp[1].month} year={temp[1].year}></ItemDate>
          <Item name= {temp[2].name}></Item>
          <ItemDate day= {temp[2].day} month={temp[2].month} year={temp[2].year}></ItemDate>
          <div className='App'>
              Hello World
          </div>
      </div>
}

export default App
