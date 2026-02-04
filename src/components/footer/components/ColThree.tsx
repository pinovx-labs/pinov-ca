import { AiOutlineInstagram } from "react-icons/ai";
import {  FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
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
      
      
       <div className="icons">
        <Icons
          Icon={FaFacebookF}
          link="https://www.facebook.com/wearepinovx
"
        />
        <Icons
          Icon={AiOutlineInstagram}
          link="https://www.instagram.com/wearepinovx/
"
        />
        <Icons Icon={FaYoutube} link="" />
        <Icons Icon={BsTwitter} link="https://x.com/wearepinovx" />
        <Icons
          Icon={FaLinkedin}
          link="https://www.linkedin.com/company/pinov-inc/
"
        />
      </div>
      
      
      
       </div>
  );
};

export default ColThree;
