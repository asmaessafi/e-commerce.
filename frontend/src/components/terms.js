import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Marketplace. These terms and conditions outline the rules and regulations
                for the use of our Platform. By accessing this website, we assume you accept these
                terms and conditions in full. Do not continue to use Marketplace if you do not
                accept all of the terms and conditions stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                Other than the content you own, under these Terms, Marketplace and/or its licensors
                own all the intellectual property rights and materials contained in this Platform.
                You are granted limited license only for purposes of viewing the material contained
                on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Account</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you create an account on the Platform, you are responsible for maintaining the
                  security of your account and you are fully responsible for all activities that
                  occur under the account.
                </p>
                <p>
                  You must immediately notify us of any unauthorized uses of your account or any
                  other breaches of security. We will not be liable for any acts or omissions by
                  you, including any damages of any kind incurred as a result of such acts or
                  omissions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Marketplace Usage</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our marketplace provides a platform for vendors to sell their products to
                  customers. We are not responsible for the quality, safety, or legality of the
                  items sold.
                </p>
                <p>
                  As a buyer, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate payment information</li>
                  <li>Pay for items purchased</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Use the platform in accordance with applicable laws</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vendor Responsibilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  As a vendor, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information about your products</li>
                  <li>Fulfill orders in a timely manner</li>
                  <li>Maintain reasonable inventory levels</li>
                  <li>Respond to customer inquiries promptly</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You may not access or use the Site for any purpose other than that for which we
                  make the site and services available. The Site may not be used in connection
                  with any commercial endeavors except those that are specifically endorsed or
                  approved by us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account and bar access to the Platform
                immediately, without prior notice or liability, under our sole discretion, for any
                reason whatsoever and without limitation, including but not limited to a breach of
                the Terms.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}