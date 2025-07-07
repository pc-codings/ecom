import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const Userdata = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendurl + '/api/userlist/userlistData', {
        headers: {
          token,
        },
      });
      console.log("user data get")

      if (response?.data?.sucess) {
        setList(response?.data?.users);
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Users List</p>
      <div className="dd-flex justify-content-between align-items-center py-2">
        {/* List table title */}
        <div className="hidden md:grid grid-cols-[1fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Name</b>
          <b>Email</b>
        </div>

        {/* User List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr_2fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Userdata;