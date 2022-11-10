import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    Providers({
      clientId: process.env.NEXT_PUBLIC_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});
