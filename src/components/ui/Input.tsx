import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { AlertCircle } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  multiline?: false;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
  multiline: true;
}

type InputComponentProps = InputProps | TextareaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputComponentProps>(
  (props, ref) => {
    const { label, error, className = "", ...restProps } = props;

    // Base styles
    const baseStyles =
      "w-full bg-slate-900/50 border rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 outline-none transition-all";

    // Error styles
    const errorStyles = error ? "border-red-500/50" : "border-white/10";

    // Combined styles
    const combinedStyles = `${baseStyles} ${errorStyles} ${className}`;

    // Render multiline (textarea) or single-line (input)
    const inputElement = props.multiline ? (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={`${combinedStyles} resize-none`}
        {...(restProps as TextareaProps)}
      />
    ) : (
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={combinedStyles}
        {...(restProps as InputProps)}
      />
    );

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-slate-300 ml-1">
            {label}
          </label>
        )}
        {inputElement}
        {error && (
          <div className="flex items-center gap-1.5 text-red-400 text-xs ml-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{error.message}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
