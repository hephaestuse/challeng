import React from "react";

type buttonProps = {
  children: React.ReactNode;
};
function Button({ children }: buttonProps) {
  return (
    <button
      type="submit"
      className="w-1/2 rounded-lg bg-stone-800 p-2 font-extrabold italic text-stone-400 transition-colors hover:bg-stone-400 hover:text-stone-800"
    >
      {children}
    </button>
  );
}

export default Button;
