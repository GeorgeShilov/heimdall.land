export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "seeing-cryptocurrency-as-it-grows",
    title: "Seeing cryptocurrency as it grows",
    description:
      "How Heimdall tracks price movements, network adoption, and on-chain metrics to spot growth before the mainstream catches on.",
    pubDate: "2026-05-16",
    author: "Heimdall Team",
    category: "Analysis",
    tags: ["Bitcoin", "Growth", "Tracking"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Most market participants react to headlines. Heimdall was built to see growth before it becomes news. By combining price velocity, on-chain transaction volume, active address trends, and network hash rate, the platform surfaces early signals of cryptocurrency expansion that lagging indicators miss.</p>
      <p>Bitcoin's 2020 halving cycle demonstrated this clearly: on-chain metrics began shifting months before price caught up. Heimdall's growth lens tracks these leading indicators across Bitcoin, Ethereum, and emerging proof-of-stake networks. The key is measuring organic usage growth rather than speculative trading volume.</p>
      <p>The architecture ingests block data directly from nodes, bypassing third-party APIs that introduce delays and censorship risk. Raw chain signals are aggregated into trend lines, deviation bands, and cross-network comparisons. The result is a view of cryptocurrency growth that is both timely and independent.</p>
    `
  },
  {
    slug: "decentralized-technologies-and-the-future-of-interaction",
    title: "Decentralized technologies and the future of interaction",
    description:
      "Why we believe in a future surrounded by decentralized technologies where individuals interact without depending on third parties.",
    pubDate: "2026-05-15",
    author: "Heimdall Team",
    category: "Philosophy",
    tags: ["Decentralization", "Bitcoin", "P2P"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>The internet was originally designed as a peer-to-peer network. Over decades, it consolidated into a handful of platforms that mediate nearly every human interaction. Decentralized technologies represent a return to the original vision — direct connections between individuals without rent-seeking intermediaries.</p>
      <p>Bitcoin proved that money could function without central banks. Ethereum showed that contracts could execute without courts. Layer-two networks and zero-knowledge proofs are now making these systems scalable and private. Each advance removes another dependency on trusted third parties.</p>
      <p>Heimdall exists to watch this transition unfold. Our tracking tools monitor not just prices but network decentralization metrics: node distribution, miner concentration, validator diversity, and protocol upgrade participation. A truly decentralized network is visible in its topology, not just its marketing.</p>
    `
  },
  {
    slug: "tracking-validator-health-across-proof-of-stake-networks",
    title: "Tracking validator health across proof-of-stake networks",
    description:
      "How to maintain visibility across validators, oracles, and protocol upgrades without relying on centralized data providers.",
    pubDate: "2026-05-14",
    author: "Heimdall Team",
    category: "Operations",
    tags: ["Validators", "Monitoring", "Staking"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Proof-of-stake networks replace mining with validation, but the challenge of monitoring remains. A single app may depend on validators on three chains, oracles for price data, and indexers for query speed. When finality stalls, the question is rarely "what failed?" but "which validator dropped first, and how did it cascade?"</p>
      <p>Heimdall addresses this with direct node connections that report raw consensus data rather than polished API responses. Each validator emits structured health signals: attestation rate, block proposal frequency, slashing history, and peer count. The correlation engine then builds a live view of network health so operators can see root cause and blast radius in the same panel.</p>
      <p>Scaling this model means keeping node connections lightweight and telemetry streams bounded. Sampling, aggregation windows, and severity tagging keep data volume manageable while preserving enough granularity to investigate incidents after the fact. The result is validator visibility that matches the decentralized topology of the networks themselves.</p>
    `
  }
];
