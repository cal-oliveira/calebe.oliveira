import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export default function ButtonWithShadow({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-full p-0 outline-offset-4 relative top-[4px] cursor-pointer"
    >
      <span className="py-3 px-[22px] h-[56px] rounded-full text-white font-bold translate-y-[-6px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 active:translate-y-[2px] transform transition-all duration-300 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
