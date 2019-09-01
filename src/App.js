import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/*const Foodlike=[
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
}*/
class App extends React.Component{

  /*add = () =>{
    this.setState(current=>({count:current.count+1}));
  };
  minus=()=>{
    this.setState(current=>({count:current.count-1}));
  };
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }*/
  state={
    isLoading:true,
    movies:[]
  };
  getMovie=async()=>{
    const {data:{data: { movies }}
} = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies , isLoading: false });
  };
  componentDidMount(){
    this.getMovie();
  }

  render() {
    const {isLoading,movies}=this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
