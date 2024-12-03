type InputStyle = "transparent" | "primary" | "secondary";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  style?: InputStyle;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
  required?:boolean
};
function Input({
  type,
  name,
  placeholder,
  style = "primary",
  onchange,
  required
}: InputProps) {
  let customStyle;
  if (style == "transparent") {
    customStyle =
      "w-3/4 bg-transparent m-5 font-extrabold italic text-gray-300 placeholder:italic placeholder:text-stone-400 placeholder:font-extrabold p-2 rounded-md focus:outline-none focus:shadow-inner focus:shadow-stone-950";
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={customStyle}
      onChange={onchange}
      required={required}
    />
  );
}

export default Input;
