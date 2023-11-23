import { Modal } from 'react-bootstrap';

// Modal compoenent defined to be reused byy various other elements
// Parameters: Showmodal to display the modal
// Handleclose takes close function to be used for some other close icons or trigger
// modalTitle
// modalBody: as used defined. It can also take close function see example of : SearchByName.js
// modalFooter: Generally for close function
const ModalComponent = ({showModal, handleClose, modalTitle, modalBody, modalFooter}) => {
    return (
        <Modal show={showModal}  backdrop="static" onHide={handleClose} centered>
        <Modal.Header className="text-center" closeButton>
            <Modal.Title>
            <div className="d-flex align-items-center justify-content-center">
                {modalTitle}
            </div>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>{modalFooter}</Modal.Footer>
      </Modal>
    );
};

export default ModalComponent;