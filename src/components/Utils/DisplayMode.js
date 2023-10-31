import { useState, useEffect } from "react";

function DisplayToggle() {
    
    // Instantiate the variable isDarkMode and caller (changeMode)
    const [isDarkMode, changeMode] = useState(false);

    //Function to toggle the Display mode
    const changeDisplayMode = () => {
        changeMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            document.querySelector('.navbar').setAttribute("data-bs-theme", "dark");
            const cards = document.querySelectorAll(".card, .list-group, .container-xl");
            cards.forEach((card, index)  => {
                card.setAttribute("data-bs-theme", "dark");
            });
        }
        else {
            document.documentElement.setAttribute("data-bs-theme", "light");
            document.querySelector('.navbar').setAttribute("data-bs-theme", "light");
            const cards = document.querySelectorAll(".card, .list-group, .container-xl");
            cards.forEach((card, index)  => {
                card.setAttribute("data-bs-theme", "light");
            });
        
        }
    }, [isDarkMode]);

    return (
        <div className="form-check-inline form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                onClick={changeDisplayMode}
            />
            <label className="form-check-label px-1">Mode</label>
        </div>
    )
}

export default DisplayToggle;