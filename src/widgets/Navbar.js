import DisplayToggle from "../components/Utils/DisplayMode";
import Sidebar from "../widgets/Sidebar";
import Login from "./Login";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import ModalComponent from "../components/Utils/ModalComponent";
import SearchByName from "../components/SearchByName";


function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = ({title, body, footer}) => {
        setModalContent({title, body, footer});
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent({});
    };


    return (
        <div className="navbar fixed-top bg-body-tertiary flex-nowrap " data-bs-theme="light">
            <div className="container-fluid">
                <div className="d-inline-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Sidebar/>
                    <Link className="navbar-brand fw-bolder px-2" to="/home" >  RECIPE GENERATOR </Link>
                </div>                                      
                <div className="d-inline-flex">
                    <DisplayToggle className="p-1 me-3"/>                            
                    
                    {/*Search by name modal */}
                    <IoIosSearch className="p-1 me-3 icon-bg-light rounded-circle" style={{ fontSize: '30px'}}
                        onClick={() => openModal({
                            title : <p className="fw-semibold">SEARCH RECIPE</p>,
                            body: <SearchByName handleClose={closeModal}/>,
                            footer : <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>}
                        )}/>                
                    
                    {/*Login and Signup page modal*/}
                    <FaCircleUser className="p-1 me-3 icon-bg-light rounded-circle" style={{ fontSize: '30px'}} 
                        onClick={() => openModal({
                            title : <p className="fw-semibold">Welcome</p>,
                            body: <Login />,
                            footer : <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>}
                        )}
                    />
                    
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            
                        </div>
                    </div>
                </div>
                        
               
            </div>
            <ModalComponent
                showModal={showModal}
                handleClose={closeModal}
                modalTitle={modalContent.title}
                modalBody={modalContent.body}
                modalFooter={modalContent.footer}
            />
        </div>
    )
}

export default Navbar;