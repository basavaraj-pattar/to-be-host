import { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [track, setTrack] = useState<'Creator' | 'Brand' | 'Student' | 'Community'>('Creator');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    handleOrOrg: '',
    district: 'Hubballi-Dharwad',
    note: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      handleOrOrg: '',
      district: 'Hubballi-Dharwad',
      note: ''
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white w-full max-w-xl border border-neutral-200 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-neutral-950 transition-colors focus:outline-hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-neutral-950 text-[#FF4D00] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-gotham text-2xl text-neutral-950 tracking-tight">
              Welcome to Hubballi.Network
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              We received your application for the <strong className="text-[#FF4D00]">{track}</strong> track. Our community director will contact you on WhatsApp or email with your onboarding pass and upcoming meetup calendar.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-neutral-950 hover:bg-[#FF4D00] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5 text-[#FF4D00]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-extrabold">Collective Membership</span>
              </div>
              <h2 id="join-modal-title" className="font-gotham text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                Join the Network
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Be part of the community shaping North Karnataka’s cultural and economic resurgence.
              </p>
            </div>

            {/* Track Selector Tabs */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Select Your Role / Track
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Creator', 'Brand', 'Student', 'Community'] as const).map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTrack(t)}
                    className={`py-2 text-xs font-bold transition-colors border ${
                      track === t
                        ? 'bg-[#FF4D00] text-white border-[#FF4D00]'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sahana Patil"
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
                    placeholder="sahana@example.com"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98450 12345"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    District / Base
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors bg-white"
                  >
                    <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                    <option value="Belagavi">Belagavi</option>
                    <option value="Vijayapura">Vijayapura</option>
                    <option value="Bagalkote">Bagalkote</option>
                    <option value="Haveri">Haveri</option>
                    <option value="Gadag">Gadag</option>
                    <option value="Ballari">Ballari</option>
                    <option value="Other North Karnataka">Other District</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  {track === 'Creator'
                    ? 'Instagram Handle / Portfolio Link'
                    : track === 'Brand'
                    ? 'Company / Brand Website'
                    : 'College / Organization / Profile'}
                </label>
                <input
                  type="text"
                  value={formData.handleOrOrg}
                  onChange={(e) => setFormData({ ...formData, handleOrOrg: e.target.value })}
                  placeholder="@yourhandle or website.com"
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  What is your vision for Hubballi-Dharwad & North Karnataka?
                </label>
                <textarea
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us what you want to create or support..."
                  className="w-full px-3 py-2 text-sm border border-neutral-300 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] outline-hidden transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  Free community membership.
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-extrabold text-white bg-[#FF4D00] hover:bg-neutral-950 transition-colors"
                >
                  <span>Join Movement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
