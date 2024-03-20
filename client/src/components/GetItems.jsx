import { useState, useEffect } from 'react';
import axios from 'axios';

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-items');
        setItems(response.data);
        if (response.data.length === 0) {
            alert('No items in inventory');
          }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setName(item.name);
    setQuantity(item.quantity);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-item/${id}`);
      // Refresh items after deletion
      const response = await axios.get('http://localhost:5000/get-items');
      setItems(response.data);
      console.log();('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/update-item/${selectedItem._id}`, {
        name,
        quantity
      });

      console.log('Item updated successfully');
      setSelectedItem(null);
      setName('');
      setQuantity('');
      // Refresh items after update
      const response = await axios.get('http://localhost:5000/get-items');
      setItems(response.data);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className='w-3/4 pt-4'>
      <h1 className='font-bold text-blue-700'>Groceries Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th className='pr-3'>Quantity</th>
            <th className='pr-3'>Update</th>
            <th className='pr-3'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(items) && items.map((item) => (
            <tr key={item._id}>
              <td className='pr-3'>
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.name}
                  style={{ width: '150px', height: '150px' }}
                />
              </td>
              <td className='pr-3'>{item.name}</td>
              <td className='pr-3'>{item.quantity}</td>
              <td className='pr-3'>
                <button className='bg-green-500 p-1 px-2 rounded text-white' onClick={() => handleUpdateClick(item)}>Update</button>
              </td>
              <td className='pr-3'>
                <button className='bg-red-500 p-1 px-2 rounded text-white' onClick={() => handleDeleteClick(item._id)}>Delete</button>
              </td>
              {selectedItem && selectedItem._id === item._id && (
                <td className='pr-3'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" className='outline rounded mr-2 mb-2' value={name} onChange={handleNameChange} />
                    <input type="number" className='outline rounded mr-2'  value={quantity} onChange={handleQuantityChange} />
                    <button type="submit" className='bg-blue-500 p-1 px-2 rounded text-white mr-2'>Submit</button>
                    <button className='bg-red-500 p-1 px-2 rounded text-white' onClick={() => setSelectedItem(false)}>Cancel</button>
                  </form>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetItems;
