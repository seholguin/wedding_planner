// import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import {useState} from 'react';

const Hero = ({events}) => {
    // const [events, setEventss] = useState({});
    return(
        <div>
            <Carousel>{
                events?.map((event) =>{
                return(
                    <Paper>
                        <div className = 'event-card-container'>
                            <div className ="event-card" style={{"--img": `url(${event.backdrops[0]})`}}>
                                <div ClassName  ="event-detail">
                                    <div className='event-poster'>
                                        <img src={event.poster}/>
                                    </div>
                                    <div className='event-title'>
                                        <h4>{event.title}</h4>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </Paper>
                )
                })
            }
            </Carousel>
        </div>
    )
}
export default Hero