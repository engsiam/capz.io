"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
          </h1>
          <p className="text-gray-300 max-w-3xl mb-3 text-left">
            Effective Date: [Effective Date]
          </p>
          <p className="text-gray-300 max-w-3xl text-left">
            Welcome to CapZ. By accessing or using our platform and services,
            you agree to be bound by these Terms and Conditions, our Privacy
            Policy, and any other policies we may publish. If you do not agree
            with any part of these terms, you must not use our platform. These
            Terms apply to all visitors, users, and others who access or use the
            service.
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
              1. Definitions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>
                <strong>Platform:</strong> Refers to the CapZ website and
                associated services.
              </li>
              <li>
                <strong>User:</strong> Refers to anyone who accesses or uses the
                Platform, including Project Owners and Investors.
              </li>
              <li>
                <strong>Project Owner:</strong> Refers to an individual or
                entity submitting a project or business plan seeking funding
                through the Platform.
              </li>
              <li>
                <strong>Investor:</strong> Refers to an individual or entity
                using the Platform to discover and potentially invest in
                projects.
              </li>
              <li>
                <strong>Content:</strong> Refers to any data, text, information,
                graphics, profiles, audio, video, or other materials uploaded,
                shared, or appearing on the Platform.
              </li>
              <li>
                <strong>Funding Round:</strong> Refers to the process through
                which a Project Owner seeks and secures investment from
                Investors via connections made on the Platform.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              2. User Accounts
            </h2>
            <p>
              To access certain features of the Platform, you must register for
              an account. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete. You are
              responsible for safeguarding your password and for all activities
              that occur under your account. You agree to notify us immediately
              of any unauthorized use of your password or account. CapZ cannot
              and will not be liable for any loss or damage arising from your
              failure to comply with these obligations.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              3. Use of the Platform
            </h2>
            <p className="mb-4">
              You agree to use the Platform only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>
                Use the Platform in any way that violates any applicable
                national or international law or regulation.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use or
                enjoyment of the Platform.
              </li>
              <li>
                Use the Platform to transmit any unsolicited advertising or
                promotional material.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage,
                or disrupt any parts of the Platform or the server on which the
                Platform is stored.
              </li>
              <li>
                Upload or transmit viruses or any other type of malicious code.
              </li>
              <li>
                Use any robot, spider, or other automatic device, process, or
                means to access the Platform for any purpose.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              4. For Project Owners
            </h2>
            <p className="mb-4">
              If you are a Project Owner, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>
                You have the full legal right and authority to submit the
                project and seek funding.
              </li>
              <li>
                All information provided in your project submission is accurate,
                complete, and not misleading.
              </li>
              <li>
                Your project and its activities comply with all applicable laws
                and regulations.
              </li>
              <li>
                You understand that submitting a project does not guarantee
                funding.
              </li>
              <li>
                CapZ is not an underwriter, broker-dealer, or investment adviser
                and does not provide investment advice or guarantee the success
                of any funding round. CapZ facilitates connections.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              5. For Investors
            </h2>
            <p className="mb-4">
              If you are an Investor, you understand and acknowledge the
              significant risks associated with investing in early-stage
              companies and projects. You represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
              <li>
                You are solely responsible for conducting your own due diligence
                before making any investment decision.
              </li>
              <li>
                You have the financial capacity and sophistication to bear the
                risks of losing your entire investment.
              </li>
              <li>
                CapZ is not an investment adviser and does not recommend or
                endorse any projects on the Platform. CapZ does not provide
                investment advice.
              </li>
              <li>
                All investment decisions are made solely at your own risk.
              </li>
              <li>
                You meet any eligibility requirements for investors as may be
                required by applicable laws (e.g., accredited investor status).
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              6. The Funding Process
            </h2>
            <p>
              CapZ provides a platform for Project Owners and Investors to
              connect and explore potential funding opportunities. CapZ is not a
              party to any investment contract or agreement entered into between
              Project Owners and Investors. Any such agreements are solely
              between the parties involved, and CapZ disclaims all liability
              related to such agreements. CapZ does not handle or process
              investment funds directly; any transfer of funds occurs externally
              between the Project Owner and Investor.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              7. Fees and Payments
            </h2>
            <p>
              Details regarding any fees charged by CapZ for its services (e.g.,
              platform fees, success fees) will be clearly outlined separately,
              for example, in a fee schedule provided to registered users or in
              specific agreements related to funding. You agree to pay all
              applicable fees as agreed upon.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              8. Intellectual Property
            </h2>
            <p>
              The Platform and its original content, features, and functionality
              are and will remain the exclusive property of CapZ and its
              licensors. Our trademarks and trade dress may not be used in
              connection with any product or service without the prior written
              consent of CapZ. You retain ownership of the Content you submit to
              the Platform; however, you grant CapZ a worldwide, non-exclusive,
              royalty-free license to use, reproduce, distribute, and display
              such Content in connection with the operation and promotion of the
              Platform.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              9. Disclaimer of Warranties
            </h2>
            <p>
              Your use of the Platform is at your sole risk. The Platform is
              provided on an "AS IS" and "AS AVAILABLE" basis. CapZ makes no
              warranties, express or implied, regarding the Platform, including
              but not limited to, implied warranties of merchantability, fitness
              for a particular purpose, non-infringement, or course of
              performance. CapZ does not warrant that the Platform will be
              uninterrupted, secure, or error-free.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              10. Limitation of Liability
            </h2>
            <p>
              In no event shall CapZ, its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the Platform, any conduct or content of
              any third party on the Platform, any content obtained from the
              Platform, and the unauthorized access, use, or alteration of your
              transmissions or content, whether based on warranty, contract,
              tort (including negligence) or any other legal theory, whether or
              not we have been informed of the possibility of such damage.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              11. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless CapZ and its
              licensees and licensors, and their employees, contractors, agents,
              officers, and directors, from and against any and all claims,
              damages, obligations, losses, liabilities, costs, debt, or
              expenses (including but not limited to attorney's fees), resulting
              from or arising out of your use and access of the Platform, by you
              or any person using your account, or a breach of these Terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              12. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of [Jurisdiction for Governing Law], without regard to its
              conflict of law provisions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              13. Termination
            </h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. Upon termination, your
              right to use the Platform will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or change these terms at any time.
              Your continued use after such changes signifies your agreement to
              the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">
              14. Contact Us
            </h2>
            <p>
              By email:{" "}
              <a
                href="mailto:yourcontactemail@example.com"
                className="text-cyan-400 underline"
              >
                yourcontactemail@example.com
              </a>
            </p>
            <p>
              By visiting this page on our website:{" "}
              <a
                href="/entrepreneurs/submit"
                className="text-cyan-400 underline"
              >
                Contact Us
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
