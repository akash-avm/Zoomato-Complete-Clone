import React, { useEffect, useState } from 'react';
import './lists.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Lists = ({url}) => {

  const [list, setList] = useState([]);

  // ✅ Fetch food list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list/`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      console.error('Error fetching list:', error);
      toast.error('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // ✅ Remove food & show notification
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        setList(list.filter(item => item._id !== foodId)); // Instantly update list
        toast.success('Food item removed successfully!'); // 🔔 Show success notification
      } else {
        toast.error('Error removing food');
      }
    } catch (error) {
      console.error('Error removing food:', error);
      toast.error('Failed to remove item');
    }
  };

  return (
    <div className="list add flex-col">
      <p>All foods lists</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFood(item._id)}>X</button>
            </div>
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default Lists;
