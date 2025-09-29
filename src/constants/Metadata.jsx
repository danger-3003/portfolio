
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const MetaData = {
  "homepage": {
    title: "Hima Varsha Barla | UI/UX Designer Portfolio",
    description:
      "Explore the portfolio of Hima Varsha Barla, a UI/UX Designer who transforms complex ideas into simple, user-focused, and visually elegant digital experiences. View Hima Varsha’s portfolio showcasing creative UI/UX design projects.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: baseUrl },
    openGraph: {
      title: "Hima Varsha Barla | UI/UX Designer Portfolio",
      description:
        "Explore the portfolio of Hima Varsha Barla, a UI/UX Designer who transforms complex ideas into simple, user-focused, and visually elegant digital experiences. View Hima Varsha’s portfolio showcasing creative UI/UX design projects.",
      url: baseUrl,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Hima Varsha UI/UX Portfolio",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hima Varsha Barla | UI/UX Designer Portfolio",
      description:
        "Explore the portfolio of Hima Varsha Barla, a UI/UX Designer who transforms complex ideas into simple, user-focused, and visually elegant digital experiences. View Hima Varsha’s portfolio showcasing creative UI/UX design projects.",
      images: ["/opengraph-image.png"],
    },
    keywords: [
      "UI/UX designer",
      "UI/UX designer portfolio",
      "hima varsha",
      "hima varsha barla",
      "varsha",
      "hima",
      "portfolio",
      "hima varsha portfolio",
      "hima varsha barla portfolio",
      "creative design",
      "user experience",
      "digital design",
      "design thinking",
      "product design",
      "visual storytelling"
    ],
    other: {
      "site_name": "Hima Varsha Barla | Portfolio",
      "author": "Hima Varsha",
      "creator": "Hima Varsha",
      "robots": "index, follow",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.ico.svg" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.ico.svg"],
    },
  },

  "work": {
    title: "My Work | Hima Varsha UI/UX Design Portfolio",
    description:
      "Browse through Hima Varsha’s featured projects including Result Insight Hub, Libri Hub, Shopify, and GenAITools showcasing design expertise and creativity.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/my-work` },
    openGraph: {
      title: "My Work | Hima Varsha UI/UX Design Portfolio",
      description:
        "Explore creative UI/UX projects by Hima Varsha, highlighting research-driven design and seamless digital experiences.",
      url: `${baseUrl}/my-work`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Hima Varsha Work" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "My Work | Hima Varsha UI/UX Design Portfolio",
      description:
        "Check out featured design works by Hima Varsha including digital dashboards, e-commerce, and AI-driven tools.",
      images: ["/opengraph-image.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.ico.svg" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.ico.svg"],
    },
  },

  "connect": {
    title: "Connect with Hima Varsha Barla | UI/UX Designer",
    description:
      "Let’s collaborate! Reach out to Hima Varsha for UI/UX design projects, collaborations, or creative opportunities.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/connect` },
    openGraph: {
      title: "Connect with Hima Varsha Barla | UI/UX Designer",
      description:
        "Contact Hima Varsha to discuss UI/UX design opportunities, collaborations, and creative projects.",
      url: `${baseUrl}/connect`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Connect with Hima Varsha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Connect with Hima Varsha Barla | UI/UX Designer",
      description:
        "Get in touch with Hima Varsha to collaborate on creative design projects and UI/UX opportunities.",
      images: ["/opengraph-image.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.ico.svg" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.ico.svg", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.ico.svg"],
    },
  },
};
