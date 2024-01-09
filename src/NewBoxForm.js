import React, { useState } from "react";

/** Form for creating a new box to add to a list.
 *
 * Has state for the color/height/width of the box; on submission,
 * sends {color, height, width} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addItem }) => {
  const INITIAL_STATE = { color: "pink", height: 100, width: 100 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {color, height, width} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;