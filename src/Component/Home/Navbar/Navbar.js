import React from "react";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a href="#">THIS MONTH</a>
      </li>
      <li>
        <a href="#">SKIN</a>
      </li>
      <li>
        <a href="#">HAIR</a>
      </li>
      <li>
        <a href="#">BATH</a>
      </li>
      <li>
        <a href="#">SALE</a>
      </li>

      <button
        className="rounded-full border-2 w-32 border-gray-300 bg-white "
        href="#"
      >
        LOG IN
      </button>
    </>
  );
  return (
    <div class="navbar bg-base-100 max-w-screen-2xl mx-auto px-12">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">UPBOX</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
