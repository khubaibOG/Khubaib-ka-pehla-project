import React, { useState } from 'react';
import { BookingState } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CraftExperience } from './components/CraftExperience';
import { Artisans } from './components/Artisans';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingDrawer } from './components/BookingDrawer';

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [booking, setBooking] = useState<BookingState>({
    isOpen: false,
    step: 1,
    selectedService: {
      name: 'The Executive Ritual',
      price: 185,
      duration: '90 MIN',
      category: 'Signature Experience'
    },
    selectedAddons: [],
    selectedDate: 'Today (Nov 3)',
    selectedTime: '02:30 PM',
    selectedBarber: 'Kenji Takahashi',
    clientInfo: {
      fullName: '',
      phone: '',
      email: '',
      notes: ''
    }
  });

  const handleOpenBooking = (prefill?: Partial<{ name: string; price: number; duration: string; category: string; barber: string; time: string }>) => {
    setBooking(prev => ({
      ...prev,
      isOpen: true,
      step: 1,
      selectedService: prefill?.name ? {
        name: prefill.name,
        price: prefill.price ?? 95,
        duration: prefill.duration ?? '60 MIN',
        category: prefill.category ?? 'Curated Grooming'
      } : prev.selectedService,
      selectedBarber: prefill?.barber ?? prev.selectedBarber,
      selectedTime: prefill?.time ?? prev.selectedTime
    }));
  };

  const handleSelectService = (service: { name: string; price: number; duration: string; category?: string }) => {
    handleOpenBooking(service);
  };

  const handleSelectBarber = (barberName: string) => {
    handleOpenBooking({ barber: barberName });
  };

  return (
    <div className="bg-[#0D0518] text-[#F5F3FF] font-sans antialiased selection:bg-pink selection:text-white noise-bg min-h-screen">
      {/* 1. Glassmorphic Navigation */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Curated Menu & Packages */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Standards of Craft & Experience */}
        <CraftExperience />

        {/* 5. Master Artisans Showcase */}
        <Artisans onSelectBarber={handleSelectBarber} />

        {/* 6. Madison Lounge Sanctuary & Map */}
        <LocationSection />
      </main>

      {/* 7. Structural Footer */}
      <Footer />

      {/* 8. Interactive Multi-Step Booking Drawer */}
      <BookingDrawer 
        booking={booking}
        onClose={() => setBooking(prev => ({ ...prev, isOpen: false }))}
        setBooking={setBooking}
      />
    </div>
  );
};

export default App;

