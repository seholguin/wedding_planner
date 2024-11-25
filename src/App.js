// import logo from './logo.svg';
import './App.css';
import api from './/api/axiosConfig';
import{useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  
  const [events, setEvents]= useState();
    
  const getEvents = async () =>{
    try{
      const response = await api.get("/api/v1/events");
      console.log(response.data);
      setEvents(response.data);
    }
    catch(err){
      console.log(err);
    }
    
  }

  useEffect(() => {
    getEvents();
  }, [])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route path="/" element={<Home events={events} />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
