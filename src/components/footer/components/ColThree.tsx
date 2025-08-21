import { AiOutlineInstagram } from "react-icons/ai";
import {  FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Icons from "./Icons";



const ColThree = () => {
  return (
    <div
      className="footer-link footer-col   align-self-end"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="col-3-details">Follow Us</div>
      <div
        className="icons"
      >
        
        <Icons
          Icon={FaFacebookF}
          link=""
        />
        <Icons
          Icon={AiOutlineInstagram}
          link=""
        />
        <Icons
          Icon={FaYoutube}
          link=""
        />
        <Icons
          Icon={BsTwitter}
          link="#"
        />
      </div>
    </div>
  );
};

export default ColThree;
