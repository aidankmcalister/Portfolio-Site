import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const containerClasses =
  "flex flex-col w-full my-2 rounded-md shadow-sm shadow-custom-light-blue-shadow bg-main-secondary-blue py-2 px-2";
const labelClasses = "text-xl my-0.5 ";
const inputClasses =
  "font-rubik px-1.5 py-1 rounded-lg bg-slate-300 text-slate-700 opacity-70";

const ContactForm = ({ hideForm }) => {
  const formRef = useRef(); // Create a reference to the form

  const sendEmail = (values, { resetForm }) => {
    const emailData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    console.log("emailData:", emailData);

    emailjs
      .sendForm(
        "service_lkwszas",
        "template_nsbq55p",
        formRef.current, // Use the form reference
        "lg5r1VrtCY90xQyvR"
      )
      .then(
        (result) => {
          console.log(result.text);
          hideForm();
          resetForm(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={sendEmail}>
      {() => (
        <Form ref={formRef}>
          <div className={`${containerClasses}`}>
            <label className={`${labelClasses}`} htmlFor="name">
              NAME
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={`${inputClasses}`}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className={`${containerClasses}`}>
            <label className={`${labelClasses}`} htmlFor="email">
              EMAIL
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className={`${inputClasses}`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className={`${containerClasses}`}>
            <label className={`${labelClasses}`} htmlFor="subject">
              SUBJECT
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              className={`${inputClasses}`}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className={`${containerClasses}`}>
            <label className={`${labelClasses}`} htmlFor="message">
              MESSAGE
            </label>
            <Field
              type="text"
              id="message"
              name="message"
              className={`${inputClasses} h-28`}
              as="textarea"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="border-2 border-slate-300 px-2 py-1 rounded-full">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
