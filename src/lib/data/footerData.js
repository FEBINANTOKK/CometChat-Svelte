export const footerData = {
  Platform: {
    Features: [
      'Chat & Messaging',
      'Voice & Video Calls',
      'Security & Compliance',
      'Extensions',
      'Features at a glance',
      'Webhooks & Bots',
      'Moderation',
      'Analytics & Insights',
    ],
    Implementation: ['Widgets', 'UI Kits', 'SDKs & APIs'],
    Technologies: [
      'React Chat SDK & API',
      'Angular Chat SDK & API',
      'Vue Chat SDK & API',
      'iOS Swift Chat SDK & API',
      'Android Kotlin Chat SDK & API',
      'Android Java Chat SDK & API',
      'React Native Chat SDK & API',
      'Ionic/Capacitor Chat SDK & API',
      'WordPress Chat SDK & API',
      'Laravel/PHP Chat SDK & API',
      'Flutter Chat SDK & API',
      'Next.js Chat SDK & API',
    ],
  },
  Solutions: {
    'By Use Cases': [
      'Social Community',
      'Marketplace',
      'Healthcare',
      'Education',
      'Virtual Events',
      'On-Demand Service',
      'Dating Apps',
      'Gaming',
    ],
    'By Organization Type': ['Enterprise', 'Startups'],
  },
  Developers: {
    'Technologies Documentation': [
      'React',
      'Angular',
      'Vue',
      'iOS Swift',
      'Android Kotlin',
      'Android Java',
      'React Native',
      'Ionic/Capacitor',
      'WordPress',
      'Laravel/PHP',
      'Flutter',
      'Next.js',
    ],
    Documentation: [
      'Documentation',
      'Product updates',
      'Tutorials',
      'Open-source Apps',
      'Product status',
      'Glossary',
    ],
  },
  Resources: [
    'Customer stories',
    'Blog',
    'Give feedback',
    'Community forum',
    'Help center',
    'Partners',
  ],
  Competitors: ['SendBird', 'GetStream', 'Applozic', 'Twilio', 'PubNub'],
  Company: ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'],
};

export const sections = [
  {
    title: 'Platform',
    content: [
      { heading: 'Features', items: footerData.Platform.Features },
      {
        heading: 'Implementation',
        items: footerData.Platform.Implementation,
      },
      { heading: 'Technologies', items: footerData.Platform.Technologies },
    ],
  },
  {
    title: 'Solutions',
    content: [
      {
        heading: 'By Use Cases',
        items: footerData.Solutions['By Use Cases'],
      },
      {
        heading: 'By Organization Type',
        items: footerData.Solutions['By Organization Type'],
      },
    ],
  },
  {
    title: 'Developers',
    content: [
      {
        heading: 'Technologies Documentation',
        items: footerData.Developers['Technologies Documentation'],
      },
      {
        heading: 'Documentation',
        items: footerData.Developers.Documentation,
      },
    ],
  },
];
