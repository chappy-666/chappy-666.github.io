import { FaXTwitter, FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] shadow-[0_-2px_6px_rgba(0,0,0,0.1)] pt-6 pb-12 w-full text-sm text-center">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://twitter.com/chappy_job"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors"
        >
          <FaXTwitter className="text-xl" /> X ( Twitter )
        </a>
        <a
          href="https://github.com/chappy-666"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} chappy. All rights reserved.</div>
    </footer>
  );
}
