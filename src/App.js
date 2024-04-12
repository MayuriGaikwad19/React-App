import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { ToastContainer} from 'react-toastify';
import Register from './Register';
import Mapscrn from './Mapscrn';
import mapOptions from './Mapscrn';
import { useJsApiLoader } from "@react-google-maps/api";
import Moviesscreen from './Moviesscreen';
import Displayscrn from './Displayscrn';

function App() {

    const { isLoaded } = useJsApiLoader({
      id: mapOptions.googleMapsApiKey,
      googleMapsApiKey: mapOptions.googleMapsApiKey,
    });

  return (
    
    <div className="App">

      <Mapscrn isLoaded={isLoaded}></Mapscrn>
       
       <ToastContainer theme='colored'></ToastContainer>
       
       <br></br>
       <br></br>
       <br></br>
      

       <a href="/register" class="btn btn-default btn-lg active" role="button">Registration Page</a>
       <a href="/mapscrn" class="btn btn-default  btn-lg active" role="button">Map Screen</a>
       <a href="/moviesscreen" class="btn btn-default btn-lg active" role="button">Movies Screen</a>

       
       <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/mapscrn' element={<Mapscrn/>}></Route>
        <Route path='/moviesscreen' element={<Moviesscreen/>}></Route>
        <Route path='/displayscrn' element={<Displayscrn/>}></Route>
        
        
       
      </Routes>

       </BrowserRouter>

       <br></br>


      
    </div>
  );
}

export default App;
