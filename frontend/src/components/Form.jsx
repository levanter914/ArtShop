import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Img from "../assets/contact3.jpg";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Form Submitted");

    const form = new FormData();
    form.append("access_key", "bfc07158-ff29-40e6-9982-5ffbf685c19c");
    form.append("name", `${formData.firstName} ${formData.lastName}`);
    form.append("email", formData.email);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      setResult(`Error: ${data.message}`);
    }
  };

  return (
    <div className="relative">
      <div className="bg-[#a2a1ab] py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row gap-24">
            {/* Left Section - w-1/2 */}
            <span className="flex flex-col space-y-5 w-full md:w-1/2">
              <div className="flex flex-col items-start space-y-4">
                <CiMail className="w-10 h-10 text-white" />
                <h2 className="text-4xl font-bold text-white">
                  For commissions work and workshop inquiries, please email:
                </h2>
                <Link
                  to="mailto:artartisticshubham@gmail.com"
                  className="text-white text-2xl font-bold underline decoration-white decoration-4 underline-offset-4"
                >
                  artartisticshubham@gmail.com
                </Link>
                <p className="text-white text-xl font-bold">or send a message via this form</p>
              </div>
            </span>

            {/* Right Section - w-1/2 */}
            <span className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* First & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-1 w-full sm:w-1/2">
                    <label className="text-white">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 bg-transparent border-b-2 border-white text-white outline-none focus:border-black transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full sm:w-1/2">
                    <label className="text-white">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 bg-transparent border-b-2 border-white text-white outline-none focus:border-black transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-transparent border-b-2 border-white text-white outline-none focus:border-black transition-colors duration-200"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Write a Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full p-1 bg-transparent border-b-2 border-white text-white outline-none focus:border-black transition-colors duration-200"
                    required
                  />
                </div>

                {/* Submit Button & Message in Same Line */}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-white text-[#75747d] font-bold py-2 px-6 rounded-full border-2 border-transparent transition-all duration-500 hover:border-[#75747d] hover:bg-white hover:text-[#75747d]"
                  >
                    Submit
                  </button>
                  <p className="text-gray-600">{result}</p>
                </div>
              </form>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
