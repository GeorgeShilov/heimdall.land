export const site = {
  name: "Heimdall Land",
  domain: "heimdall.land",
  url: import.meta.env.SITE_URL || "https://heimdall.land",
  email: "hello@heimdall.land",
  description:
    "Heimdall Land is a security gateway and digital watchdog platform that monitors, protects, and guards your digital infrastructure across Web2 and Web3.",
  launchContext: [
    "Continuous security monitoring for blockchain nodes, APIs, and gateway endpoints with real-time anomaly detection.",
    "Gateway protection layers that filter, authenticate, and route traffic before it reaches your critical infrastructure.",
    "Sentinel infrastructure designed to watch, alert, and respond across decentralized networks and traditional stacks."
  ]
};

export const navItems = [
  { label: "Command OS", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
