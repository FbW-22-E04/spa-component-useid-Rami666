import { useId } from "react";

function InputForm(props) {
  const id = useId();
  return (
    <div className="inputForm">
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type={props.type} />
    </div>
  );
}

export default InputForm;
