export const PRODUCT_CATEGORIES = [
  {
    label: 'Our Friends',
    value: 'our_friends' as const,
    featured: [
      {
        name: 'Animales Sin Hogar',
        href: `https://www.animalessinhogar.com.uy/`,
        imageSrc: '/nav/ui-kits/animales_sin_hogar.png',
      },
      {
        name: 'El Refugio',
        href: 'https://www.apaelrefugio.org/',
        imageSrc: '/nav/ui-kits/el_refugio.png',
      },
      {
        name: 'KatDog',
        href: 'https://www.katdog.org/',
        imageSrc: '/nav/ui-kits/kat_dog.png',
      },
    ],
  },
  {
    label: 'Help Us',
    value: 'help_us' as const,
    featured: [
      {
        name: 'Shop',
        href: `/store`,
        imageSrc: '/nav/help/store.png',
      },
      {
        name: 'Donate',
        href: '/support',
        imageSrc: '/nav/help/support.png',
      },
      {
        name: 'Spread',
        href: '/social-media',
        imageSrc: '/nav/help/spread.jpg',
      },
    ],
  },
]
