export default function Footer() {
    return (
      <footer className="w-full p-4 mt-8 bg-background dark:bg-background text-gray-900 dark:text-white text-center transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Saatvik Sharma. All rights reserved.</p>
        </div>
      </footer>
    );
  }
