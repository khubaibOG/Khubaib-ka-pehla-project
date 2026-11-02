import React, { useState } from 'react';
import { BookingState } from '../types';
import { ADDONS, ARTISANS } from '../data';
import { X, Info, CheckCheck, ArrowRight } from 'lucide-react';

interface BookingDrawerProps {
  booking: BookingState;
  onClose: () => void;
  setBooking: React.Dispatch<React.SetStateAction<BookingState>> | ((updater: (prev: BookingState) => BookingState) => void);
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  booking,
  onClose,
  setBooking
}) => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(booking.selectedAddons || []);
  const [date, setDate] = useState<string>(booking.selectedDate || 'Today (Nov 3)');
  const [time, setTime] = useState<string>(booking.selectedTime || '02:30 PM');
  const [barber, setBarber] = useState<string>(booking.selectedBarber || 'Kenji Takahashi');
  const [client, setClient] = useState({
    fullName: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const dates = [
    { label: 'Today', sub: 'Nov 3', value: 'Today (Nov 3)' },
    { label: 'Wed', sub: 'Nov 4', value: 'Wed (Nov 4)' },
    { label: 'Thu', sub: 'Nov 5', value: 'Thu (Nov 5)' },
    { label: 'Fri', sub: 'Nov 6', value: 'Fri (Nov 6)' }
  ];

  const timeslots = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:15 PM'];

  // Calculate dynamic total
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const item = ADDONS.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const grandTotal = (booking.selectedService?.price || 0) + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter(item => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleNext = () => {
    if (booking.step === 4) {
      setBooking(prev => ({
        ...prev,
        step: 5,
        selectedAddons: selectedAddonIds,
        selectedDate: date,
        selectedTime: time,
        selectedBarber: barber,
        clientInfo: client
      }));
      return;
    }
    setBooking(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const handleBack = () => {
    setBooking(prev => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  };

  if (!booking.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-[#07020E]/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 bottom-0 w-full sm:max-w-xl bg-[#160B24] border-l border-[#3B1D5C] shadow-2xl flex flex-col justify-between overflow-hidden z-10 transition-transform duration-500 text-white">
        
        {/* Header */}
        <div className="p-6 border-b border-[#3B1D5C] flex items-center justify-between bg-[#120722]">
          <div>
            <span className="font-mono text-[10px] text-pink font-semibold uppercase tracking-widest">// Private Reservation</span>
            <h3 className="font-serif text-2xl font-normal text-white">Reserve Your Chair</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-graphite hover:text-pink transition-colors rounded-full hover:bg-[#200F35]"
            aria-label="Close Booking Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Indicator */}
        {booking.step <= 4 && (
          <div className="px-6 py-3 bg-[#120722] border-b border-[#3B1D5C] flex items-center justify-between font-mono text-[11px]">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Date & Time' },
              { num: 3, label: 'Artisan' },
              { num: 4, label: 'Confirm' }
            ].map((s, idx) => (
              <React.Fragment key={s.num}>
                <div className={`step-indicator flex items-center space-x-1.5 ${
                  booking.step === s.num ? 'text-pink font-semibold' : booking.step > s.num ? 'text-white font-medium' : 'text-graphite/40'
                }`}>
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] ${
                    booking.step === s.num ? 'border-pink bg-pink/20' : 'border-[#3B1D5C]'
                  }`}>
                    {booking.step > s.num ? '✓' : s.num}
                  </span>
                  <span>{s.label}</span>
                </div>
                {idx < 3 && <div className="h-px w-6 bg-[#3B1D5C]" />}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* STEP 1: Service & Addons */}
          {booking.step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="font-mono text-xs uppercase text-graphite block mb-2 font-medium">Selected Service or Suite</label>
                <div className="border border-pink/40 rounded-xl p-4 bg-[#200F35] flex justify-between items-center">
                  <div>
                    <p className="font-serif text-xl font-normal text-white">{booking.selectedService.name}</p>
                    <div className="flex items-center space-x-3 text-xs font-mono text-graphite mt-1">
                      <span>{booking.selectedService.duration}</span>
                      <span>&bull;</span>
                      <span>{booking.selectedService.category || 'Curated Grooming'}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xl font-bold text-pink">${booking.selectedService.price}</span>
                </div>
              </div>

              {/* Bespoke Add-ons */}
              <div>
                <label className="font-mono text-xs uppercase text-graphite block mb-2 font-medium">Elevate Your Appointment (Add-ons)</label>
                <div className="space-y-3 font-mono text-xs">
                  {ADDONS.map(addon => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    return (
                      <label 
                        key={addon.id} 
                        className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-colors ${
                          isChecked ? 'border-pink bg-pink/15' : 'border-[#3B1D5C] bg-[#160B24] hover:border-pink/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            checked={isChecked} 
                            onChange={() => toggleAddon(addon.id)} 
                            className="w-4 h-4 accent-pink rounded"
                          />
                          <div>
                            <span className="block font-sans text-xs font-medium text-white">{addon.name}</span>
                            <span className="text-[10px] text-graphite">{addon.duration}</span>
                          </div>
                        </div>
                        <span className="text-pink font-semibold">+${addon.price}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-pink/10 border border-pink/30 text-xs text-graphite flex items-center space-x-3">
                <Info className="w-4 h-4 text-pink flex-shrink-0" />
                <span>All appointments include complimentary Kyoto cold brew or single malt Scotch in the acoustic lounge.</span>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time */}
          {booking.step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <label className="font-mono text-xs uppercase text-graphite block mb-2 font-medium">Select Preferred Date</label>
                <div className="grid grid-cols-4 gap-2 font-mono text-xs">
                  {dates.map(d => (
                    <button
                      key={d.value}
                      onClick={() => setDate(d.value)}
                      className={`p-3 text-center rounded-xl border transition-all ${
                        date === d.value ? 'border-pink bg-pink/20 text-pink font-bold' : 'border-[#3B1D5C] bg-[#160B24] hover:border-pink/50 text-white'
                      }`}
                    >
                      <span className="block text-[10px] uppercase tracking-wider text-graphite/70">{d.label}</span>
                      <span className="block text-sm font-semibold mt-0.5">{d.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase text-graphite font-medium">Available Chair Timeslots</label>
                  <span className="font-mono text-[10px] text-pink font-semibold uppercase">Live Sync</span>
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {timeslots.map(t => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2.5 px-3 text-center rounded-xl border transition-all ${
                        time === t ? 'border-pink bg-pink text-white font-bold shadow-lg shadow-pink/30' : 'border-[#3B1D5C] bg-[#160B24] hover:border-pink/50 text-graphite'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-xs text-graphite font-mono">
                Need a private after-hours appointment (after 9 PM)? Contact our concierge line directly.
              </p>
            </div>
          )}

          {/* STEP 3: Artisan */}
          {booking.step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <label className="font-mono text-xs uppercase text-graphite block font-medium">Select Master Artisan</label>
              <div className="space-y-3 font-mono text-xs">
                {ARTISANS.map(a => {
                  const isSelected = barber === a.name;
                  return (
                    <label 
                      key={a.id} 
                      className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all ${
                        isSelected ? 'border-pink bg-pink/20' : 'border-[#3B1D5C] bg-[#160B24] hover:border-pink/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input 
                          type="radio" 
                          name="barber_selection" 
                          checked={isSelected} 
                          onChange={() => setBarber(a.name)} 
                          className="w-4 h-4 accent-pink"
                        />
                        <div>
                          <span className="block font-sans text-xs font-semibold text-white">{a.name}</span>
                          <span className="text-[10px] text-pink-light">{a.title} &bull; {a.chair}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-graphite bg-[#200F35] px-2 py-0.5 rounded border border-[#3B1D5C]">{a.experience}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Details & Summary */}
          {booking.step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="font-serif text-xl font-normal text-white mb-1">Guest Information</h4>
                <p className="text-graphite text-xs">A confirmation SMS & calendar invite will be dispatched upon booking.</p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-graphite uppercase mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    value={client.fullName || client.name} 
                    onChange={e => setClient({ ...client, fullName: e.target.value, name: e.target.value })} 
                    placeholder="Mr. Alexander Sterling" 
                    className="w-full px-4 py-3 border border-[#3B1D5C] rounded-xl focus:border-pink focus:outline-none bg-[#200F35] font-sans text-sm text-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-graphite uppercase mb-1">Mobile Phone (SMS) *</label>
                    <input 
                      type="tel" 
                      value={client.phone} 
                      onChange={e => setClient({ ...client, phone: e.target.value })} 
                      placeholder="+1 (212) 555-0199" 
                      className="w-full px-4 py-3 border border-[#3B1D5C] rounded-xl focus:border-pink focus:outline-none bg-[#200F35] font-sans text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-graphite uppercase mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      value={client.email} 
                      onChange={e => setClient({ ...client, email: e.target.value })} 
                      placeholder="alexander@domain.com" 
                      className="w-full px-4 py-3 border border-[#3B1D5C] rounded-xl focus:border-pink focus:outline-none bg-[#200F35] font-sans text-sm text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-graphite uppercase mb-1">Bespoke Requests (Beverage preference, Quiet Chair)</label>
                  <textarea 
                    rows={2} 
                    value={client.notes} 
                    onChange={e => setClient({ ...client, notes: e.target.value })} 
                    placeholder="e.g. Quiet chair session preferred, neat Hibiki 17." 
                    className="w-full px-4 py-3 border border-[#3B1D5C] rounded-xl focus:border-pink focus:outline-none bg-[#200F35] font-sans text-sm text-white"
                  />
                </div>
              </div>

              {/* Review Card */}
              <div className="border border-pink/40 rounded-xl p-4 bg-[#200F35] text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-graphite">Service:</span>
                  <span className="font-bold text-white font-sans">{booking.selectedService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite">Artisan:</span>
                  <span className="font-bold text-pink">{barber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite">Date & Time:</span>
                  <span className="font-bold text-white">{date} at {time}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#3B1D5C] text-sm">
                  <span className="font-bold text-white">Total Investment:</span>
                  <span className="font-bold text-pink font-mono text-base">${grandTotal}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Success Confirmation Screen */}
          {booking.step === 5 && (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-pink/20 text-pink border border-pink flex items-center justify-center mx-auto shadow-lg shadow-pink/30">
                <CheckCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-ultra-wide text-pink font-semibold">Reservation Confirmed</span>
                <h4 className="font-serif text-3xl font-normal text-white">Your Chair Awaits</h4>
                <p className="text-graphite text-xs sm:text-sm max-w-sm mx-auto">
                  Reservation <span className="font-mono font-bold text-pink">#AC-8842</span> has been registered. Our concierge will welcome you upon arrival on Madison Ave.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#200F35] border border-[#3B1D5C] text-left max-w-xs mx-auto text-xs font-mono space-y-1.5">
                <div className="flex justify-between"><span className="text-graphite">Chair:</span><span className="text-white">{barber}</span></div>
                <div className="flex justify-between"><span className="text-graphite">Schedule:</span><span className="text-white">{date} at {time}</span></div>
                <div className="flex justify-between"><span className="text-graphite">Concierge Valet:</span><span className="text-pink">Madison & 65th St</span></div>
              </div>

              <button 
                onClick={onClose} 
                className="px-8 py-3 bg-pink text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-pink-dark transition-colors font-bold shadow-lg shadow-pink/30"
              >
                Return to Sanctuary
              </button>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        {booking.step <= 4 && (
          <div className="p-6 border-t border-[#3B1D5C] bg-[#120722] flex items-center justify-between">
            {booking.step > 1 ? (
              <button 
                onClick={handleBack} 
                className="px-4 py-2.5 rounded-xl border border-[#3B1D5C] text-graphite hover:text-white font-mono text-xs uppercase tracking-wider"
              >
                Back
              </button>
            ) : <div />}

            <div className="flex items-center space-x-4 ml-auto">
              <div className="text-right">
                <span className="block text-[10px] font-mono uppercase text-graphite">Estimated Investment</span>
                <span className="font-mono text-lg font-bold text-pink">${grandTotal}</span>
              </div>
              <button 
                onClick={handleNext} 
                className="px-6 py-3 rounded-full bg-pink hover:bg-pink-dark text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 shadow-lg shadow-pink/30 transition-all active:scale-95"
              >
                <span>
                  {booking.step === 1 && 'Choose Date & Time'}
                  {booking.step === 2 && 'Select Artisan'}
                  {booking.step === 3 && 'Contact Details'}
                  {booking.step === 4 && 'Confirm Reservation'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </aside>
    </div>
  );
};
