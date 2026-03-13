import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "cta" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-hover text-white",
  cta: "bg-cta hover:bg-cta-hover text-black font-bold",
  outline:
    "border border-border hover:border-primary text-foreground hover:text-primary",
  ghost: "text-muted hover:text-primary hover:bg-primary/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-4 py-2 rounded-xl",
  lg: "px-6 py-3 text-lg rounded-xl",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    as,
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:pointer-events-none";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (as === "a") {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={styles}
        {...anchorProps}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={styles}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
