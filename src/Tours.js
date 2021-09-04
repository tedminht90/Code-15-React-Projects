import Tour from "./Tour";
const Tours = ({tours, removeTour}) => { //Gọi tours và removeTour từ App.js
    return ( 
        <section>
           
           <div className="title">
               <h2>ours tours</h2>
               <div className="underline"></div>
           </div>
           <div>
               {tours.map((tour) => { 
                //    Chuyển removeTour sang Tour.js vì bên đấy co hàm onClick={() => removeTour(id)}
                   return <Tour key={tour.id} {...tour} removeTour={removeTour} />
               })}
           </div>
        </section>
     );
};
 
export default Tours;