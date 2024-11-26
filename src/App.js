// import logo from './logo.svg';
import './App.css';
import api from './/api/axiosConfig';
import{useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Header from './components/header/Header'
import HomePage from './components/home/HomePage';
import Hero from './components/hero/Hero.js';
import CreateEvent from './components/home/CreateEvent';
import AttendEvent from './components/home/AttendEvent';
import Registry from './components/Registry.js';

function App() {
  
  const [events, setEvents]= useState([
    {
      title: 'Sample Wedding'
      // poster: 
    },
  ]);
    
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
  }, []);

  return (
    <div className="App">
      <Hero events={events} />
      <Header/>
      <Routes>
        {/* <Route path ="/" element={<Layout/>}> */}
        <Route path="/" element={<HomePage/>} >
          <Route path="/" element={<Home events={events} />} ></Route>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/create-event" element={<CreateEvent  events={events} setEvents={setEvents}/>} />
          <Route path="/attend-event" element={<AttendEvent events={events}/>} />
          <Route path="/registry" element={<Registry />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
