import { useTheme } from "../../../context/ThemeContext";

const RoundedButton = ({ text,className }) => {
  const { darkMode } = useTheme();

  return (
    <button
      className={`border rounded-full text-sm transition-colors duration-300 border-[var(--color-primary)] py-2 px-4 ${className} ${
        darkMode
          ? "bg-[var(--dark-bg)] text-[var(--dark-nav-default)]"
          : "bg-[var(--light-bg)] text-[#333333]"
      }`}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
