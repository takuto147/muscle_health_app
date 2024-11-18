import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();

export const RegisterUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};