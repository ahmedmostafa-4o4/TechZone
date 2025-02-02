import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Catalog = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        axios.get('/api/whatsapp/catalog')
            .then(response => {
                setCatalog(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching catalog:', error);
            });
    }, []);

    return (
        <div>
            <h1>WhatsApp Catalog</h1>
            <ul>
                {catalog.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;
