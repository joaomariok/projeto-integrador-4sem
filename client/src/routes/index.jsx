import React from 'react';

import { SignInRoutes } from './SignInRoutes';
import { OtherRoutes } from './OtherRoutes';
import { useAuth } from '../contexts/auth';

export function Routes() {
    const { signed } = useAuth();

    return signed ? <OtherRoutes /> : <SignInRoutes />;
};