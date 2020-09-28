import React from 'react';
import '../style.css';

const Recipe = ({title,calories,image,ingredients,url}) => {
    return ( 
        <div className="border border-dark p-3 recipe mt-3">
            <h5 className="text-center"> {title}</h5>
            <h6 className="text-center"> calories:{Math.round(calories)}</h6>
            <img className="mt-2" src={image} alt={title}/>
            <ul className="mt-2">
                {ingredients.map((item,index) => ( 
                    <li key={index}>{item.text}</li>
                ))}
                
            </ul>
            <div className="text-center mb-1">
            <button className="btn btn-outline-danger mb-1">
                    <a className="text-danger" href={url}>Go to site</a>
            </button>

            </div>



               
        </div>
      );
}
 
export default Recipe;