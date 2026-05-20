export const site = {
  name: "Heimdall",
  domain: "heimdall.land",
  url: import.meta.env.SITE_URL || "https://heimdall.land",
  email: "hello@heimdall.land",
  description:
    "Heimdall can see cryptocurrency as it grows. We believe in a future surrounded by decentralized technologies, where individuals can interact without depending on third parties.",
  launchContext: [
    "Track cryptocurrency growth across Bitcoin, Ethereum, and emerging decentralized networks from a single vantage point.",
    "Built for believers in decentralized technologies — individuals who want to see the revolution of money and human interaction unfold without third-party gatekeepers.",
    "Heimdall watches the decentralized landscape so you can see patterns, growth, and opportunity before the crowd does."
  ]
};

export const navItems = [
  { label: "Watchtower", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
