import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux';
import Tile from './tile';

function MainPage() {
  const { submittedData } = useAppSelector((state) => state.formReducer);

  return (
    <div className="main">
      <h1>Select registration form</h1>
      <div className="forms">
        <div>
          <Link to="/uncontrolledform">Uncontrolled Form</Link>
        </div>
        <div>
          <Link to="/hookform">Hook Form</Link>
        </div>
      </div>
      {submittedData.length !== 0 && (
        <>
          <h2>Form Data</h2>
          <Tile arr={submittedData} />
        </>
      )}
    </div>
  );
}
export default MainPage;
