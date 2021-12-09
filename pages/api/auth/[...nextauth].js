import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_ID,
  //     clientSecret: process.env.GOOGLE_SECRET,
  //   }),
  //
  // pages: {
  //   signIn: "/login",
  // },
  // callbacks: {},

  // database: process.env.DATABASE_URL,
});
