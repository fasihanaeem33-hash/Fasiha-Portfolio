const Button = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600 hover:-translate-y-1",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",

    dark:
      "bg-slate-800 hover:bg-slate-700 text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;