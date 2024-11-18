import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const LogoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};