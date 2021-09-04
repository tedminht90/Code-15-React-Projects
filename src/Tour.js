import { useState } from "react";
// vì bên thours khai báo là  return <Tour key={tour.id} {...tour}></Tour> và sử dụng thêm removeTour ở bên Tours.js
const Tour = ({id,image,info,price,name,removeTour}) => { 
    const[readMore, setReadMore] = useState(true);
    
    return ( 
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                {/* Setup readmore với 200 ký tự */}
                {/* Nếu readMore là true trả về info, nếu false trả về info.subtring */}
            <p>{readMore ? info : `${info.substring(0,200)}...` }
            <button onClick={() => setReadMore(!readMore)} >
                {readMore ? 'show less': 'read more'}
            </button>
            </p> 
            <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>

            </footer>
        </article>
     );
}
export default Tour;