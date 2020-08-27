import React, { useState } from "react"
import { TextAreaInput, TextInput } from "./components/textInputs/textInputs"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormData {
  name: string
  email: string
  subject: string
  body: string
}

const defaultFormData = {
  name: "",
  email: "",
  subject: "",
  body: "",
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  const [showErrors, toggleErrors] = useState(false)

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    toggleErrors(false)
    const target = event.target
    const value = target.value
    const name = target.name

    setFormData(s => ({ ...s, [name]: value }))
  }

  const { name, email, subject, body } = formData

  const nameValid = name !== ""
  const emailValid = emailRegex.test(email)
  const subjectValid = true
  const bodyValid = body !== ""

  const onSubmit = (e: React.FormEvent) => {
    if (nameValid && emailValid && subjectValid && bodyValid) {
      alert("success")
    } else {
      e.preventDefault()
      toggleErrors(true)
    }
  }

  return (
    <div className="contact-form-wrapper">
      <form method="post" onSubmit={onSubmit} action="#">
        <TextInput
          name="name"
          value={name}
          label="Name"
          onChange={onInputChange}
          errorMessage="Your name is required"
          showError={!nameValid && showErrors}
          placeholder="What shall we call you?"
        />
        <TextInput
          name="email"
          value={email}
          label="Email"
          type={"email"}
          onChange={onInputChange}
          errorMessage="Invalid email address"
          showError={!emailValid && showErrors}
          placeholder="How do we get back to you?"
        />
        <TextInput
          name="subject"
          value={subject}
          label="Subject"
          onChange={onInputChange}
          errorMessage=""
          showError={!subjectValid && showErrors}
          placeholder="What's this about?"
        />
        <TextAreaInput
          name="body"
          value={body}
          label="Message"
          placeholder={"Go ahead. We're listening..."}
          onChange={onInputChange}
          errorMessage="Message can't be empty"
          showError={!bodyValid && showErrors}
        />
        <div className="submit-button-container">
          <button type="submit">SEND</button>
          <a
            className="mail-to-link"
            href={`mailto:connect@winfieldsports.net`}
            target="_blank"
            rel="noopener noreferrer"
          >
            connect@winfieldsports.net
          </a>
        </div>
      </form>
    </div>
  )
}
