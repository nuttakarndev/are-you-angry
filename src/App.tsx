import angryImg from './assets/angry.gif'
import './App.css'
import { useState } from 'react'
export default function App() {
  const [scale, setScale] = useState<number>(1)
  const onClickNo = function () {
    setScale(s => s * 1.25)
  }
  const onClickYes = function () { 
    alert("ฮั่นแน่ ว่าแล้วเชียวววว............")
  }
  return <div className='container'>
    <h2>Are you angry with me?</h2>
    <img src={angryImg} alt="angry-img" />
    <div className="flex mt-3">
      <button className='button btn-yes'  style={{ transform: `scale(${scale})` }} onClick={onClickYes}>Yes</button>
      <button className='button btn-no' onClick={onClickNo}>No</button>
    </div>
  </div>
}