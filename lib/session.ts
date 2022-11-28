export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "session.token",
  secure: process.env.NODE_ENV === "production",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}
