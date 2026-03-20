import React from 'react';
import { useGlobalStore } from '../../store/useGlobalStore';

const Header = () => {
  const { jwtState, setJwtState } = useGlobalStore();
  const { darkMode } = jwtState;

  const toggleDarkMode = () => {
    setJwtState({ darkMode: !darkMode });
    document.body.classList.toggle('dark');
  };

  return (
    <div className='title-area' id='title-area'>
      <div className='title'>
        <h1>JWT validation, encryption and generation</h1>
      </div>
      <div className="form-check form-switch custom-switch theme-switch-wrapper">
        <label className="theme-switch" htmlFor="chk-darkmode">
          <input
            type="checkbox"
            className="form-check-input"
            id="chk-darkmode"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="slider round">
            <span className="bi bi-moon fs-5 moon"></span>
            <span className="bi bi-sun fs-5 sun"></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
