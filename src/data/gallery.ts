export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  aspect: string; // for editorial masonry
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vintage Floral Tiered Cake',
    tag: 'Custom Celebration',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[3/4]',
    caption: 'Tiered celebration cake finished with pressed garden blooms and soft blush stucco texturing.',
  },
  {
    id: 'gal-2',
    title: 'Warm Fudgy Lotus Squares',
    tag: 'Fresh From the Oven',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-square',
    caption: 'Thick Belgian fudge brownies fresh out of the morning bake, swirled with caramel speculoos.',
  },
  {
    id: 'gal-3',
    title: 'Wild Strawberry & Mascarpone',
    tag: 'Seasonal Special',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[4/5]',
    caption: 'Slice detail showing layered sponge and whipped vanilla cream with ruby strawberry coulis.',
  },
  {
    id: 'gal-4',
    title: 'Whipped Rosette Cupcakes',
    tag: 'Bespoke Box',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-square',
    caption: 'Hand-piped two-tone vanilla bean and organic rose buttercream swirls with botanical dusting.',
  },
  {
    id: 'gal-5',
    title: 'Dark Belgian Truffle Silhouette',
    tag: 'Signature Patisserie',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[3/4]',
    caption: 'Decadent 70% Callebaut dark chocolate cake coated in velvet ganache and chocolate curls.',
  },
  {
    id: 'gal-6',
    title: 'Botanical Cake Details',
    tag: 'Artisan Styling',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000&auto=format&fit=crop',
    aspect: 'aspect-[4/5]',
    caption: 'Close-up on hand-placed edible rose petals and delicate natural flora atop ivory frosting.',
  },
];

