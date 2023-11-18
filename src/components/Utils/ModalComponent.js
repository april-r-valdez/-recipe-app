import { Modal } from 'react-bootstrap';

const ModalComponent = ({showModal, handleClose, modalTitle, modalBody, modalFooter}) => {
    return (
        <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    );
};

export default ModalComponent;