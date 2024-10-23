import React from "react";
import PropTypes from "prop-types";

const Menu = ({ menuinfo }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <img className="rounded-xl pb-5 h-[200px] w-full object-cover" src={menuinfo.recipe_image} />
      <h2 className="text-start text-xl font-bold pb-2 ">
        {menuinfo.recipe_name}
      </h2>
      <p className="text-start  text-gray-600 pb-3">
        {menuinfo.short_description}
      </p>
      <hr />
      <h2 className="text-xl font-semibold text-start py-3">
        Ingredients: {menuinfo.ingredients.length}
      </h2>
      <ul className="pb-5 text-gray-600 ml-8">
        {menuinfo.ingredients.map((ingredient, index) => (
          <li key={index} className="list-disc text-start pb-1">
            {ingredient}
          </li>
        ))}
      </ul>
      <hr />
      <div className="flex justify-between py-5 text-gray-600"><span><i className="fa-solid fa-stopwatch"></i> {menuinfo.preparing_time}</span><span><i className="fa-brands fa-gripfire"></i> {menuinfo.calories}</span></div>
      <button className="btn text-white font-bold bg-green-500 rounded-3xl">Want to coock</button>
    </div>
  );
};

export default Menu;
