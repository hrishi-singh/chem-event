import React, {useRef, useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import './ForgotPwdPopup.css';
import { useAuth } from "../contexts/AuthContext"

const ForgotPwdPopup = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
        alert("Check your Email Inbox/Spam")
      } catch {
        setError("Failed to reset password")
      }
  
      setLoading(false)
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button id='resetpwdbtn' onClick={handleShow}>
      Forgot Password ?
    </button>
    {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header  className="ForgotPwdPopupTitle" closeButton>
        <Modal.Title>Forgot Password ?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ForgotPwdPopupbody">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Registered Email"
              autoFocus
              ref={emailRef} required 
            />
          </Form.Group>
        </Form>
        <Button disabled={loading} id='pwdchangebtn' onClick={handleClose} type="submit">
          Reset Password
        </Button>

      </Modal.Body>
    </Modal>
  </>
  )
}

export default ForgotPwdPopup