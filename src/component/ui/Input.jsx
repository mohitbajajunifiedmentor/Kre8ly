"use client";

import { forwardRef, useId } from "react";
import { cn } from "./cn";

/**
 * Text field with label, hint and error wired to the right ARIA attributes.
 * The error is announced, and is never signalled by colour alone — the message
 * text is always rendered alongside the red border.
 */
const Input = forwardRef(function Input(
  { label, hint, error, id, className, containerClassName, required, ...rest },
  ref
) {
  const autoId = useId();
  const inputId = id || autoId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  return (
    <div className={cn("w-full space-y-1.5", containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-content">
          {label}
          {required && (
            <span className="text-error ml-0.5" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && hintId, error && errorId) || undefined}
        className={cn(
          "w-full h-11 px-3.5 rounded-control bg-surface text-content",
          "border border-line placeholder:text-content-muted",
          "transition-colors duration-150",
          "focus:outline-none focus:border-brand focus:shadow-focus",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-surface-sunken",
          error && "border-error focus:border-error",
          className
        )}
        {...rest}
      />
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-sm text-content-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
