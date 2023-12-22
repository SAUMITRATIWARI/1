import React from "react";

const AddressSection = ({ formData, setFormData }) => {
  const handleAddressChange = (field, value) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [field]: value,
      },
    });
  };

  return (
    <div>
      <h2>Address Section:</h2>
      <label>Country:</label>
      <input
        type="text"
        value={formData.address.country}
        onChange={(e) => handleAddressChange("country", e.target.value)}
      />
      <label>State/Province:</label>
      <input
        type="text"
        value={formData.address.state}
        onChange={(e) => handleAddressChange("state", e.target.value)}
      />
      <label>City:</label>
      <input
        type="text"
        value={formData.address.city}
        onChange={(e) => handleAddressChange("city", e.target.value)}
      />
    </div>
  );
};

export default AddressSection;
