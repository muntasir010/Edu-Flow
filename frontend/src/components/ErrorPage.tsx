import React from 'react';
import { Button } from '@/components/ui/button'; 
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4">
      <h1 className="text-9xl font-extrabold text-red-500 tracking-widest animate-pulse">
        404
      </h1>
      <div className="bg-gray-800 px-4 text-sm rounded-md py-2 rotate-12 absolute border border-red-600 shadow-lg">
        Page Not Found
      </div>
      <p className="mt-8 text-lg md:text-xl text-center max-w-md">
        Oops! The page you're looking for doesn't exist or an unexpected error occurred.
        It might have been moved or deleted.
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="/">
          <Button
            variant="default" // Shadcn's default button variant
            className="px-6 py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Home
          </Button>
        </Link>
        <Button
          variant="outline" // Shadcn's outline button variant
          className="px-6 py-3 text-lg font-semibold text-white border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
      <div className="mt-12 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} EduFlow. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ErrorPage;