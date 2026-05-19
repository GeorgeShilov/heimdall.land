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
    slug: "building-a-blockchain-sentinel-for-real-time-threat-detection",
    title: "Building a blockchain sentinel for real-time threat detection",
    description:
      "How to architect a monitoring layer that watches smart contracts, bridge transactions, and validator behavior before damage spreads.",
    pubDate: "2026-05-16",
    author: "Heimdall Team",
    category: "Security",
    tags: ["Blockchain", "Sentinel", "Monitoring"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Blockchain networks move fast, and threats move faster. A sentinel system must ingest transaction streams, detect anomalous patterns, and raise alerts within seconds rather than blocks. The key is to treat every bridge transfer, contract interaction, and validator signature as a signal that can be scored for risk.</p>
      <p>Heimdall Land's sentinel layer combines rule-based thresholds with behavioral baselines. Instead of waiting for a hack to finish, the system flags pre-attack reconnaissance, unusual gas patterns, and privilege escalation attempts as they happen. Early warning gives operators time to pause contracts, rotate keys, or redirect traffic before funds move.</p>
      <p>The architecture is intentionally modular: ingestion nodes feed a stream processor, which writes to both a real-time alert bus and a long-term audit store. This lets security teams respond now and investigate later without losing chain state.</p>
    `
  },
  {
    slug: "gateway-protection-patterns-for-web3-apis",
    title: "Gateway protection patterns for Web3 APIs",
    description:
      "Practical strategies for hardening RPC gateways, rate limiting wallet connections, and preventing injection attacks at the edge.",
    pubDate: "2026-05-15",
    author: "Heimdall Team",
    category: "Infrastructure",
    tags: ["Gateway", "API", "Web3"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Every Web3 application depends on RPC gateways, but most teams treat them as plumbing rather than a security surface. A compromised or overwhelmed gateway can censor transactions, leak user metadata, or become a denial-of-service vector against your entire product. The first line of defense is treating the gateway as a policy enforcement point.</p>
      <p>Heimdall Land recommends a layered approach: edge rate limiting by wallet and IP, request validation against known method signatures, payload size constraints, and TLS fingerprinting to detect scripted bots. Where possible, run multiple gateway providers in parallel so a single upstream failure cannot take your app offline.</p>
      <p>Authentication matters too. Signed headers, short-lived JWTs, or wallet-based message signing can distinguish legitimate application traffic from raw RPC spam without adding friction to end users. The goal is to let good traffic through fast while making abuse expensive and noisy.</p>
    `
  },
  {
    slug: "monitoring-decentralized-infrastructure-at-scale",
    title: "Monitoring decentralized infrastructure at scale",
    description:
      "How to maintain visibility across validators, oracles, indexers, and storage nodes without building a centralized bottleneck.",
    pubDate: "2026-05-14",
    author: "Heimdall Team",
    category: "Operations",
    tags: ["Monitoring", "Infrastructure", "DevOps"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Decentralized infrastructure is resilient by design, but that same distribution makes it hard to monitor. A single app may touch validators on three chains, oracles for price data, indexers for query speed, and IPFS nodes for storage. When something breaks, the question is rarely "what failed?" but "which component failed first, and how did it cascade?"</p>
      <p>Heimdall Land addresses this with distributed probes that report to a correlation engine rather than a traditional central dashboard. Each probe emits structured health signals: block height lag, oracle deviation, p95 query latency, and storage pin success rates. The correlation engine then builds a live dependency graph so operators can see root cause and blast radius in the same view.</p>
      <p>Scaling this model means keeping probes lightweight and telemetry streams bounded. Sampling, aggregation windows, and severity tagging keep the data volume manageable while preserving enough granularity to investigate incidents after the fact. The result is visibility that matches the topology of the infrastructure itself.</p>
    `
  }
];
