interface IButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: "small" | "default" | "large";
  type?: "primary" | "default" | "danger" | "link";
  href?: string;
  children?: React.ReactNode;
}

type NaviveButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, "type"> &
  IButtonProps;
type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLElement>, "type"> &
  IButtonProps;

// Partial类似于？，代表所有的类型都是一个可选属性
type ButtonProps = Partial<NaviveButtonProps & AnchorProps>;
const Button: React.FunctionComponent<ButtonProps> = props => {
  const { className, disabled, loading, size, type, href, children, ...rest } =
    props;
  if (type === "link") {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
