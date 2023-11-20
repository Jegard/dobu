import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  name?: string;
  value?: string;
};

export default function Button({
  children,
  type = "button",
  name,
  value,
}: ButtonProps): JSX.Element {
  return (
    <button
      name={name}
      value={value}
      type={type}
      className="me-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </button>
  );
}
