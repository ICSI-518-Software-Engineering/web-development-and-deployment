import { useState } from "react";
import axios from "./axios";

const New = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemImage, setItemImage] = useState(null);

  const handleNewItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", itemName);
      formData.append("quantity", itemQuantity);
      formData.append("image", itemImage);
      await axios.post("/create-item", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);
      console.log("Item created successfully");
    } catch (error) {
      console.error("Item not created successfully:", error);
    }

    // clear form after submission
    setItemName("");
    setItemQuantity("");
    setItemImage(null);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleImageChange = (e) => {
    setItemImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleNewItem} className="w-1/3 pt-4 pl-4">
      <h1 className="text-blue-700 font-bold pb-2">Create Inventory</h1>
      <div className="pb-2">
        <label className="pr-2">Name:</label>
        <input
          type="text"
          className="outline rounded"
          value={itemName}
          onChange={(e) => handleInputChange(e, setItemName)}
        />
      </div>
      <div className="pb-2">
        <label className="pr-2">Quantity:</label>
        <input
          type="number"
          className="outline rounded"
          value={itemQuantity}
          onChange={(e) => handleInputChange(e, setItemQuantity)}
        />
      </div>
      <div className="pb-2">
        <label className="pr-2">Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="bg-blue-500 p-1 px-2 rounded text-white">
        Submit
      </button>
    </form>
  );
};

export default New;
