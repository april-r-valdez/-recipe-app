import { IoIosSearch } from "react-icons/io";

const SearchByName = ({handleClose}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="row">
                <form className="d-flex me-3 col-12" role="search">
                <input className="form-control me-2" type="search" placeholder="By name (ex: lasagna, pasta,...)" aria-label="Search"/>        
                </form> 
            </div>
            <div className="row">
                <button type="button" className="btn btn-secondary" onClick={handleClose}><IoIosSearch/></button>
            </div>
        </div> 
    )

};

export default SearchByName;