import React from 'react';
import AuthHeader from '../components/AuthHeader';
import AuthPatternWrapper from '../components/AuthPatternWrapper';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col drop-shadow-sm">
      <AuthHeader />
      <main className="flex-grow flex flex-col">
        <AuthPatternWrapper>
          <LoginForm />
        </AuthPatternWrapper>
      </main>
    </div>
  );
};

export default LoginPage;
