"use client";

import ButtonWithShadow from "@/app/components/button-with-shadow";
import { ScrollToProjects } from "@/functions/scrollToProjects";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fade-in animation-delay-200">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Calebe Oliveira
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-500 mb-10">
          Developer Front-End
        </p>
        <p className="max-w-[480px] text-center text-gray-600 mb-10">
          ADS em formação, especialista em tecnologias web modernas e
          desenvolvimento mobile com foco em aprendizado contínuo.
        </p>
      </div>

      <div>
        <ButtonWithShadow onClick={ScrollToProjects}>
          <span>&lt;&gt;</span> Ver Projetos
        </ButtonWithShadow>
      </div>
    </section>
  );
}
