import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Aside';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/2" element={<Step2 />} />
          <Route path="/3" element={<Step3 />} />
          <Route path="/4" element={<Step4 />} />
          <Route path="/5" element={<Step5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
