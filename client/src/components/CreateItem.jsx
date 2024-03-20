import { useState } from 'react';
import axios from 'axios';

const CreateItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('quantity', quantity);
      formData.append('image', image);

      await axios.post('http://localhost:5000/create-item', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(formData);
      console.log();('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // Reset form fields
    setName('');
    setQuantity('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/3 pt-4 pl-4">
      <h1 className="text-blue-700 font-bold pb-2">Add Grocery</h1>
      <div className='pb-2'>
        <label className='pr-2'>Name:</label>
        <input type="text" className='outline rounded' value={name} onChange={handleNameChange} />
      </div>
      <div className='pb-2'>
        <label className='pr-2'>Quantity:</label>
        <input type="number" className='outline rounded' value={quantity} onChange={handleQuantityChange} />
      </div>
      <div className='pb-2'>
        <label className='pr-2'>Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      </div>
      <button type="submit" className='bg-blue-500 p-1 px-2 rounded text-white'>Submit</button>
    </form>
  );
};

export default CreateItem;
