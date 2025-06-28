'use client'
import { Disclosure } from '@headlessui/react'

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section id="hero"><section
  id="hero"
  className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
>
  <div className="text-center max-w-2xl bg-black bg-opacity-60 p-6 rounded-lg">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Find Healing with Dr. Serena Blake
    </h1>
    <h2 className="text-xl md:text-2xl mb-6">
      Therapy that helps you grow, heal, and thrive.
    </h2>
    <a
      href="#contact"
      className="bg-white text-gray-900 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100"
    >
      Book a Free Consult
    </a>
  </div>
</section>
</section>
      <section id="about"><section id="about" className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <img
      src="/dr-serena.jpg"
      alt="Dr. Serena Blake"
      className="w-full rounded-lg shadow-lg"
    />
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Meet Dr. Serena Blake
      </h2>
      <p className="text-gray-700 mb-4">
        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
      </p>
      <p className="text-gray-700 mb-4">
        She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
      </p>
      <p className="text-gray-700">
        Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
      </p>
    </div>
  </div>
</section>
</section>
      <section id="services"><section id="services" className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
      Services Offered
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {/* Anxiety */}
      <div className="text-center">
        <img
          src="/anxiety.jpg"
          alt="Anxiety Therapy"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Anxiety & Stress Management</h3>
        <p className="text-gray-600">
          Learn coping tools to manage anxiety, reduce overwhelm, and restore balance through evidence-based techniques and mindful support.
        </p>
      </div>

      {/* Relationship */}
      <div className="text-center">
        <img
          src="/relationship.jpg"
          alt="Relationship Counseling"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Relationship Counseling</h3>
        <p className="text-gray-600">
          Strengthen communication, repair trust, and foster deeper emotional connection with couples or individual relationship counseling.
        </p>
      </div>

      {/* Trauma */}
      <div className="text-center">
        <img
          src="/trauma.jpg"
          alt="Trauma Recovery"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Trauma Recovery</h3>
        <p className="text-gray-600">
          Heal from past experiences with a gentle, trauma-informed approach that supports your journey toward resilience and self-worth.
        </p>
      </div>
    </div>
  </div>
</section>
</section>
      <section id="faq"><section id="faq" className="py-16 px-4 bg-gray-50">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h2>

    <div className="space-y-4">
      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <Disclosure.Button className="flex justify-between w-full text-left font-medium text-gray-900">
              <span>Do you accept insurance?</span>
              <span>{open ? '−' : '+'}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 text-gray-600">
              No, but a superbill is provided for self-submission so clients can request reimbursement from their insurance provider.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <Disclosure.Button className="flex justify-between w-full text-left font-medium text-gray-900">
              <span>Are online sessions available?</span>
              <span>{open ? '−' : '+'}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 text-gray-600">
              Yes — all virtual sessions are held securely via Zoom.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <Disclosure.Button className="flex justify-between w-full text-left font-medium text-gray-900">
              <span>What is your cancellation policy?</span>
              <span>{open ? '−' : '+'}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 text-gray-600">
              Cancellations require 24-hour notice to avoid being charged for the session.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  </div>
</section>
</section>
      <section id="contact">Contact</section>
    </main>
  );
}
