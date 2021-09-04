import { useState } from 'react';
import people from './data'

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] =useState(0);
    const {name,job,image,text} = people[index];

    const checkNumber = (number) => { 
        if(number > people.length -1 ){ //Nếu người dùng ấn next quá mảng phần tử thi trả về phần tử đầu
            return 0;
        } 
        if(number < 0){ //Nếu người dùng ấn prev quá mảng phần tử thi trả về phần tử cuối của mảng
            return people.length-1;
        }
        return number;
    };  
    const nextPerson = () =>{
        setIndex ( (index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }   
    const prevPerson = () =>{
        setIndex ((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }
    const radomPerson = () => {
        let randomnumber = Math.floor(Math.random() * people.length); //random về sô nguyên với max là people.length
        if(randomnumber === index){
            randomnumber = index + 1;
        }
        setIndex(randomnumber);
        //console.log(randomnumber);
    }
    //console.log(people);

    return ( 
        <article className="review">
            <div className="img-container">
                <img src={image} alt="{name}" className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-containrt">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                   <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                   <button className="random-btn" onClick={radomPerson} >
                    suprise me
                </button>
            </div>
        </article>
    )    
}
 
export default Review;
