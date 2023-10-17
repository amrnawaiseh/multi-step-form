import React from "react";

function PersonalInfoInputs({
  title,
  type,
  placeholder,
  onChange,
  value,
  id,
  checkValidity,
  validity,
}) {
  return (
    <>
      <label htmlFor={id}>
        <p className="label-header">{title}</p>
        {checkValidity && !validity && (
          <p className="required">This field is required</p>
        )}
      </label>
      <input
        style={{
          border: checkValidity && !validity && "1px solid red",
        }}
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default PersonalInfoInputs;
