import { errorIcon } from "images/"
import React from "react"

interface InputProps {
  label: string
  value: string
  name: string
  errorMessage: string
  type?: "email"
  placeholder?: string
  showError: boolean
}

interface TextInputProps extends InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = React.memo(
  ({
    label,
    value,
    onChange,
    name,
    errorMessage,
    type,
    placeholder,
    showError,
  }: TextInputProps) => (
    <div className={`text-input-container`}>
      <div className="label-container">
        <label htmlFor={name}>{`${label}:`}</label>
        <div className={`error-container ${showError ? "visible" : "hidden"}`}>
          <p className="error-message">{errorMessage}</p>
          <img src={errorIcon} alt="error icon" className="error-icon" />
        </div>
      </div>
      <input
        id={name}
        placeholder={placeholder || name}
        className={`${name}-input input`}
        type={type || "text"}
        {...{ name, value, onChange }}
      />
    </div>
  )
)

interface TextAreaInputProps extends InputProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaInput = React.memo(
  ({
    label,
    value,
    onChange,
    name,
    errorMessage,
    placeholder,
    showError,
  }: TextAreaInputProps) => (
    <div className={`text-input-container`}>
      <div className="label-container">
        <label htmlFor={name}>{`${label}:`}</label>
        <div className={`error-container ${showError ? "visible" : "hidden"}`}>
          <p className="error-message">{errorMessage}</p>
          <img src={errorIcon} alt="error icon" className="error-icon" />
        </div>
      </div>
      <textarea
        id={name}
        placeholder={placeholder || name}
        className={`${name}-input input`}
        {...{ name, value, onChange }}
      />
    </div>
  )
)
