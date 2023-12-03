import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage';
import HookForm from './components/hookForm';
import UncontrolledForm from './components/uncontrolledForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/uncontrolledform" element={<UncontrolledForm />} />
        <Route path="/hookform" element={<HookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
