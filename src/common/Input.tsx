import { ChangeEvent } from "react";

interface IInput {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FC<IInput> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-8">
      {label.length > 0 && (
        <label className="block mb-2 text-lg font-medium text-gray-900">
          {label}:
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        className="bg-gray-50 w-9/12 outline-none border border-gray-300 text-gray-900 text-md rounded-lg block p-2.5 "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
