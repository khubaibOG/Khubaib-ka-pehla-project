export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  inclusions: string[];
  category: 'hair' | 'beard' | 'recovery';
}

export interface SignatureSuite {
  id: string;
  name: string;
  tag: string;
  duration: string;
  price: number;
  description: string;
  inclusions: string[];
  isFlagship?: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  chair: string;
  title: string;
  experience: string;
  signature: string;
  imageUrl: string;
}

export interface Addon {
  id: string;
  name: string;
  duration: string;
  price: number;
}

export interface BookingState {
  isOpen: boolean;
  step: number; // 1: Addons, 2: Date & Time, 3: Barber, 4: Details, 5: Confirmed
  selectedService: {
    name: string;
    price: number;
    duration: string;
    category?: string;
  };
  selectedAddons: string[];
  selectedDate: string;
  selectedTime: string;
  selectedBarber: string;
  clientInfo: {
    fullName: string;
    phone: string;
    email: string;
    notes: string;
  };
}

