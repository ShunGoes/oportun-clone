import React from 'react'

import { IoMdSearch } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

import Friend from '../friend/friend';

const Journey = () => {
    const header_text = 'More tools to guide your journey'
    const arr_of_obj = [
        {
            icon: <IoMdSearch size={40} color='blue'/> , text: "Learn about how to increase your income and plan for your future", topic:"Find jobs with help from Steady",id:1
        },
        {
            icon: <FaRegCircleQuestion size={40} color='blue'/>, text: "Understand your credit, financial plan, and more with free financial coaching", topic: "Get financial advice from UnidosUS", id: 2
        },
        {
            icon:<GrLocation size={40} color='blue'/>, text: "Locate local nonprofit and government programs providing financial support", topic:"Discover services through SpringFour", id: 3
        }
    ]
  return (
        <Friend header_text={header_text} arr_of_obj={arr_of_obj} />
  )
}

export default Journey