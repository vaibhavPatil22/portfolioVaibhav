import React, { useContext, useState } from "react";
import "./Contact.css";
// import { Link } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {


  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [information, setInformation] = useState("");
  
  const handleReservation = async (e)=>{
    e.preventDefault();
  try {
    const{data} = await axios.post(
      "https://long-pink-mackerel-belt.cyclic.app/api/v1/reservation/send",
      {firstName, email, information},
      {
        headers:{
          'Content-Type':'application/json',
        },
        withCredentials: true,
      }
    );
    toast.success(data.success);
    setFirstName("");
    setEmail("");
    setInformation("");
    
  } catch (error) {
    toast.error(error);
  }
  
  };
  







  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();
  // const [done, setDone] = useState(false)
  // const sendEmail = (e) => {
  //   e.preventDefault();
  
  //   const formData = new FormData(form.current);
  //   const data = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });
  
  //   emailjs
  //     .sendForm("service_2mu5xtl", "template_m5udu2c", form.current, "VLwg1ltOWvnCYAiK_")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form>
          <input type="text"  className="user"  placeholder="Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          <input type="email"  className="user" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <textarea  className="user" rows="4" placeholder="Your Message..." value={information} onChange={(e)=> setInformation(e.target.value)}/>
          {/* <input type="submit" className="button" onClick={handleReservation}/> */}
          <button type="submit" className="button" onClick={handleReservation}>submit</button>
          {/* <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;



























