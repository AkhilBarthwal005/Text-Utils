import React from "react";

export default function Alert(props) {
  const showMessageType = (message) => {
    let msg = message;
    return msg.charAt(0).toUpperCase() + message.slice(1);
  };
  return (
    props.alert && ( // props.alert && means if props.alert is set to be null than condition become false and it will not return our alert from here but if is true than it will return alert message from here.
      <div>
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{showMessageType(props.alert.type)} </strong>
          {props.alert.msg}
        </div>
      </div>
    )
  );
}
