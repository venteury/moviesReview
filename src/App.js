import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Movies from './components/movies/Movies';
import data from "./data.json"


function App() {
  return (
    <div className="App">
      <Header/>

      <div className='main'>
        {
          data.map(function(element){
            return(
            <Movies 
              title = {element.Title}
              year = {element.Year}
              pic = {element.Poster}
            />
            )
          })
          
        }
       
      </div>
      
  
    </div>
  );
}

export default App;
