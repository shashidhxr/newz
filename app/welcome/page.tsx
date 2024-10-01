"use client"; // Make sure to include this at the top for client-side rendering

import { useRouter } from "next/navigation"; // Updated import for App Router

export default function Welcome() {
    const router = useRouter(); // Corrected hook for App Router

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-300 to-yellow-100 flex flex-col items-center justify-center">
            <div className="max-w-6xl">
                <div className="text-gray-700 text-4xl font-bold mb-6 mx-6">Welcome to Newz!</div>
                <div className="text-gray-600 text-lg mb-12 mx-6">
                    The Hottest news from all around the world on your coffee table.
                </div>

                {/* Translucent and blurry tiles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mx-6 h-64">
                    {/* Plan 1 */}
                    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-lg text-center text-gray-700 shadow-lg flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                        <p className="text-lg">Get the latest news daily. Free plan for all users.</p>
                    </div>

                    {/* Plan 2 */}
                    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-lg text-center text-gray-700 shadow-lg flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                        <p className="text-lg">Access exclusive content and premium features.</p>
                    </div>

                    {/* Plan 3 */}
                    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-lg text-center text-gray-700 shadow-lg flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                        <p className="text-lg">Get personalized news updates and ad-free experience.</p>
                    </div>
                </div>

                {/* Button to navigate back to homepage */}
                <div className="flex justify-center items-center">
                    <button onClick={() => router.push('/')} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-10 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out">
                        Go to Newz without subscribing
                    </button>
                </div>
            </div>
        </div>
    );
}
