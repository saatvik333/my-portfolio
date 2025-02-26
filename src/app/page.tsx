'use client';

import { motion } from 'framer-motion';
import ProfileImage from '@/components/ProfileImage';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">
              Hi, I&apos;m{' '}
              <span className="text-primary-light dark:text-primary-dark">
                Saatvik Sharma
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Software Developer
              <span className="block mt-2 text-lg opacity-80">
                <span className="text-primary-light dark:text-primary-dark">
                  {'{'}
                </span>
                <span className="mx-2">Linux enthusiast • Gamer • Artist</span>
                <span className="text-primary-light dark:text-primary-dark">
                  {'}'}
                </span>
              </span>
            </p>
          </motion.div>

          <ProfileImage />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
            I am a results-driven Software Developer with hands-on experience in
            building scalable applications and optimizing development workflows.
            Proficient in multiple programming languages, modern frameworks, and
            blockchain technologies, I specialize in designing secure and
            efficient solutions. My expertise spans software development,
            blockchain engineering, cryptography, and fully homomorphic
            encryption (FHE).
          </p>
          <br />
          <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
            My work includes developing blockchain-based applications,
            cryptographic protocols, and automation tools, contributing to
            projects that enhance security and decentralization. I have worked
            extensively with Go, Rust, JavaScript, and C++, leveraging
            frameworks like Node.js, Next.js, and Gin. Additionally, I have
            experience with DevOps automation, CI/CD pipelines, and cloud
            infrastructure. Passionate about research and innovation, I
            continuously explore new technologies and collaborate with teams to
            build impactful software solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark
                           text-white rounded-lg hover:opacity-90 transition-all duration-200
                           transform hover:scale-105 active:scale-95 shadow-md"
          >
            View Resume
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="space-y-2">
            {[
              {
                year: 'Feb 2023',
                text: 'Joined Airchains as a Blockchain Development Intern, working on decentralized solutions',
              },
              {
                year: 'Sep 2020',
                text: 'Graduated with B.Tech degree in Computer Science from IIIT Naya Raipur',
              },
              {
                year: 'Apr 2020',
                text: 'Completed Intermediate from Bansal Public School, Kota',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-lg text-primary-light dark:text-primary-dark font-medium min-w-[100px]">
                  {item.year}
                </span>
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            I L
            <span className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-light dark:text-primary-dark"
              >
                <path
                  fill="currentColor"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </span>
            ve
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Linux, Gaming, Music, Art, Cloud Technology
          </p>
        </motion.div>
      </div>
    </div>
  );
}
