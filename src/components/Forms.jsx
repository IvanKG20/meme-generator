import React from "react";
import { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = React.useState({
    userName: "",
    reason: "",
    couponsSubscribtion: false,
    favFlavor: "",
    favBrand: "",
  });

  const saveFormData = (event) => {
    const { type, name, value, checked } = event.target;
    return setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  console.log(formData);

  return (
    <div>
      <h1>Testing forms</h1>
      <form className="formPage">
        <input
          type="text"
          name="userName"
          placeholder="Your name"
          onChange={saveFormData}
          value={formData.userName}
        />
        <textarea
          name="reason"
          id="TextArea"
          cols="30"
          rows="10"
          placeholder="Why do you want to participate?"
          onChange={saveFormData}
          value={formData.reason}
        ></textarea>
        <div>
          <input
            type="checkbox"
            name="couponsSubscribtion"
            id="testCheckbox"
            onChange={saveFormData}
            checked={formData.couponsSubscribtion}
          />
          <label htmlFor="testCheckbox"> Subscribe for free coupons </label>
        </div>
        <div>
          <input
            type="radio"
            name="favFlavor"
            id="yogurt"
            value="yogurt"
            onChange={saveFormData}
            checked={formData.favFlavor === "yogurt"}
          />
          <label htmlFor="yogurt">Yogurt</label>
          <input
            type="radio"
            name="favFlavor"
            id="chocolate"
            value="chocolate"
            onChange={saveFormData}
            checked={formData.favFlavor === "chocolate"}
          />
          <label htmlFor="chocolate">Chocolate</label>
          <input
            type="radio"
            name="favFlavor"
            id="vanilla"
            value="vanilla"
            onChange={saveFormData}
            checked={formData.favFlavor === "vanilla"}
          />
          <label htmlFor="vanilla">Vanilla</label>
        </div>
        <label htmlFor="favBrand"> What is your favorite brand?</label>
        <select
          name="favBrand"
          id="favBrand"
          onChange={saveFormData}
          value={formData.favBrand}
        >
          <option value="">Choose</option>
          <option value="nestle">Nestle</option>
          <option value="familia">Familia</option>
          <option value="boss">Boss</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
