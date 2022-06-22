export default function Button(props) {
  const { text, size, variant } = props;

  const sizeBtn = () => {
    if (size === "lg") {
      return "text-2xl px-6 py-3";
    } else {
      return "text-lg px-4 py-2";
    }
  };

  const variantBtn = () => {
    if (variant === "primary") {
      return "bg-primary text-tertiary hover:bg-transparent hover:text-primary border-primary";
    } else if (variant === "primary-outline") {
      return "bg-tertiary text-primary hover:bg-primary hover:text-tertiary border-primary";
    } else if (variant === "secondary") {
      return "bg-transparent text-tertiary hover:bg-tertiary hover:text-primary border-tertiary";
    } else {
      return "bg-primary text-tertiary hover:bg-tertiary border-primary hover:text-primary";
    }
  };

  return (
    <a
      href="#x"
      className={` ${sizeBtn()} ${variantBtn()} tracking-wider font-primary font-bold border-2 rounded-full transition-all`}
    >
      {text}
    </a>
  );
}
