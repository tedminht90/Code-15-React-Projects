import React, { useState, useRef, useEffect } from 'react'
import { useGlobalConext } from './context'

const Submenu = () => {
    const [columns ,setColums] = useState("col-2");
    const {isSubmenuOpen, localtion,page:{page, links},} = useGlobalConext();
    const container = useRef(null)

    useEffect(()=>{
        setColums("col-2")
        const submenu = container.current;
        const{center,bottom} = localtion;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        if (links.length === 3){
            setColums("col-3");
        }
        if (links.length > 3){
            setColums("col-4");
        }
    },[localtion,links])
  return <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
          {links.map((link, index)=>{
              const{label, icon, url} = link;
              return <a key={index} href={url}>
                  {icon}
                  {label}
                  </a> 
                  
          })}
      </div>
  </aside>
}

export default Submenu
