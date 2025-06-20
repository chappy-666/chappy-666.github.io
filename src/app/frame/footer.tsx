import { FaXTwitter, FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 dark:border-gray-700 pt-6 pb-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-black z-50">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://twitter.com/chappy_job"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaXTwitter className="text-xl" /> X ( Twitter )
        </a>
        <a
          href="https://github.com/chappy-666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} chappy. All rights reserved.</div>
    </footer>
  );
}
