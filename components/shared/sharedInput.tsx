import {ChangeEvent, HTMLInputTypeAttribute} from "react";

interface ISharedInput {
  name: string;
  labelText: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}
export default function SharedInput({
  name,
  labelText,
  inputType = "text",
  placeholder,
  textarea = false,
  onChange,
  value,
}: ISharedInput) {
  return (
    <>
      <label htmlFor={name} className="text-white w-20">
        {labelText}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 rounded-lg "
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className="px-3 py-2 rounded-lg "
          value={value}
          onChange={onChange}
          required
        />
      )}
    </>
  );
}
