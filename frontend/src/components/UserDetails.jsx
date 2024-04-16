import React, { useEffect, useState } from "react";
import axios from "./axios";
import avatar from "../assets/avatar.png";

const UserDetails = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const email = localStorage.getItem("email");
    axios.get(`/api/user/${email}`).then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 my-3 rounded-full shadow-lg"
              src={user.avatar || avatar}
              alt="Profile image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              First Name:{" "}
              <strong>{user.firstname || user.name.split(" ")[0]}</strong>
            </h5>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Last Name:{" "}
              <strong>{user.lastname || user.name.split(" ").pop()}</strong>
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Email: <strong>{user.email}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
