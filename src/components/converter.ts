export function converter(str: string) {
  const result = /(^#)([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(str);
  if (result) {
    return `rgb(${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${parseInt(result[4], 16)})`
  }
  return result
}

// Глубоко в цвета не углублялся, сделал, что бы цвет шрифта отличался от цвета фона
export function inverter(str: string) {
  const result = /rgb\((\d+)*, (\d+), (\d+)/i.exec(str);
  let res1: number;
  let res2: number;
  let res3: number;
  if (result) {
    Number(result[1]) ?  Number(result[1]) < 125 ? res1 = 255 : res1 = 0 : res1 = 255;
    Number(result[2]) ?  Number(result[2]) < 125 ? res2 = 255 : res2 = 0 : res2 = 255;
    Number(result[3]) ?  Number(result[3]) < 125 ? res3 = 255 : res3 = 0 : res3 = 255
    return `rgb(${res1}, ${res2}, ${res3})`
  }
  return 'rgb(255, 0, 0)'
}
