import React from "react";
import emailjs from "@emailjs/browser";

const containerClasses = "flex flex-col w-full my-2";
const labelClasses = "text-xl my-0.5 ";
const inputClasses =
  "font-rubik px-1.5 py-1 rounded-lg bg-slate-300 text-slate-700 opacity-70";

const ContactForm = ({ hideForm }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkwszas",
        "template_nsbq55p",
        e.target,
        "lg5r1VrtCY90xQyvR"
      )
      .then(
        (result) => {
          console.log(result.text);

          hideForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <div className={`${containerClasses} border-blue-500`}>
        <label className={`${labelClasses}`} htmlFor="name">
          NAME
        </label>
        <input
          className={`${inputClasses}`}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className={`${containerClasses} border-blue-500`}>
        <label className={`${labelClasses}`} htmlFor="email">
          EMAIL
        </label>
        <input
          className={`${inputClasses}`}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={`${containerClasses} border-purple-500`}>
        <label className={`${labelClasses}`} htmlFor="subject">
          SUBJECT
        </label>
        <input
          className={`${inputClasses}`}
          type="text"
          id="subject"
          name="subject"
        />
      </div>
      <div className={`${containerClasses} border-yellow-500`}>
        <label className={`${labelClasses}`} htmlFor="message">
          MESSAGE
        </label>
        <input
          className={`${inputClasses} h-28`}
          type="text"
          id="message"
          name="message"
        />
      </div>
      <input
        type="submit"
        value={"Submit"}
        className="border-2 border-slate-300 px-2 py-1 rounded-full"
      />
    </form>
  );
};

export default ContactForm;
