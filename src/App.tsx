import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Car } from 'lucide-react';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import PublishCarPage from './pages/PublishCarPage';
import ManageListingsPage from './pages/ManageListingsPage';
import AuthPage from './pages/AuthPage';
import { useAuth } from './contexts/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car size={24} />
          <span className="text-xl font-bold">二手车交易平台</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-200">首页</Link>
          {user ? (
            <>
              <Link to="/publish" className="hover:text-blue-200">发布车辆</Link>
              <Link to="/manage" className="hover:text-blue-200">管理列表</Link>
              <button onClick={logout} className="hover:text-blue-200">登出</button>
            </>
          ) : (
            <Link to="/auth" className="hover:text-blue-200">登录/注册</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <main className="container mx-auto mt-8 px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/car/:id" element={<CarDetailPage />} />
              <Route path="/publish" element={<PublishCarPage />} />
              <Route path="/manage" element={<ManageListingsPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white mt-12 py-6">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 二手车交易平台. 保留所有权利。</p>
            </div>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;