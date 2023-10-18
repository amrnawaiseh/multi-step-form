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
  const errorMsgHandler = (title) => {
    if (title == "Name") {
      return (
        <p className="required">
          This field is required, please enter a valid name!
        </p>
      );
    }
    if (title == "Email Address") {
      return (
        <p className="required">
          This field is required, please enter a valid Email address!
        </p>
      );
    } else {
      return (
        <p className="required">
          This field is required, please enter a valid phone number!
        </p>
      );
    }
  };

  return (
    <>
      <label htmlFor={id}>
        <p className="label-header">{title}</p>
        {checkValidity && !validity && errorMsgHandler(title)}
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
