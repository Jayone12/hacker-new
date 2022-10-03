const TEMPLATES = [
  {
    title: "About",
    description: `This is a simple Hacker News clone, built with SvelteKit, an application framework for <a href="https://svelte.dev/">Svelte</a>.
    <br/>
    <br/>
    Svelte is a new kind of framework, one that compiles your component templates into fast, compact JavaScript — either client-side or server-side. You can read more about the design and philosophy in the <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity">introductory blog post</a>.
    <br/>
    <br/>
    We're using hnpwa-api as a backend. The app is hosted on Vercel.`,
    url: "/about",
  },
  {
    title: "Top",
    description: `Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms.`,
    url: "/top",
  },
  {
    title: "New",
    description: `Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms.`,
    url: "/new",
  },
  {
    title: "Show",
    description: `Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms.`,
    url: "/show",
  },
  {
    title: "Ask",
    description: `Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms.`,
    url: "/ask",
  },
  {
    title: "Job",
    description: `Top is a service that ranks all articles on Hacker News through Hacker News' own algorithms.`,
    url: "/job",
  },
  {
    title: "FAQ",
    faqList: [
      `Can I write here?`,
      `Are there rules about submissions and comments?`,
      `How are stories ranked?`,
      `How is a user's karma calculated?`,
      `Why don't I see down arrows?`,
      `What kind of formatting can you use in comments?`,
    ],
  },
];

export default TEMPLATES;
