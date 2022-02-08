import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { Spinner } from 'react-bootstrap';
const Dashboard = lazy(() => import ('./Pages/Dashboard'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/dashboard/:panel' element={<Dashboard />} />
        </Routes>
        </Suspense>
    </BrowserRouter>
  );
};

export default App;