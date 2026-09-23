export interface Venue {
  name: string;
  type: string;
  time: string;
  address: string;
  city: string;
  notes?: string;
  googleMapsUrl: string;
  wazeUrl: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: 'rings' | 'cocktail' | 'dinner' | 'party' | 'car';
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface BankDetails {
  bank: string;
  accountType: string;
  holder: string;
  cbu: string;
  alias: string;
  message: string;
}

export interface HotelRecommendation {
  name: string;
  distance: string;
  address: string;
  phone: string;
  discountCode?: string;
  bookingUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TableAssignment {
  tableNumber: number;
  tableName: string;
  guests: string[];
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  funFact: string;
}

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    initials: string;
    hashtag: string;
  };
  event: {
    dateIso: string;
    displayDate: string;
    dayOfWeek: string;
    city: string;
    calendarTitle: string;
    calendarDescription: string;
  };
  venues: {
    ceremony: Venue;
    reception: Venue;
  };
  timeline: TimelineItem[];
  dressCode: {
    category: string;
    description: string;
    shoeAdvice: string;
    reservedNote: string;
    swatches: ColorSwatch[];
  };
  gifts: BankDetails;
  coordinator: {
    name: string;
    role: string;
    phone: string;
    whatsAppUrl: string;
  };
  hotels: HotelRecommendation[];
  faqs: FAQItem[];
  wifi: {
    ssid: string;
    password: string;
  };
  seatingChart: TableAssignment[];
  trivia: TriviaQuestion[];
  mode: 'invitation' | 'live' | 'post_wedding';
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: 'Nelson Montenegro',
    bride: 'Mayra Palomino',
    initials: 'N & M',
    hashtag: '#NelsonYMayra2026',
  },
  event: {
    dateIso: '2026-11-21T17:00:00-03:00',
    displayDate: 'Sábado 21 de Noviembre de 2026',
    dayOfWeek: 'SÁBADO',
    city: 'Buenos Aires, Argentina',
    calendarTitle: 'Boda Nelson Montenegro y Mayra Palomino',
    calendarDescription: '¡Acompañanos a celebrar nuestra boda! Ceremonia en Basílica y Fiesta en Estancia Bella Vista.',
  },
  venues: {
    ceremony: {
      type: 'Ceremonia Religiosa',
      name: 'Basílica Nuestra Señora de la Merced',
      time: '17:00 HS (Puntual)',
      address: 'Reconquista 207',
      city: 'CABA',
      notes: 'Estacionamiento sugerido a 100m sobre calle Reconquista.',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Basilica+Nuestra+Senora+de+la+Merced+CABA',
      wazeUrl: 'https://waze.com/ul?q=Basilica+Nuestra+Senora+de+la+Merced+CABA&navigate=yes',
    },
    reception: {
      type: 'Recepción & Fiesta',
      name: 'Estancia Bella Vista',
      time: '18:45 HS',
      address: 'Ruta 8 Km 54.5',
      city: 'Pilar, Provincia de Buenos Aires',
      notes: 'Estacionamiento privado con seguridad dentro del predio.',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Estancia+Bella+Vista+Pilar',
      wazeUrl: 'https://waze.com/ul?q=Estancia+Bella+Vista+Pilar&navigate=yes',
    },
  },
  timeline: [
    {
      time: '17:00',
      title: 'Ceremonia Religiosa',
      description: 'Llegada y bendición de argollas en la Basílica.',
      icon: 'rings',
    },
    {
      time: '18:45',
      title: 'Cóctel de Bienvenida',
      description: 'Recepción al aire libre en los jardines con música acústica y appetizers.',
      icon: 'cocktail',
    },
    {
      time: '20:30',
      title: 'Ingreso al Salón & Cena',
      description: 'Entrada de los novios y cena principal de tres pasos.',
      icon: 'dinner',
    },
    {
      time: '22:45',
      title: 'Apertura de Pista & Fiesta',
      description: 'Brindis, mesa dulce, barra de cócteles y baile hasta el amanecer.',
      icon: 'party',
    },
  ],
  dressCode: {
    category: 'Elegante / Formal',
    description: 'Queremos que luzcas impecable y disfrutes cada momento con comodidad.',
    shoeAdvice: 'Tendremos momentos al aire libre sobre césped; sugerimos calzado con taco ancho o cómodo para caminar sin inconvenientes.',
    reservedNote: 'Agradecemos con cariño reservar los tonos blancos, marfil y beige exclusivamente para la novia.',
    swatches: [
      { name: 'Champagne Cálido', hex: '#C5A880' },
      { name: 'Verde Salvia', hex: '#8A9A86' },
      { name: 'Terracota Tostado', hex: '#C99B8A' },
      { name: 'Azul Noche', hex: '#1E293B' },
      { name: 'Gris Carbón', hex: '#44403C' },
    ],
  },
  gifts: {
    bank: 'Banco Santander',
    accountType: 'Caja de Ahorro en Pesos',
    holder: 'Nelson Montenegro & Mayra Palomino',
    cbu: '0720123988000035894125',
    alias: 'BODA.NELSON.MAYRA',
    message: 'El mejor regalo es compartir este momento juntos. Pero si querés hacernos un presente y ayudarnos a cumplir nuestra soñada luna de miel, podés colaborar mediante transferencia:',
  },
  coordinator: {
    name: 'Valeria Gómez',
    role: 'Wedding Planner & Coordinación',
    phone: '+54 9 11 9876-5432',
    whatsAppUrl: 'https://wa.me/5491198765432?text=Hola%20Valeria,%20tengo%20una%20consulta%20sobre%20la%20boda%20de%20Nelson%20y%20Mayra',
  },
  hotels: [
    {
      name: 'Sheraton Pilar Hotel & Convention Center',
      distance: 'A 8 minutos del salón',
      address: 'Panamericana Km 49.5, Pilar',
      phone: '+54 230 438-5000',
      discountCode: 'BODANELSONMAYRA',
      bookingUrl: 'https://www.marriott.com',
    },
    {
      name: 'Hilton Pilar Golf Club',
      distance: 'A 15 minutos del salón',
      address: 'Ruta 8 Km 60.5, Pilar',
      phone: '+54 230 453-8800',
      discountCode: 'BODA-NM2026',
      bookingUrl: 'https://www.hilton.com',
    },
  ],
  faqs: [
    {
      question: '¿Hasta cuándo puedo confirmar mi asistencia?',
      answer: 'Te agradecemos confirmar antes del 1 de Noviembre de 2026 a través de esta misma página en la sección RSVP.',
    },
    {
      question: '¿Hay estacionamiento en el salón?',
      answer: 'Sí, la Estancia Bella Vista cuenta con amplio estacionamiento privado y personal de seguridad durante todo el evento.',
    },
    {
      question: '¿Puedo asistir con acompañante o niños?',
      answer: 'Las invitaciones son nominales y especifican los pases asignados a cada grupo familiar. Al ingresar tu nombre en el formulario RSVP verás tus pases disponibles.',
    },
    {
      question: 'Tengo una dieta especial o alergia, ¿cómo les aviso?',
      answer: 'En el paso 2 del formulario RSVP podés marcar si necesitás menú celíaco (sin TACC), vegetariano, vegano, infantil o detallar cualquier alergia.',
    },
  ],
  wifi: {
    ssid: 'Estancia_BellaVista_Eventos',
    password: 'AmorSinFronteras2026',
  },
  seatingChart: [
    {
      tableNumber: 1,
      tableName: 'Mesa de Honor - Novios y Familia Directa',
      guests: ['Nelson Montenegro', 'Mayra Palomino', 'Carlos Montenegro', 'Rosa Sánchez', 'Alberto Palomino', 'Silvia Rossi'],
    },
    {
      tableNumber: 2,
      tableName: 'Mesa París - Amigos de la Infancia',
      guests: ['Lucas González', 'Carolina Martínez', 'Facundo Díaz', 'Martina López', 'Sebastián Romero', 'Camila Benítez'],
    },
    {
      tableNumber: 3,
      tableName: 'Mesa Roma - Familia Montenegro',
      guests: ['Jorge Montenegro', 'María Laura Pérez', 'Gonzalo Montenegro', 'Agustina Vidal', 'Nicolás Montenegro'],
    },
    {
      tableNumber: 4,
      tableName: 'Mesa Florencia - Familia Palomino',
      guests: ['Eduardo Palomino', 'Cecilia Duarte', 'Valeria Palomino', 'Ignacio Herrera', 'Federico Palomino'],
    },
    {
      tableNumber: 5,
      tableName: 'Mesa Venecia - Colegas & Amigos de Trabajo',
      guests: ['Javier Silva', 'Mariana Castro', 'Esteban Morales', 'Daniela Ruiz', 'Ramiro Navarro', 'Lucía Torres'],
    },
  ],
  trivia: [
    {
      id: 1,
      question: '¿Dónde se conocieron Nelson y Mayra?',
      options: ['En un café en San Telmo', 'En un viaje a Bariloche', 'En un concierto de rock', 'A través de amigos comunes en la facultad'],
      correctIndex: 0,
      funFact: '¡Sí! Se cruzaron por casualidad pidiendo el mismo café con medialunas.',
    },
    {
      id: 2,
      question: '¿Quién dio el primer paso para la primera cita?',
      options: ['Nelson', 'Mayra', 'Fue totalmente simultáneo', 'Un amigo los emparejó'],
      correctIndex: 1,
      funFact: '¡Mayra le mandó el primer mensaje invitándolo al cine!',
    },
    {
      id: 3,
      question: '¿Cuál es el destino soñado de su luna de miel?',
      options: ['Playa del Carmen', 'Japón y el Sudeste Asiático', 'Italia y la Costa Amalfitana', 'Patagonia Austral'],
      correctIndex: 2,
      funFact: '¡Exacto! Recorrerán Roma, Florencia y la Costa Amalfitana en vespa.',
    },
    {
      id: 4,
      question: '¿Quién tarda más en prepararse para salir?',
      options: ['Nelson', 'Mayra', 'Tardan exactamente lo mismo', 'Depende del día'],
      correctIndex: 0,
      funFact: '¡Nelson! Se toma su tiempo sagrado para el peinado y el perfume.',
    },
  ],
  mode: 'invitation',
};
