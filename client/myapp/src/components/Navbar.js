//  import { Link } from 'react-router-dom';
// function Navbar() {
//     return (
//         <nav className="bg-gray-800 text-white p-4 flex justify-between">
//             <Link to="/" className="font-bold">Portfolio</Link>
//             <div><Link to="/" className="mx-2">Home</Link>
//                 <Link to="/Projects" className="mx-2">Projects</Link>
//             </div>
//             </nav>
//     );
// }
// export default Navbar;

import { Link } from 'react-router-dom';
function Navbar() {
 return (
//  <nav className="bg-gray-800 text-white p-4 flex justify-between">
//  <Link to="/" className="font-bold">Portfolio</Link>
//  <div>
//  <Link to="/" className="mx-2">Home</Link>
//  <Link to="/Project" className="mx-2">Projects</Link>
//  <Link to="/Content" className="mx-2">Content</Link>
//  </div>
//  </nav>
 <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MyPortfolio
          </div>
          <nav className="space-x-6 hidden md:flex">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/Project" className="text-gray-700 hover:text-indigo-600">Project</a>
            <a href="/Content" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>
 );
}
export default Navbar;