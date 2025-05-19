"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information on our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-300 text-lg"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our platform and hold certain information.
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
              Cookies are sent to your browser from a website and stored on your device.
              Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Use of Data</h2>
            <p>
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside ml-5">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Your Choices Regarding Cookies</h2>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@capz.com.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
