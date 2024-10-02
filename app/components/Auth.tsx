"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/config/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";


export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

  
try {
  if (type === "signup") {
    // Handle sign-up
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);

    router.push("/welcome"); // Redirect after sign-up
  } else {
    // Handle sign-in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);

    router.push("/news"); // Redirect after sign-in
  }
} catch (error) {
  if (error instanceof FirebaseError) {
    setError(error.message); // Handle Firebase errors
  } else {
    setError("An unexpected error occurred.");
  }
}

  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google sign-in success:", user);
      // Redirect after Google sign-in
      router.push("/news");
    } catch (error) {
      console.error("Error with Google sign-in:", error);
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-slate-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-1">
          {type === "signup" ? "Join Newz!" : "Login to Newz!"}
        </h2>

        {type === "signup" ? (
          <p className="text-center text-gray-500 mb-4">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        ) : (
          <p className="text-center text-gray-500 mb-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        )}

        

        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Enter your name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={type === "signup"}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Enter your email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Enter your password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between text-slate-500 text-sm mb-4">
            <div className="hover:text-blue-500">Remember me</div>
            <div className="hover:text-blue-500">Forgot password?</div>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-36 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>

        <div className="flex justify-between mt-3">
            <div className="flex justify-center mr-1">
            <button
                onClick={handleGoogleSignIn}
                className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-500 transition-all duration-300">
                Signin with Google
            </button>
            </div>
            <div className="flex justify-center ml-1">
            <button
                onClick={handleGoogleSignIn}
                className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
                Signin with Github
            </button>
            </div>
        </div>

      </div>
    </div>
  );
}
