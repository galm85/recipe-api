import React,{useEffect,useState} from 'react';
import './App.css';

import Recipe from './components/recipes';

function App() {
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  const API_ID = "d18a41ea";
  const API_KEY = "a7d74af56c7e5f04157c0420150963f9";	
  const REQ = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;


  
  useEffect(()=>{
    getData(); 
  },[query])

  const getData = async ()=>{
    const response = await fetch(REQ);
    const data = await response.json();
    setRecipes(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    
    <div className="container">
      
      <div className="row text-center mt-5">
        <div className="col-md-12">
           <h1 className="display-4">What would you like to cook?</h1>
        </div>
      </div>


    <div className="row text-center mt-5">
      <div className="col-md-12">
        <form className="form-group d-flex" onSubmit={getSearch}>
          <input className="form-control mr-3" type="text" value={search} onChange={updateSearch} />
          <button  className="btn btn-outline-primary" type="submit" >search</button>
        </form> 
      </div>
    </div>
      


      
      <div className="row mt-5">
        <div className="col-md-12 d-flex flex-wrap justify-content-between">
        {recipes.map(((item,index)=>(
          <Recipe 
              key={index} 
              title={item.recipe.label} 
              calories={item.recipe.calories} 
              image={item.recipe.image}
              ingredients={item.recipe.ingredients}
              url={item.recipe.url}
              />
        )))}
        </div>
      </div>
      

    </div>
    
  );
}

export default App;
