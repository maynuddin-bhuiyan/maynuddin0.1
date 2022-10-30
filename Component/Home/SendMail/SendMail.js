import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./SendMail.module.css";

const SendMail = () => {
  //Form State Call
  const [name, setName] = useState("");
  // const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //Form validation
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const router = useRouter();

  // input validation
  const inputValidation = () => {
    let inputError = {};
    let inputValid = true;
    if (name.length <= 0) {
      inputError["name"] = true;
      inputValid = false;
    }
    if (email.length <= 0) {
      inputError["email"] = true;
      inputValid = false;
    }
    if (phone.length <= 0) {
      inputError["phone"] = true;
      inputValid = false;
    }
    if (message.length <= 0) {
      inputError["message"] = true;
      inputValid = false;
    }
    setErrors({ ...inputError });
    console.log("errors", errors);
    return inputValid;
  };

  // main function send message in your Gmail

  async function handleOnSubmit(e) {
    e.preventDefault();

    let inputIsValid = inputValidation();

    if (inputIsValid) {
      setButtonText("Sending...");
      const res = await fetch("/api/sendmail", {
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      router.push("https://www.linkedin.com/in/maynuddin-bhuiyan/");
      const { error } = await res.json;

      if (error) {
        console.log(error);
        setButtonText("Send");
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        return;
      }
      setButtonText("Send");
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  }

  return (
    <div className={styles.SendMail} id="contact">
      <h2>Get in Touch</h2>
      <div className="ShapImg">
        <Image height="21" width="1308" src="/images/shap.svg" />
      </div>
      <div className="headerText">
        <p>
          This sports club is one of the Best and most Unique Sports Templates
          forever Sports like Soccer, Football, Cricket, Baseball, Basketball,
          Hockey, Tennis, Surfing, Boxing, Yoga, Tennis, Cycling, Swimming,
          Athletics, Slalom, Golf, Volleyball, and All king of Sports Events.
          These themes have maintained team squad, team ranking, and all sports
          events easily.{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.SendMailDiv}>
              <button
                type="button"
                className="v_Button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Say Hello
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header text-center">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Contact Me
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form className={styles.form} onSubmit={handleOnSubmit}>
                        <div className="mb-3">
                          <label className={styles.form_label}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Your Full Name"
                            required={true}
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            name="name"
                          />
                        </div>
                        {/* <div className="mb-3">
                  <label className={styles.form_label}>Last Name *</label>
                  <input
                    type="text"                                       
                    placeholder="Enter your Last Name"
                    required={true}
                  />
                  
                </div> */}
                        <div className="mb-3">
                          <label className={styles.form_label}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            required={true}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            name="email"
                          />
                        </div>
                        <div className="mb-3">
                          <label className={styles.form_label}>
                            Phone Number *
                          </label>
                          <input
                            type="number"
                            id="phone"
                            required={true}
                            placeholder="Phone Number (with country code)"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            name="phone"
                            min={1000000000}
                            onInput={(e) => {
                              e.target.setCustomValidity("");
                            }}
                          />
                        </div>
                        <div className="mb-3">
                          <label className={styles.form_label}>
                            {" "}
                            Project Description *
                          </label>
                          <textarea
                            type="text"
                            placeholder="Your Project Description"
                            required={true}
                            rows="3"
                            name="message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          />
                        </div>
                        <button className="v_Button" type="submit">
                          <span className={styles.buttonMain}>
                            {" "}
                            {buttonText}
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
