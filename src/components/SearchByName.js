import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchByName = ({handleClose}) => {
    const navigate = useNavigate();
    const [ recipeName, setRecipeName] = useState('');

    const handleSearch = () => {
       
        handleClose();
        navigate(`/searchByIngredients?searchType=${'byName'}&name=${recipeName}`
        );
    };

    return (
        <div className="d-flex me-3 col-12">            
            <form className="flex-grow-1" role="search" >
                <input 
                    className="form-control me-2"
                    type="search"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="By name (ex: lasagna, pasta,...)" 
                    aria-label="Search"
                    required
                /> 
            </form>
            <button type="button" className="btn btn-secondary" onClick={handleSearch}><IoIosSearch/></button>
                
            
        </div> 
    )

};


export default SearchByName;