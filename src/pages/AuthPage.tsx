import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">
        {isLogin ? '登录' : '注册'}
      </h1>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <p className="mt-4 text-center">
        {isLogin ? '还没有账号？' : '已有账号？'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:text-blue-700 ml-1"
        >
          {isLogin ? '注册' : '登录'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;