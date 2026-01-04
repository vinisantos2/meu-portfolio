import Link from "next/link";
import { ReactNode } from "react";

type ButtonPadraoProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function ButtonPadrao({
  href,
  onClick,
  children,
  icon,
  variant = "primary",
  className = "",
}: ButtonPadraoProps) {
  const baseStyle = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl
    font-semibold
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
      shadow-md
    `,
    secondary: `
      bg-gray-900 text-white
      hover:bg-gray-800
      focus:ring-gray-500
      shadow-md
    `,
    outline: `
      border border-gray-300 text-gray-900
      hover:bg-gray-100
      focus:ring-gray-400
    `,
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {icon}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
