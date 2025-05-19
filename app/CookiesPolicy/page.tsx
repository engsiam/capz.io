"use client";

import { motion } from "framer-motion";

export default function CookiePolicy() {
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
            Cookies Policy
          </h1>

          <p className="text-gray-300 max-w-3xl text-left">
            Welcome to the CapZ Cookies Policy for [Your Website Address]. This
            page explains what cookies are and how we use them on our platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-300 text-lg"
        >
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              1. What are Cookies?
            </h2>
            <p className="text-gray-300 max-w-3xl text-left">
              Cookies are small text files. They are placed on your computer or
              mobile device. This happens when you visit a website. Cookies are
              widely used to make websites work. They help them work more
              efficiently. They also provide information to the site owners.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              2. How We Use Cookies
            </h2>
            <p>
              We use cookies for several reasons. They help to ensure our
              platform functions correctly. They also help us understand how
              users interact with our services. This data helps us improve the
              platform and your experience. Some cookies help remember your
              preferences. Others help personalize content for you. They can
              also assist with our marketing efforts.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              3. Types of Cookies We Use
            </h2>
            <p className="mb-4">
              You agree to use the Platform only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the basic functions of the platform. They enable core
                features like user login and account management. The website
                cannot operate properly without these cookies.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> These
                cookies collect information about how visitors use the platform.
                This includes which pages are visited most often. They help us
                understand usage patterns. We use this data to analyze and
                improve the platform's performance. The information is typically
                aggregated and anonymous.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow the
                platform to remember choices you make. This includes remembering
                your username or language preferences. They provide enhanced,
                more personal features. Their purpose is to improve your
                experience on the site.
              </li>
              <li>
                <strong>Marketing and Targeting Cookies:</strong> These cookies
                track your online activity. They may be used to build a profile
                of your interests. They help display advertisements relevant to
                you. They may also be used by third parties for advertising
                purposes.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              4. Third-Party Cookies
            </h2>
            <p className="mb-4">
              You have the ability to manage your cookie preferences. Most web
              browsers automatically accept cookies by default. However, you can
              set your browser settings. You can choose to refuse cookies or
              alert you when a cookie is being sent. Please refer to your
              browser's help menu for instructions.
            </p>
            <p className="mb-4">
              Keep in mind that disabling cookies may affect the functionality
              of the platform. Some parts of the website may not work correctly.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              5. More Information
            </h2>
            <p className="mb-4">
              For more details about how we handle your personal data, please
              review our Privacy Policy: [Link to Privacy Policy].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              6. Contact Us
            </h2>
            <p className="text-gray-300">
              If you have any questions about this Cookies Policy, please
              contact us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>
                By email:{" "}
                <a
                  href="mailto:yourcontactemail@example.com"
                  className="text-cyan-400 underline"
                >
                  yourcontactemail@example.com
                </a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <a href="/contact-us" className="text-cyan-400 underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
