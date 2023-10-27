import ContactForm from "./ContactForm";

const ContactCard = () => {
  //   const containerClasses = "flex flex-col w-full my-2";
  //   const labelClasses = "text-xl my-0.5 ";
  //   const inputClasses =
  // "font-rubik px-1.5 py-1 rounded-lg bg-slate-300 text-slate-700 opacity-70";

  return (
    <div className=" my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 flex flex-col text-slate-300 max-w-lg font-rubik">
      <h1 className="text-2xl">Contact Me</h1>
      <hr className="my-2 mt-1 w-full" />
      <ContactForm />
      {/* <form>
        <div className={`${containerClasses} border-blue-500`}>
          <label className={`${labelClasses}`} for="email">
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
          <label className={`${labelClasses}`} for="subject">
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
          <label className={`${labelClasses}`} for="message">
            MESSAGE
          </label>
          <input
            className={`${inputClasses} h-28`}
            type="text"
            id="message"
            name="message"
          />
        </div>
      </form> */}
    </div>
  );
};

export default ContactCard;
