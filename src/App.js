import React, { useState } from 'react';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name, description, quantity };

    setItems([...items, newItem]);

    setName('');
    setDescription('');
    setQuantity('');
  };

  return (
    <div style={appContainer}>
      <h1 style={titleStyle}>Add New Item</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainer}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainer}>
          <label style={labelStyle}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainer}>
          <label style={labelStyle}>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Add Item</button>
      </form>

      <h2 style={titleStyle}>Item List</h2>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <strong>{item.name}</strong>: {item.description} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

const appContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  marginBottom: '20px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputContainer = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: 'blue',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  marginBottom: '10px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

export default ItemForm;
