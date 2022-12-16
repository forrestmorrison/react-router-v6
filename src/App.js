import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home";
import { BookRoutes } from './BookRoutes';
import { NotFound } from "./pages/NotFound";
import './styles.css';

function App() {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
