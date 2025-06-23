// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/index';
import Project from './Pages/project';
import Content from './Pages/content';
import Navbar from './components/Navbar';
function App() {
 return (
 <Router>
 <Navbar />
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Project" element={<Project />} />
 <Route path="/Content" element={<Content />} />
 </Routes>
 </Router>
 );
}
export default App;
