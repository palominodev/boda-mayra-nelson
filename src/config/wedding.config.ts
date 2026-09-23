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

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    initials: string;
    hashtag: string;
  };
  event: {
    dateIso: string; // ISO 8601 string for countdown & calendar
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
    calendarDescription: '¡Acompañanos a celebrar nuestra boda! Ceremonia y Fiesta.',
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
  mode: 'invitation',
};
