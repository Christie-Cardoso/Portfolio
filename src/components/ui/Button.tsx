import React, { forwardRef } from "react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface ButtonAsAnchor extends BaseButtonProps {
  as: "a";
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      loading = false,
      children,
      className = "",
      as = "button",
      ...restProps
    } = props;

    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all active:scale-95 outline-none focus:ring-2 focus:ring-emerald-500/20";

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20",
      secondary:
        "border border-slate-700 text-white hover:bg-white/5",
      ghost: "text-slate-300 hover:text-emerald-400 hover:bg-white/5",
      link: "text-emerald-500 hover:text-emerald-400 underline-offset-4 hover:underline",
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
      md: "px-6 py-3 text-base rounded-xl gap-2",
      lg: "px-8 py-4 text-base rounded-xl gap-2",
    };

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    // Disabled styles
    const disabledStyles = "opacity-50 cursor-not-allowed";

    // Combine all styles
    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

    // Icon animation for right position
    const iconAnimation =
      iconPosition === "right" ? "group-hover:translate-x-1 transition-transform" : "";

    // Check if button is disabled
    const isDisabled =
      loading || (as === "button" && (restProps as ButtonAsButton).disabled);

    // Content with loading spinner or icon
    const content = (
      <>
        {loading && (
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!loading && Icon && iconPosition === "left" && (
          <Icon className="w-5 h-5" />
        )}
        {children && <span>{children}</span>}
        {!loading && Icon && iconPosition === "right" && (
          <Icon className={`w-5 h-5 ${iconAnimation}`} />
        )}
      </>
    );

    if (as === "a") {
      const { href, download, target, rel } = restProps as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          download={download}
          target={target}
          rel={rel}
          className={`${combinedStyles} ${isDisabled ? disabledStyles : ""} group`}
          aria-disabled={isDisabled}
        >
          {content}
        </a>
      );
    }

    const { type = "button", onClick } = restProps as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        className={`${combinedStyles} ${isDisabled ? disabledStyles : ""} group`}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
