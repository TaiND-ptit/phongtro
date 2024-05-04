import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../store/actions";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/api/category";
import { formatVietnameseToString } from "@/common/formatVietnameseToString";


const notActive =
  "hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1";
const active =
  "hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2";

const Navigation = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const {
    data: categories,
  } = useQuery(["categories"], () => getCategories(), {
    select: (res) => res?.data?.categoryData,
  });

  return (
    <div
      className={`w-full flex ${
        isAdmin ? "justify-start" : "justify-center"
      } items-center h-[40px] bg-secondary1 text-white`}
    >
      <div className="w-3/5 flex h-full items-center text-sm font-medium">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
