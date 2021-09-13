import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index , hexColor}) => {
  const [alert, setAlert] = useState(false);
  // console.log(rgb);
  //console.log(hexColor);

  const bcg=rgb.join(',');
  // console.log(bcg);

  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}` //Thêm # vào trước mỗi mã mầu

  useEffect(()=>{ //set thời gian ấn alert sau khi click
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
    return ()=> clearTimeout(timeout);
  },[alert])

  return <article className={`color ${index > 10 && "color-light"}` } 
                  style={{backgroundColor:`rgb(${bcg})`}}
                  onClick={()=> {
                    setAlert(true);
                    navigator.clipboard.writeText(hexValue) //Hàm copy giá trị hexValue từ bàn phím
                  }}
                  >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className="alert"> copied to clipboard</p> }
    </article>
}

export default SingleColor
