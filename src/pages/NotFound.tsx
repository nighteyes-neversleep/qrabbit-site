import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">404 — Not Found</h1>
      <p className="mt-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-4 inline-block text-blue-600">Go home</Link>
    </div>
  );
}