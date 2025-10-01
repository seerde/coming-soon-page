import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { LaunchPage } from './pages/LaunchPage';

const baseName = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export const App = () => (
  <BrowserRouter basename={baseName}>
    <Routes>
      <Route path="/" element={<ComingSoonPage />} />
      <Route path="/launch" element={<LaunchPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
