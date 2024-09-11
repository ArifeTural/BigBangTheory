import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import header from "./header.css";

function AddModal() {
  const [show, setShow] = useState(true); 
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  return (
    <div className='modi'>
      <Button variant="primary" onClick={handleShow}>
        Jenerik
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='Mbody'>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/hQjF0-T45dQ"
              allowFullScreen
              title="YouTube Video"
              width="100%"
              height="315"
            ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer className='Mfooter'>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
