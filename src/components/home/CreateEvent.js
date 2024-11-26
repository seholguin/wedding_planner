import React from 'react';
import { useState } from 'react';

const CreateEvent = ({events, setEvents}) => {
    const [newEvent, setNewEvent] = useState({
        title: '',
        weddingId:'',
    });


const handleCreate = () =>{
    setEvents([...EventSource, newEvent]);
    setNewEvent({ title: '', weddingId: ''});
};

return(
    <div>
        <h2>Create Event</h2>
        <input
            type="text"
            placeholder="Event Title"
            value = {newEvent.title}
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value })}
        />
        <input
            type="text"
            placeholder="Wedding ID"
            value = {newEvent.weddingId}
            onChange={(e) => setNewEvent({...newEvent, weddingId: e.target.value })}
        />
        <button onClick={handleCreate}>Create Event</button>
    </div>
)
};
export default CreateEvent;
