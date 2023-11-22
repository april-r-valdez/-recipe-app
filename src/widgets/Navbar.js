import DisplayToggle from "../components/Utils/DisplayMode";
import Sidebar from "../widgets/Sidebar";
import Login from "../Login"
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import ModalComponent from "../components/Utils/ModalComponent";


function Navbar() {
    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleModalOpen = () => {
        setShowSearchModal(true);
    };

    const handleModalClose = () => {
        setShowSearchModal(false);
    };


    const modalTitle = (
        <p class="fw-semibold">SEARCH RECIPE</p>
    );
    const modalBody = (
        <div className="d-flex justify-content-center">
        <form className="d-flex me-3 col-10" role="search">
        <input className="form-control me-2" type="search" placeholder="By name (ex: lasagna, pasta,...)" aria-label="Search"/>        
        </form> 
        </div>    
    );
    const modalFooter = (
        <>
        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Search</button>
        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
        </>
    );

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
                <div class="d-inline-flex">
                    <DisplayToggle className="p-1 me-3 "/>                            
                    <IoIosSearch className="p-1 me-3 icon-bg-light rounded-circle" style={{ fontSize: '30px'}} onClick={handleModalOpen}/>                
                    <FaCircleUser className="p-1 me-3 icon-bg-light rounded-circle" style={{ fontSize: '30px'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                    
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <Login />
                        </div>
                    </div>
                </div>
                        
               
            </div>
            <ModalComponent
                showModal={showSearchModal}
                handleClose={handleModalClose}
                modalTitle={modalTitle}
                modalBody={modalBody}
                modalFooter={modalFooter}
            />
        </div>
    )
}

export default Navbar;