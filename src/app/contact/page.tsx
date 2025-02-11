export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Contact Me
      </h1>

      <div className="max-w-2xl mx-auto bg-header-light dark:bg-header-dark rounded-lg p-8 shadow-lg">
        <form className="space-y-6">
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
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Other Ways to Connect
          </h2>
          <div className="space-y-3">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              <span className="mr-2">📧</span> your.email@example.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              <span className="mr-2">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
