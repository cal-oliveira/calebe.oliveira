import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-20 w-full flex flex-col items-center justify-center max-w-[1200px] mx-auto px-6 mb-5">
      <div className="flex justify-between items-center w-full">
        <div className="text-gray-600">
          <p>Calebe Oliveira - 2025</p>
        </div>
        <div>
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/cal-oliveira"
              target="_blank"
              className="p-2 text-[#6C7A89] hover:text-[#F5F5F5] hover:bg-[#001F3F]/50 rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/calebe-b-oliveira/"
              target="_blank"
              className="p-2 text-[#6C7A89] hover:text-[#F5F5F5] hover:bg-[#001F3F]/50 rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:calebe81899026@gmail.com"
              className="p-2 text-[#6C7A89] hover:text-[#F5F5F5] hover:bg-[#001F3F]/50 rounded-full transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/calebe-b-oliveira/"
            target="_blank"
          >
            <span className="font-bold">Calebe Oliveira</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
