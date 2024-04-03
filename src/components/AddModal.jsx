import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function AddModal({ show, handleClose, drName, addAppointment }) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      id: crypto.randomUUID(),
      patient: patientName,
      day: date,
      consulted: false,
      doctor: drName,
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Appointment for: {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Patient Name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Password"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-3">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
