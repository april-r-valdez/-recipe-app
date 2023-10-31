import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(-1);
  const [isImporting, setIsImporting] = useState(false);

  const path = "./themes/";
  const themes = ["theme_1.sass"];

  const handleNextTheme = async () => {
    if (!isImporting) {
      setIsImporting(true);
      const next = (theme + 1) % themes.length;
      await import(`${path}${themes[next]}`);
      setTheme(next);
      setIsImporting(false);
    }
  };

  useEffect(() => {
    handleNextTheme();
  }, []);

  return (
    <button class="btn btn-primary" onClick={handleNextTheme}>
      [DEV] NEXT THEME
    </button>
  );
}

export default ThemeSwitcher;
