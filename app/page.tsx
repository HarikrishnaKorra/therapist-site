"use client";

import { useState } from "react";

export default function HomePage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agreed: false,
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.time) newErrors.time = "Preferred time is required";
    if (!formData.agreed) newErrors.agreed = "Consent is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    alert("Form submitted!");
  };

  const faqs = [
    {
      q: "Do you offer virtual appointments?",
      a: "Yes, Dr. Blake offers virtual sessions via Zoom on Mon, Wed, and Fri from 1 PM to 5 PM.",
    },
    {
      q: "Are sessions confidential?",
      a: "Absolutely. Your privacy is a top priority and sessions are fully confidential.",
    },
    {
      q: "Do you accept insurance?",
      a: "Currently, Dr. Blake is a private-pay provider. A superbill can be provided upon request.",
    },
  ];

  return (
    <main className="text-gray-800">
      {/* Hero */}
      <section className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <h1 className="text-4xl md:text-6xl font-bold">Dr. Serena Blake, PsyD</h1>
        <p className="text-xl mt-4">Compassionate therapy for healing and growth</p>
        <a href="#contact" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white">Book a Free Consult</a>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-white max-w-4xl mx-auto" id="about">
        <h2 className="text-3xl font-bold mb-4">About Dr. Serena Blake</h2>
        <p className="text-lg leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto" id="services">
        <h2 className="text-3xl font-bold mb-8 text-center">Services & Specialties</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Anxiety & Stress Management", img: "/anxiety.jpg" },
            { title: "Relationship Counseling", img: "/relationship.jpg" },
            { title: "Trauma Recovery", img: "/trauma.jpg" },
          ].map((s, i) => (
            <div key={i} className="bg-white p-4 shadow rounded-xl text-center">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Tailored therapy approaches to help you manage, recover, and grow.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white max-w-3xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4 border-b">
            <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex justify-between py-3 text-lg font-medium">
              {faq.q}
              <span>{faqOpen === i ? "-" : "+"}</span>
            </button>
            {faqOpen === i && <p className="text-gray-600 pb-4">{faq.a}</p>}
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-gray-100 max-w-3xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "name", type: "text", placeholder: "Name" },
            { name: "phone", type: "text", placeholder: "Phone" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "time", type: "text", placeholder: "Preferred time to reach you" },
          ].map(({ name, type, placeholder }) => (
            <div key={name}>
              <input name={name} type={type} placeholder={placeholder} onChange={handleInput} value={formData[name]} className="w-full p-3 border rounded" />
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}
          <div>
            <textarea name="message" placeholder="What brings you here?" onChange={handleInput} value={formData.message} className="w-full p-3 border rounded" />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="agreed" onChange={handleInput} checked={formData.agreed} className="mr-2" />
            <label htmlFor="agreed">I agree to be contacted</label>
          </div>
          {errors.agreed && <p className="text-red-500 text-sm">{errors.agreed}</p>}
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
    </main>
  );
}
