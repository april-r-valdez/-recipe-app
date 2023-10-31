import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(0);
  const [isImporting, setIsImporting] = useState(false);

  const path = "./themes/theme_";
  const extension = ".sass";

  const handleNextTheme = async () => {
    if (!isImporting) {
      setIsImporting(true);
      const next = (theme + 1) % 10;
      try {
        await import(`${path}${next}${extension}`);
      } catch (err) {
        setIsEnd(true);
        console.log("ASDFSDAF");
      }
      setTheme(next);
      setIsImporting(false);
    }
  };

  useEffect(() => {
    handleNextTheme();
  }, []);

  // warning at end of theme cycle
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div>
      <button class="btn btn-tertiary" onClick={handleNextTheme}>
        [DEV] NEXT THEME
      </button>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={isEnd}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>End of themes</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>No more themes. Please refresh the page.</p>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
