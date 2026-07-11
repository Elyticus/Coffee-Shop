export interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  badge?: string
  origin?: string
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Costa Rica Ceres',
    description: 'Bright and complex with notes of citrus, honey, and dark chocolate. Single-origin excellence from high-altitude farms.',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
    badge: 'Premium',
    origin: 'Costa Rica',
  },
  {
    id: 2,
    title: 'Colombia Chami',
    description: 'Smooth body with caramel sweetness and a clean, bright finish. Sourced from small family farms in the Andes.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    origin: 'Colombia',
  },
  {
    id: 3,
    title: 'Thesis Blend',
    description: 'Our signature house blend. Notes of dark chocolate, toasted nuts, and a lingering caramel finish. A daily ritual.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 4,
    title: 'Instant Craft Pack',
    description: 'Premium instant coffee crafted for the modern explorer. Full flavour, zero compromise. 20 sticks per pack.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    badge: 'New',
  },
  {
    id: 5,
    title: 'Ethiopia Yirgacheffe',
    description: 'Floral bouquet of jasmine, bergamot, and wine-like brightness. The birthplace of coffee, in every cup.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop',
    origin: 'Ethiopia',
  },
  {
    id: 6,
    title: 'Decaf EA Mexico',
    description: 'Swiss water process decaf. Full-bodied sweetness with milk chocolate and brown sugar. Zero compromise.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    origin: 'Mexico',
  },
  {
    id: 7,
    title: 'Origin Discovery Set',
    description: 'A journey through 5 distinct single-origin coffees from our favourite growing regions. The perfect gift.',
    price: 120.99,
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&h=300&fit=crop',
    badge: 'Gift Set',
  },
  {
    id: 8,
    title: 'Destroyer Dark',
    description: 'Bold and intense. Smoky depth with notes of dark fruit and a powerful, lingering finish. Not for the faint-hearted.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    badge: 'Intense',
  },
  {
    id: 9,
    title: 'Mass Appeal',
    description: 'The crowd-pleaser. Balanced, approachable, and endlessly drinkable. Notes of almond and vanilla.',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    title: 'Synthesis Light',
    description: 'Delicate and nuanced. Light roast showcasing terroir with stone fruit and floral aromatics.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    origin: 'Multi-Origin',
  },
]
