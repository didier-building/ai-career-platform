
import { Mail, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-8 px-4 mt-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">AI Career Companion</h3>
          <p className="text-blue-100 text-sm mb-2">Empowering graduates to build confident careers</p>
          <a href="mailto:didier53053@gmail.com" className="inline-flex items-center gap-2 text-blue-100 hover:text-white text-sm">
            <Mail className="w-4 h-4" /> didier53053@gmail.com
          </a>
        </div>
        <div className="flex gap-4 justify-center">
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 text-white">
            <Linkedin className="w-5 h-5" />
          </span>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white">
            <Twitter className="w-5 h-5" />
          </span>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-600 text-white">
            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5"><path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.73a1.33 1.33 0 0 0 1.63 1.63l6.73-1.84a12.77 12.77 0 0 0 6.44 1.7h.03c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.47c-2.01 0-3.99-.53-5.72-1.54l-.41-.24-4.01 1.1 1.08-3.97-.26-.41a10.6 10.6 0 1 1 9.32 5.06zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.14.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;