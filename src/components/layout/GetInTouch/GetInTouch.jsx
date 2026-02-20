"use client";
import Button from "@/components/common/Button/Button";
import FeatureHeader from "@/components/common/FeatureHeader/FeatureHeader";
import Section from "@/components/common/Section/Section";
import Typography from "@/components/common/Typography/Typography";
import React, { useState } from "react";

const GetInTouch = () => {
  const InfoItem = ({ label, value }) => (
    <div className="mb-6">
      <Typography variant="label" as="p" className="mb-2">
        {label} :
      </Typography>
      <Typography variant="p" className="!font-[200]">
        {value}
      </Typography>
    </div>
  );

  const InputField = ({ label, type = "text", name, value, onChange }) => (
    <div className="mb-7">
      <Typography variant="label" as="p" className="mb-2">
        {label}
      </Typography>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-[#F7F7F7] rounded-[12px] w-full h-[46px] px-4 outline-none"
      />
    </div>
  );

  const TextareaField = ({ label, name, value, onChange }) => (
    <div className="mb-7">
      <Typography variant="label" as="p" className="mb-2">
        {label}
      </Typography>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={6}
        className="bg-[#F7F7F7] rounded-[12px] w-full px-4 py-2 outline-none"
      />
    </div>
  );

  const SelectField = ({ label, name, value, onChange, options }) => (
    <div className="mb-7">
      <Typography variant="label" as="p" className="mb-2">
        {label}
      </Typography>
      <div className="relative w-full">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="bg-[#F7F7F7] rounded-[12px] w-full h-[46px] px-4 appearance-none border border-transparent outline-none"
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom caret icon */}
        {/* <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const serviceOptions = [
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
  ];

  return (
    <div className="min-h-screen z-10">
      <Section className=" ">
        <div className="w-full mt-0 grid lg:grid-cols-2 grid-cols-1 gap-x-12">
          <div className="lg:mb-0 mb-5">
            <div className="w-full sticky top-[8rem]">
              <FeatureHeader
                label="get in touch"
                title="let’s grow <br/> together"
              />
              <img
                alt="get-in-touch"
                src="/images/Grow-together.png"
                className="2xl:w-[677px] 2xl:h-[450px] lg:w-[503px] lg:h-[351px] w-full h-[249px] object-cover lg:rounded-[50px] rounded-[35px] shadow-lg"
              />
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:pt-[16vw]">
            <InfoItem label="Email" value="contact@jewellabel.com" />
            <InfoItem label="Telephone" value="(219) 555-0114" />
            <InfoItem
              label="Address"
              value="2972 Westheimer Rd. Santa Ana, Illinois 85486"
            />

            <form className="space-y-4 mt-6">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <SelectField
                label="What service are you interested in"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={serviceOptions}
              />
              <TextareaField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button title="Submit" />
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GetInTouch;
