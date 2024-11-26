import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Registry = () => {
    const [items, setItems]= useState([
        {
            id:1,
            name: 'Vase',
            description: 'Beautiful glass vase',
            price: '$19.94',
            purchased: 'true',
            link: 'https://shorturl.at/uTyPq'

        }
    ]);

    const togglePurchased = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, purchased: item.purchased === 'Bought'? 'Not Bought' : 'Bought'}: item
        ));
    };
    return (
        <div className="registry-list">
          <h2>Wedding Registry</h2>
          <div className="item-list">
            {items.map((item) => (
              <div key={item.id} className="item-card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Price:</strong> {item.price}</p>
                <p><strong>Status:</strong> {item.status}</p>
                <div className="item-links">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                </div>
                <button onClick={() => togglePurchased(item.id)}>
                  Mark as {item.status === 'Bought' ? 'Not Bought' : 'Bought'}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Registry;