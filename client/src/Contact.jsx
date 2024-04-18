import React from "react";
import Picture from "./Images/Picture.jpg";
import Name from "./Images/contact.png";

const Contact = () => {
  return (
    <div className="bg-[#fffded] h-screen">
      <div className="grid grid-cols-2">
        <div className=" flex justify-center pt-10">
          <img src={Picture} alt="" width="300px" height="100px" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
