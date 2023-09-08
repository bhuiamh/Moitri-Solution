import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-5xl text-[#38aefc] font-bold mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page not found</p>
        <p className="text-gray-500 mb-6">
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <button className="bg-[#38aefc] hover:bg-[#1e72c0] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#38aefc] focus:ring-opacity-50">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
