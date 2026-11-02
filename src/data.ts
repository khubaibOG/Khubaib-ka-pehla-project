import { ServiceItem, SignatureSuite, Artisan, Addon } from './types';

export const SERVICES_DATA: Record<'hair' | 'beard' | 'recovery', ServiceItem[]> = {
  hair: [
    {
      id: 'h1',
      name: 'Bespoke Scissor Cut',
      duration: '50 MIN',
      price: 95,
      category: 'hair',
      description: 'Architectural cranial mapping and shear sculpting tailored to bone structure, hair density, and lifestyle flow.',
      inclusions: ['Cranial Consultation', 'Purifying Scalp Cleansing', 'Blowout & Matte Finish']
    },
    {
      id: 'h2',
      name: 'Precision Fade & Contour',
      duration: '45 MIN',
      price: 85,
      category: 'hair',
      description: 'Micro-graduated skin taper executed with master Japanese clippers and foil zero-gap edge refinement.',
      inclusions: ['Zero Gap Razor Foil', 'Eucalyptus Cold Mist', 'Edge Alignment']
    },
    {
      id: 'h3',
      name: 'Scalp Detox & Thermal Wash',
      duration: '40 MIN',
      price: 75,
      category: 'hair',
      description: 'Exfoliating botanical clay infusion followed by high-pressure thermal ozone rinse to unblock dormant follicles.',
      inclusions: ['Volcanic Sea Clay Mask', 'Ozone Steam Dome', 'Rosemary Scalp Tonic']
    },
    {
      id: 'h4',
      name: 'Grey Blending Camouflage',
      duration: '35 MIN',
      price: 70,
      category: 'hair',
      description: 'Subtle semi-permanent pigment application that blends silver strands naturally without looking colored or dense.',
      inclusions: ['Custom Tonal Match', 'Dermis Barrier Prep', '5-Minute Rapid Washout']
    }
  ],
  beard: [
    {
      id: 'b1',
      name: 'Traditional Hot Towel Straight Razor Shave',
      duration: '45 MIN',
      price: 80,
      category: 'beard',
      description: 'Three-pass single-use Japanese Feather razor shave with steaming bergamot towels and badger-hair lather ceremony.',
      inclusions: ['3 Pre-Shave Essential Oils', 'Dual Hot Towels', 'Cold Alum Block Finish']
    },
    {
      id: 'b2',
      name: 'Beard Sculpting & Botanical Conditioning',
      duration: '40 MIN',
      price: 65,
      category: 'beard',
      description: 'Symmetrical jawline architecture, cheek taper, and warm ozone beard steam with cedarwood oil absorption.',
      inclusions: ['Cranial Lineup', 'Heated Beard Steam', 'Organic Balm Sealing']
    },
    {
      id: 'b3',
      name: 'Line-up & Precision Edge',
      duration: '25 MIN',
      price: 45,
      category: 'beard',
      description: 'Crisp perimeter line enhancement across hairline, sideburns, and neck with straight razor detailing.',
      inclusions: ['Razor Edge Definition', 'Alcohol-Free Witch Hazel', 'Moisture Barrier']
    }
  ],
  recovery: [
    {
      id: 'r1',
      name: 'Japanese Head Spa & Cranial Acupressure',
      duration: '50 MIN',
      price: 110,
      category: 'recovery',
      description: 'Centuries-old Japanese scalp therapy stimulating pressure points along the sagittal suture to alleviate tension and fatigue.',
      inclusions: ['10-Point Acupressure', 'Heated Waterfall Rinse', 'Botanical Serum Infusion']
    },
    {
      id: 'r2',
      name: 'Shoulder & Neck Pressure-Point Therapy',
      duration: '30 MIN',
      price: 65,
      category: 'recovery',
      description: 'Targeted deep-tissue ergonomics focusing on the trapezius and suboccipital muscles for desk-bound executives.',
      inclusions: ['Arnica & Mint Massage Wax', 'Heated Neck Bolster', 'Posture Reset']
    },
    {
      id: 'r3',
      name: 'Hot Stone Facial & Jade Roller Reset',
      duration: '35 MIN',
      price: 75,
      category: 'recovery',
      description: 'Basalt volcanic stones and cryo jade rolling to eliminate lymphatic facial puffiness and stimulate microcirculation.',
      inclusions: ['Warm Volcanic Basalt Stones', 'Cryo Jade Sculpting', 'Hyaluronic Acid Surge']
    }
  ]
};

export const SIGNATURE_SUITES: SignatureSuite[] = [
  {
    id: 's1',
    name: 'The Executive Ritual',
    tag: 'Flagship',
    duration: '90 MIN',
    price: 185,
    isFlagship: true,
    description: 'Our most celebrated full-spectrum appointment designed for board-level presence and restorative calm.',
    inclusions: [
      'Bespoke Scissor Architecture & Haircut',
      'Traditional Japanese Feather Straight Razor Shave',
      'Aromatic Eucalyptus Hot Towel Scalp Therapy',
      'Rare Japanese Hibiki Whisky or Cold Brew Pour'
    ]
  },
  {
    id: 's2',
    name: "The Groom's Delegation",
    tag: 'Bespoke Event',
    duration: '120 MIN',
    price: 260,
    description: 'Head-to-toe structural grooming for weddings, galas, and life milestones. Complete photographic readiness.',
    inclusions: [
      'Custom Precision Scissor or Zero Fade',
      'Sculpted Beard Architecture & Botanical Oil Seal',
      '20-Min Deep Tissue Scalp & Neck Release',
      'Charcoal Clarifying Facial & Cold Jade Roll'
    ]
  },
  {
    id: 's3',
    name: 'Quick Refresher',
    tag: 'Maintenance',
    duration: '45 MIN',
    price: 95,
    description: 'Rapid turnaround maintenance between major haircuts. Crisp silhouette and razor perimeter refinement.',
    inclusions: [
      'Taper / Fade Perimeter Resurfacing',
      'Beard Contouring & Cheek Line Razor Pass',
      'Hot Towel Refresh with Bergamot Mist',
      'Matte Paste Styling & Blowout'
    ]
  }
];

export const ARTISANS: Artisan[] = [
  {
    id: 'a1',
    name: 'Kenji Takahashi',
    chair: 'Chair 01',
    title: 'Creative Director & Master Scissorist',
    experience: '16 Years (Ginza & NYC)',
    signature: 'Bespoke Scissor Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a2',
    name: 'Julian Vance',
    chair: 'Chair 02',
    title: 'Lead Fade & Silhouette Specialist',
    experience: '12 Years (London Mayfair)',
    signature: 'Seamless Skin Tapers & Edge',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a3',
    name: 'Mateo Russo',
    chair: 'Chair 03',
    title: 'Master Barber & Straight Razor Craftsman',
    experience: '14 Years (Milan & Rome)',
    signature: 'Hot Towel Shave & Beard Art',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a4',
    name: 'Aria Chen',
    chair: 'Chair 04',
    title: 'Trichologist & Head Spa Specialist',
    experience: '10 Years (Kyoto Spa Academy)',
    signature: 'Pressure-Point & Scalp Detox',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  }
];

export const ADDONS: Addon[] = [
  {
    id: 'addon-headspa',
    name: 'Japanese Scalp Detox Mask',
    duration: '+15 MIN',
    price: 45
  },
  {
    id: 'addon-beardnourish',
    name: 'Cedarwood Beard Deep-Steam & Conditioning',
    duration: '+15 MIN',
    price: 35
  },
  {
    id: 'addon-camo',
    name: 'Subtle Grey Camouflage Beard & Temple Touch',
    duration: '+20 MIN',
    price: 55
  }
];

