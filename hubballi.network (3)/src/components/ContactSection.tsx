import { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Brand / Business',
    industry: 'Tech',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Editorial Stance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-1 bg-[#FF4D00]" />
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF4D00]">
                  Get In Touch
                </span>
              </div>

              <h2 className="font-gotham text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-tight">
                Let’s build something that matters.
              </h2>

              <p className="mt-6 text-base text-neutral-600 leading-relaxed font-normal">
                Whether you are a brand looking to launch an authentic regional marketing campaign, a creator seeking to join our lab, or a business driving North Karnataka’s economic progress, our doors are open.
              </p>

              {/* Contact Direct Points */}
              <div className="mt-10 space-y-5 text-sm text-neutral-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-white border border-neutral-200 flex items-center justify-center text-[#FF4D00] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950 block">Hubballi HQ</span>
                    <span className="text-neutral-500">KLE Tech Innovation Park, Vidyanagar, Hubballi-Dharwad, Karnataka 580031</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-white border border-neutral-200 flex items-center justify-center text-[#FF4D00] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950 block">Direct Inquiries</span>
                    <a href="mailto:hello@hubballi.network" className="text-[#FF4D00] hover:underline font-medium">
                      hello@hubballi.network
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 bg-white border border-neutral-200 flex items-center justify-center text-[#FF4D00] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-neutral-950 block">Phone / WhatsApp</span>
                    <span className="text-neutral-500">+91 (0836) 238-9000 &middot; +91 94800 12345</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Regional Badge */}
            <div className="mt-12 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
              <span className="font-bold text-neutral-900">Coverage across 14 Districts:</span>
              <p className="mt-1">Dharwad, Belagavi, Bagalkote, Vijayapura, Gadag, Haveri, Uttara Kannada, Ballari, Koppal, Raichur, Kalaburagi, Yadgir, Bidar & Vijayanagara.</p>
            </div>
          </div>

          {/* Right Column: High Intent Lead Capture Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-neutral-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-neutral-950 text-[#FF4D00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-gotham text-2xl text-neutral-950 tracking-tight">
                  Message Dispatched
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-neutral-900">{formData.name}</strong>. A partner at Hubballi.Network will review your inquiry and connect with you within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        role: 'Brand / Business',
                        industry: 'Tech',
                        message: ''
                      });
                    }}
                    className="px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-gotham text-2xl text-neutral-950 tracking-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Tell us what you are working on and how we can collaborate.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Hegde"
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@company.in"
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Organization / Brand / Handle
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Deccan Technologies"
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Primary Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors bg-white"
                    >
                      <option value="Tech">Tech & Hardware</option>
                      <option value="Education">Education & Academia</option>
                      <option value="Healthcare">Healthcare & Diagnostics</option>
                      <option value="Sustainability">Sustainability & AgriTech</option>
                      <option value="Culture & Food">Culture, Food & Tourism</option>
                      <option value="Other">Other Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    How Can We Collaborate?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Brand Campaign', 'Creator Lab', 'Story Coverage', 'Event / Meetup'].map((role) => (
                      <button
                        type="button"
                        key={role}
                        onClick={() => setFormData({ ...formData, role })}
                        className={`p-2 text-xs font-bold text-center border transition-colors ${
                          formData.role === role
                            ? 'bg-[#FF4D00] text-white border-[#FF4D00]'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand goals, target audience, or storytelling objectives..."
                    className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-neutral-400 text-center sm:text-left">
                    We respond within 24 business hours. No spam, ever.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors focus:outline-hidden"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
