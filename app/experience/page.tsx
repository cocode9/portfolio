import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FiMapPin, FiAward, FiBriefcase, FiBook } from "react-icons/fi";

export default function ExperiencePage() {
  const data = [
    {
      title: "Jump in Development's Sea",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiAward className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-4 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Designer
            </h3>

            {/* Solana Radar Hackathon */}
            <div className="space-y-2">
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 sm:mt-0" />
                <a href="#" rel="noopener noreferrer" className="group min-w-0">
                  <h4 className="text-white font-medium hover:text-blue-400 transition-colors duration-200 inline-flex items-start sm:items-center gap-1 text-sm sm:text-base leading-tight">
                    <span className="break-words">Beautiful Year - 2026</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5 sm:mt-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h4>
                </a>
              </div>
              <div className="pl-3 sm:pl-5">
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  I create designer experiences that are intuitive, visually
                  striking, and user-focused. Every detail is crafted to save
                  time, enhance usability, and deliver memorable, seamless
                  interactions. Your project will benefit from thoughtful design
                  that works{" "}
                  <span className="text-blue-400 font-medium">beautifully</span>{" "}
                  and{" "}
                  <span className="text-blue-400 font-medium">efficiently</span>
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Beauty
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Delicacy
                  </span>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full whitespace-nowrap">
                    Responsive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Fullstack Developer
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
      title: "March 2022 - March 2024",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              Blockchain Developer
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                I have extensive, hands-on experience building production-grade
                Web3 systems across NFT marketplaces, crypto payment platforms,
                and multi-chain decentralized applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Designed, implemented, and audited Solidity and Rust smart
                    contracts
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Led development of a multi-chain NFT marketplace with fiat
                    and crypto payments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Built cross-chain transaction flows and wallet integrations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Designed microservice architectures with API gateways for
                    Web3 platforms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Served as Project Manager / Tech Lead for Web3 teams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Present",
      content: (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-shrink-0 pt-1">
            <FiBook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
          </div>
          <div className="space-y-2 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">
              AI / Machine Learning Engineer
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              AI Engineer with proven experience delivering production-grade
              machine learning systems, specializing in computer vision and
              medical image analysis. Strong background in model development,
              MLOps, and cloud deployment, with a track record of translating
              research into reliable, real-world AI products.
            </p>
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
