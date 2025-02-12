'use client';
import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl mb-8 text-gray-900 dark:text-white">
        Contact Me
      </h1>

      <div className="mx-auto bg-header-light dark:bg-header-dark rounded-lg p-8 shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-900 dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-900 dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-900 dark:text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-background-light dark:bg-background-dark text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl  mb-4 text-gray-900 dark:text-white">
            Other Ways to Connect
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/saatvik333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/saatvik333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com/saatvik333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
