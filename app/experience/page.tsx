import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "May 2024 - Dec 2025",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Fullstack Engineer | Expedition
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed"></p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span className="leading-relaxed">
                  Designed and built scalable web applications using
                  React/Next.js, Node.js, and REST/GraphQL APIs, owning features
                  end-to-end from frontend to backend.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span className="leading-relaxed">
                  Led architecture decisions, optimized performance, reviewed
                  code, and collaborated closely with product and design to
                  deliver reliable, user-focused solutions.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    {
      title: "March 2023 - March 2024",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              AI Engineer | neoAI Company | Remote
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                AI Engineer with proven experience delivering production-grade
                machine learning systems, specializing in computer vision and
                medical image analysis. Strong background in model development,
                MLOps, and cloud deployment, with a track record of translating
                research into reliable, real-world AI products.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Feb 2020 - Feb 2023",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Fullstack Developer | First Digital Trust Company | Remote
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                Full-stack development role focusing on building scalable web
                applications and maintaining cloud infrastructure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Developed backend services using Golang and Node.js
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Built responsive frontends with Next.js and React
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Managed AWS EC2 and Google Cloud infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Implemented CI/CD pipelines with GitHub Actions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Jump in Development's Sea",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-4 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Frontend Developer | Turtobook Company
            </h3>

            {/* Solana Radar Hackathon */}
            <div className="space-y-2">
              <div className="pl-3 sm:pl-5">
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Led development of scalable frontend features using React and
                  JavaScript, improving{" "}
                  <span className="text-blue-400 font-medium">performance</span>{" "}
                  , code{" "}
                  <span className="text-blue-400 font-medium">quality</span>,
                  and collaboration across product and backend teams.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Teamwork
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Communication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Timeline data={data} />
    </div>
  );
}
