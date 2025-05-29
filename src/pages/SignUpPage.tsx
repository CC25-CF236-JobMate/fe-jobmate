import React from 'react';
import AuthHeader from '../components/AuthHeader';
import AuthPatternWrapper from '../components/AuthPatternWrapper';
import SignUpForm from '../components/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col drop-shadow-sm">
      <AuthHeader />
      <main className="flex-grow flex flex-col">
        <AuthPatternWrapper>
          <SignUpForm />
        </AuthPatternWrapper>
      </main>
    </div>
  );
};

export default SignUpPage;
