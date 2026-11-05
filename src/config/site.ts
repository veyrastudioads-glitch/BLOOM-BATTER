export const SITE_CONFIG = {
  name: 'BLOOM & BATTER',
  tagline: 'Baked with love. Styled with elegance.',
  heroHeadline: 'Sweet moments, beautifully made.',
  heroSubheadline: "Thoughtfully handcrafted cakes and treats for life's most special celebrations.",
  studioCredit: 'Independent website concept by Pixel by Geo',
  
  // Configurable contact details (placeholder format for demonstration)
  whatsapp: {
    // International format without + or dashes for wa.me URL
    number: '447000000000', 
    displayNumber: '+44 7000 000000',
    defaultMessage: "Hello Bloom & Batter! I'd love to enquire about ordering one of your handcrafted bakes.",
  },
  
  location: {
    display: 'Boutique Home Studio • Pre-order Only',
    availabilityNotice: 'Handcrafted in limited daily batches. 48-72h advance order recommended.',
  },

  social: {
    instagram: '@bloomandbatter.studio',
    instagramUrl: '#',
    pinterest: 'bloomandbatter',
    pinterestUrl: '#',
  },

  navigation: [
    { label: 'Signature Bakes', href: '#signatures' },
    { label: 'Collection', href: '#collection' },
    { label: 'Custom Cakes', href: '#custom-cakes' },
    { label: 'Occasions', href: '#occasions' },
    { label: 'How to Order', href: '#how-to-order' },
  ],
};

export const createWhatsAppOrderUrl = (params: {
  productName?: string;
  servings?: string;
  price?: string;
  deliveryDate?: string;
  customNotes?: string;
  occasion?: string;
  customerName?: string;
}) => {
  let text = `*New Order Enquiry — BLOOM & BATTER*\n`;
  if (params.customerName) text += `*From:* ${params.customerName}\n`;
  if (params.productName) text += `*Item:* ${params.productName}\n`;
  if (params.servings) text += `*Portion / Servings:* ${params.servings}\n`;
  if (params.price) text += `*Estimated Price:* ${params.price}\n`;
  if (params.occasion) text += `*Occasion:* ${params.occasion}\n`;
  if (params.deliveryDate) text += `*Target Date:* ${params.deliveryDate}\n`;
  if (params.customNotes) text += `*Special Notes / Message:* ${params.customNotes}\n`;
  text += `\n_Sent via Bloom & Batter boutique website_`;

  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
};

