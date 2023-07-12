import { useState } from "react";
import { converter, inverter } from "./converter";

export function ColorConverter() {

  const result: {color: string, text: string} = {
    color: 'rgb(120, 120, 120)',
    text: 'Здесь будет результат'
  }

  const [colorHEX, setColorHEX] = useState('');
  const [colorRGB, setColorRGB] = useState(result);

  const invert = inverter(colorRGB.color)

  const handlerColor = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length < 7) {
      setColorHEX(value)
    } else if (value.length > 7) {
      return
    }
    else {
      setColorHEX(value);
      const converterRGB = converter(value)
      converterRGB ? setColorRGB({text: converterRGB, color: converterRGB}) : setColorRGB({color: 'rgb(255, 0, 0)', text: 'Ошибка'})
    }
  }

  return (
    <div className="container" style={{backgroundColor: colorRGB.color}}>
      <div className="converter">
        <input 
          type="text" 
          className="title"
          // maxLength = '7'
          placeholder="Введите HEX цвет"
          value={colorHEX}
          onChange={handlerColor}/>
        <div className="result" style={{backgroundColor: colorRGB.color}} >
          <div className="title" style={{color: invert}}>{colorRGB.text}</div>
        </div> 
      </div>
    </div>
  )
}