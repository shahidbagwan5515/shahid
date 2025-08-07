import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact my-5">
        <h2>CONTACT ME</h2>

        <div className="contact-icon">
          <a href="https:/www.instagram.com" className="items"><FaInstagram className="icon" /></a>
          <a href="https:/www.facebook.com" className="items"><CiFacebook className="icon" /></a>
          <a href="https:/www.linkedin.com" className="items"><CiLinkedin className="icon" /></a>
          <a href="https:/www.twitter.com" className="items"><FaSquareXTwitter className="icon" /></a>
          <a href="https:/www.github.com" className="items"><FaGithubSquare className="icon" /></a>
          <a href="https:/www.gmail.com" target='_blank' className="items"><SiGmail className="icon" /></a>
        </div>

        <form action="">
          <div className="input-box">
            <input type="text" className="f-inpt" placeholder="  First Name" /> <input type="text" className="f-inpt" placeholder="  Last Name" /> <br />
          </div>
          <div className="input-box">
            <input type="text" className="f-inpt" placeholder="  Sate" /><input type="text" className="f-inpt" placeholder="  City" /><br />
          </div>
          <div className="input-box">
            <input type="text" className="f-inpt" placeholder="  Gmail" /> <input type="text" className="f-inpt" placeholder="  Password" /><br />
          </div>
          <button type="submit" className="btn btn-warning  form-btn">Submit</button>
        </form>

      </div>
    </>
  )
}

export default Contact
