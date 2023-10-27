import ContactForm from "./ContactForm";
import ThankYouCard from "./ThankYouCard";
import React, { useState } from "react";

const ContactCard = () => {
  const [show, setShow] = useState(true);

  const hideContactForm = () => {
    setShow(false);
  };

  return (
    <div className=" my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 flex flex-col text-slate-300 max-w-lg font-rubik">
      <h1 className="text-2xl">Contact Me</h1>
      <hr className="my-2 mt-1 w-full" />

      {show ? <ContactForm hideForm={hideContactForm} /> : <ThankYouCard />}

      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
    </div>
  );
};

export default ContactCard;
