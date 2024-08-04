import React, { useState } from "react";

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onFormSubmit(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Specialty:
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Greased:
          <input
            type="checkbox"
            name="greased"
            value={formData.greased}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Highest Medal Achieved:
          <input
            type="text"
            name="highest medal achieved"
            value={formData["highest medal achieved"]}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
