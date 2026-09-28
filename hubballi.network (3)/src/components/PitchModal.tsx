import { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface PitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'story' | 'creator';
}

export default function PitchModal({ isOpen, onClose, initialType = 'story' }: PitchModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'People',
    location: 'Hubballi',
    topic: '',
    synopsis: '',
    links: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.synopsis) return;
    
    // Simulate real submission handling
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'People',
      location: 'Hubballi',
      topic: '',
      synopsis: '',
      links: ''
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pitch-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-xl border border-neutral-200 shadow-2xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-950 transition-colors focus:outline-hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-[#FF4D00] flex items-center justify-center mx-auto rounded-full">
              <CheckCircle2 className="w-8 h-8 text-[#FF4D00]" />
            </div>
            <h3 className="font-gotham text-2xl text-neutral-950 tracking-tight">
              Pitch Received by the Editorial Desk
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Our editorial team reviews every North Karnataka story lead. We will reach out via email or WhatsApp within 48 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5 text-[#FF4D00]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-extrabold">Open Newsroom & Creator Lab</span>
              </div>
              <h2 id="pitch-modal-title" className="font-gotham text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                {initialType === 'story' ? 'Pitch a North Karnataka Story' : 'Join the Creator Network'}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Know an unsung founder, historic artisan, youth initiative, or regional business shaping Hubballi-Dharwad? Tell us.
              </p>
            </div>

            {/* Pitch Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Joshi"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@example.com"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors bg-white"
                  >
                    <option value="People">People</option>
                    <option value="Places">Places</option>
                    <option value="Ideas">Ideas</option>
                    <option value="Business">Business</option>
                    <option value="Tech">Tech</option>
                    <option value="Sustainability">Sustainability</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    District / Town
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors bg-white"
                  >
                    <option value="Hubballi">Hubballi</option>
                    <option value="Dharwad">Dharwad</option>
                    <option value="Belagavi">Belagavi</option>
                    <option value="Haveri">Haveri</option>
                    <option value="Gadag">Gadag</option>
                    <option value="Vijayapura">Vijayapura</option>
                    <option value="Bagalkote">Bagalkote</option>
                    <option value="Other North Karnataka">Other NK District</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Story Headline or Topic *
                </label>
                <input
                  type="text"
                  required
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="e.g. How a grassroots robotics lab in BVB is solving cotton harvesting"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Synopsis / Why This Matters *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.synopsis}
                  onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
                  placeholder="Describe the people, what they have built, and why North Karnataka should hear this story..."
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Supporting Links / Social Handles (Optional)
                </label>
                <input
                  type="text"
                  value={formData.links}
                  onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                  placeholder="Instagram, YouTube link, or website"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Protected under Hubballi.Network editorial guidelines.
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-[#FF4D00] hover:bg-neutral-950 transition-colors"
                >
                  <span>Submit Pitch</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
