import Friend from '../../utils/friend/friend';

import { AiOutlineLike } from "react-icons/ai";
import { RiEmotionHappyLine } from "react-icons/ri";
import { PiCubeThin } from "react-icons/pi";

const Section2 = () => {
    const header_text = "We've made some friends along the way"
  const arr_of_obj = [
    {
      icon: <AiOutlineLike size={40} color='blue' />, text: " 9 of 10 members would refer friends to Oportun", link: 'see more'
    },
    {
      icon: <RiEmotionHappyLine size={40} color='blue' />, text: "75,000 reviews on Google and Truitpilot", link: "see more"
    },
    {
      icon: <PiCubeThin size={40} color='blue' />, text: "The whole process was extremely easy and plenty", link: "Claudia M From Google"
    }
  ]
  return (
    <Friend header_text={header_text} arr_of_obj={arr_of_obj} />
  )
}

export default Section2