import { useEffect } from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';

export default function Login({ onLogin }) {
    const providers = [{ id: 'credentials', name: 'Email and Password' }];
    useEffect(() => {
        document.title = 'Login - Mapping Finance';
    }, []);

    const signIn = async (provider, formData) => {
        const username = formData.get('email');
        const password = formData.get('password');

        if (username && 123) {
            onLogin && onLogin(username);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#181818',
            zIndex: 9999
        }}>
            <AppProvider>
                <SignInPage
                    signIn={signIn}
                    providers={providers}
                    slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
                    title="Login"
                />
            </AppProvider>
        </div>
    );
}