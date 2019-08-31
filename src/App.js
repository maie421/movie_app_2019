import React from 'react';
import PropTypes from "prop-types";
const Foodlike=[
  {
    id:1,
    name:"kim",
    img:"https://social.lge.co.kr/wp-content/uploads/2013/11/001.jpg",
    rating:5
  },
  {
    id:2,
    name:"kim1",
    img:"https://social.lge.co.kr/wp-content/uploads/2013/11/001.jpg",
    rating:4.8
  }
];
function Food({name,imge,rating}){
  return <div>
          <h1>{name}</h1>
          <h1>{rating}/5.0</h1>
          <img src={imge} alt={name}/>
         </div>;
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  imge: PropTypes.string.isRequired,
  rating: PropTypes.number
};
function App() {
  return (
    <div className="App">
      {Foodlike.map(dish=>(
      <Food key={dish.id} name={dish.name} imge={dish.img} rating={dish.rating}/>
      ))}
    </div>
    
  );
}

export default App;