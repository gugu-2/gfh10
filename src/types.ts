export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  metric: string;
  metricLabel: string;
  problem: string;
  architecture: string[];
  quote: string;
  author: string;
  role: string;
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  deployedIn: string;
}

export interface SimulationScenario {
  id: string;
  name: string;
  type: 'success' | 'fallback' | 'scrubbed';
  inputSnippet: string;
  latencyMs: number;
  deterministicScore: string;
  statusText: string;
  logTrace: string[];
}
