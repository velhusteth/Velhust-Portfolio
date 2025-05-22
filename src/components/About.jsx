import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        I'm a Web3 researcher and developer with a strong focus on decentralized technologies, blockchain infrastructure, and smart contract development. I specialize in analyzing emerging trends in the Web3 space and building scalable, secure, and user-centric decentralized applications (dApps).
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        My work spans across various verticals in the Web3 ecosystem, including DeFi protocols, Layer 2 scaling solutions, NFT platforms, and decentralized autonomous organizations (DAOs). I'm passionate about exploring the intersection of technology and community.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        I began learning to code to better understand blockchain technologies and how they function at a technical level.
        </p>
      </motion.div>
    </div>
  );
}
