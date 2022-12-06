import React, {useEffect, useState} from 'react'
import { Button } from "@chakra-ui/react";
import "./styles.css";

export const ToggleButton = () => {
	const initialDate = {btn1: false, btn2: false, btn3: false}
	const [open, setOpen] = useState({});
	useEffect(() => {
		setOpen(initialDate)
	}, [])


  let handleClick = (e) => {
			let hogeObj = {...open}
			Object.keys(open).forEach(function (key) {
				if(key !== e.target.value){
					hogeObj[key] = false
				} else {
					hogeObj[e.target.value] = !open[key]
				}
			})
			console.log(hogeObj)
			setOpen(hogeObj)
  };
	
  return (
    <ul>
      <li>
        <Button onClick={handleClick} value="btn1">
          toggle1
        </Button>
        <div
          className="dropdown"
          id={`${open["btn1"] ? "is-cardOpen" : "card"}`}
        >
          テスト１
        </div>
      </li>
      <li>
        <Button onClick={handleClick} value="btn2">
          toggle2
        </Button>
        <div
          className="dropdown"
          id={`${open["btn2"] ? "is-cardOpen" : "card"}`}
        >
          テスト２
        </div>
      </li>
      <li>
        <Button onClick={handleClick} value="btn3">
          toggle3
        </Button>
        <div
          className="dropdown"
          id={`${open["btn3"] ? "is-cardOpen" : "card"}`}
        >
          テスト３
        </div>
      </li>
    </ul>
  );
}
