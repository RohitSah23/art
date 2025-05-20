import { useState } from "react";

const Button = ({ icon, hoverIcon, label, className = "", link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
<div className="flex items-center justify-center gap-2.5 text-sm">
      {icon && (
        <img
          src={isHovered && hoverIcon ? hoverIcon : icon}
          alt={`${label} Icon`}
          className="h-6 object-contain transition-transform duration-300 group-hover:rotate-12 inline-block align-middle"
        />
      )}
      <div className="h-6 flex items-center">
      {label}
      </div>
    </div>
  );

  const baseClass = `
    ${className}
    cursor-pointer font-semibold 
    border-1 border-[var(--color-primary)] 
    text-[var(--color-primary)] py-2 px-6 
    rounded-lg w-full md:w-auto mb-4 md:mb-0 
    relative overflow-hidden transition-all 
    duration-300 hover:text-white hover:shadow-lg 
    hover:scale-105 before:absolute before:content-[''] 
    before:bg-[var(--color-primary)] before:top-0 
    before:left-0 before:right-0 before:bottom-0 
    before:-translate-x-full before:transition-transform 
    before:duration-300 before:ease-out hover:before:translate-x-0 
    before:-z-10 group
  `;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

export default Button;
