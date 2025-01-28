// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const response = await fetch(`${process.env.NEXT_API_URL}/users`);
                const users = await response.json();

                const currentUser = users.find((user) => user.email === credentials.email && user.password === credentials.password);

                if (currentUser) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { password, ...userWithoutPass } = currentUser;

                    return userWithoutPass as User;
                }
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
};
