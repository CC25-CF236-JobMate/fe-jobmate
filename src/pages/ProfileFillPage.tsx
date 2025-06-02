import React from 'react';
import AuthHeader from '../components/AuthHeader';
import ProfileFill from '../components/ProfileFill';

const ProfileFillPage: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col drop-shadow-sm">
            <AuthHeader />
            <main className="flex-grow flex flex-col">
            <ProfileFill />
            </main>
        </div>
    );
};

export default ProfileFillPage;
