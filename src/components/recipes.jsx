import React from 'react';
import '../style.css';

const Recipe = ({title,calories,image,ingredients,url}) => {
    return ( 
        <div className="p-3 recipe mt-5 shadow">
            <h5 className="text-center"> {title}</h5>
            <h6 className="text-center"> calories:{Math.round(calories)}</h6>
            <img className="mt-2" src={image} alt={title}/>
            <ul className="mt-2">
                {ingredients.map((item,index) => ( 
                    <li key={index}>{item.text}</li>
                ))}
                
            </ul>
            <div className="text-center mb-1">
            <button className="btn btn-outline-success mb-1">
                    <a className="text-dark" target="_blank" rel="noopener noreferrer" href={url}>Go to site</a>
            </button>

            </div>



               
        </div>
      );
}
 
export default Recipe;