import axios from "axios";
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: add API_URL, NEXTAUTH_SECRET, NEXTAUTH_URL to .env
const API_URL = process.env.API_URL; 
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@test.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await axios
          .post(API_URL + "/auth/login", {
            email,
            password,
          })
          .then((res) => res.data)
          .catch((err) => {
            console.error(err);
            throw new Error("Invalid credentials");
          });
        if (user) return { ...user, id: user._id };
        else throw new Error("Invalid credentials");
      },
    }),
  ],
};
export default nextAuth(authOptions);
