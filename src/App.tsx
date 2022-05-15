import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ValidateCountry from './components/Validate/ValidateCountry';
import Home from './pages/Home/home';
import NotFound from './pages/NotFound/not-found';

function App() {
  return (
    <>
      <Routes>
        <Route path="/countries-app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries/:alpha3code" element={<ValidateCountry />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
