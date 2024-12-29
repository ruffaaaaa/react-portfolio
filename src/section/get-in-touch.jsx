import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function GetInTouch() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showRecaptcha, setShowRecaptcha] = useState(false); // State to manage reCAPTCHA visibility

  const validate = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = "Name is required";
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.user_message) errors.user_message = "Message is required";
    if (!recaptchaValue) errors.recaptcha = "Please verify that you are human";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = () => {
    setShowRecaptcha(true); // Show reCAPTCHA on input focus
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm("service_bohxow9", "template_pgxzbmd", form.current, {
        publicKey: "9emU_hBZPncB2aw7r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
          setFormData({ user_name: "", user_email: "", user_message: "" });
          setRecaptchaValue(null);
          setErrors({});
          setShowRecaptcha(false); // Hide reCAPTCHA after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="get-in-touch"
      className="relative z-10 -mb-20 py-10 lg:mx-14 mx-8 bg-white rounded-3xl shadow-md"
    >
      <div>
        <div className="items-center justify-center text-center mb-6">
          <h1 className="text-[#203972] text-3xl uppercase lg:text-3xl font-bold">
            GET IN TOUCH
          </h1>
        </div>

        <div className="w-full lg:px-16 px-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-6">
              <div className="lg:col-span-1 text-black">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full bg-[#EBE8E8] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                  {errors.user_name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.user_name}
                    </p>
                  )}
                </div>
                <div className="lg:mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full bg-[#EBE8E8] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                  {errors.user_email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.user_email}
                    </p>
                  )}
                </div>
              </div>

              <div className="lg:col-span-1 text-black lg:mt-0 -mt-10">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="mt-1 block bg-[#EBE8E8] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows="5"
                    name="user_message"
                    placeholder="Your Message"
                    value={formData.user_message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  ></textarea>
                  {errors.user_message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.user_message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* reCAPTCHA */}
            {showRecaptcha && (
              <div className="mb-4 flex flex-col items-center">
                <ReCAPTCHA
                  sitekey="6LcU8agqAAAAAJ0KwDWbzkEXYaLfoSs4ZmYDssei"
                  onChange={handleRecaptchaChange}
                />
                {errors.recaptcha && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recaptcha}
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-center text-center">
              <input
                type="submit"
                className="px-10 py-2 bg-gradient-to-r from-[#53368A] to-[#CA60B8] text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
