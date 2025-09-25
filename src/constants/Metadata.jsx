
const baseUrl = "https://varsha-new.vercel.app/"; // replace with your actual domain

export const MetaData = {
  "homepage": {
    title: "Hima Varsha | UI/UX Designer Portfolio",
    description:
      "Explore the creative portfolio of Hima Varsha, a passionate UI/UX Designer who transforms complex ideas into simple, elegant, and user-focused digital experiences.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: baseUrl },
    openGraph: {
      title: "Hima Varsha | UI/UX Designer Portfolio",
      description:
        "Discover Hima Varsha’s portfolio showcasing UI/UX design projects that blend design thinking, storytelling, and creativity.",
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
      title: "Hima Varsha | UI/UX Designer Portfolio",
      description:
        "Discover UI/UX design works and creative projects by Hima Varsha, blending aesthetics with seamless user experiences.",
      images: ["/opengraph-image.png"],
    },
    keywords: [
      "UI/UX designer portfolio",
      "hima varsha",
      "hima varsha barla",
      "creative design",
      "user experience",
      "digital design",
      "design thinking",
      "product design",
      "visual storytelling"
    ],
    other: {
      "site_name": "Hima Varsha | Portfolio",
      "author": "Hima Varsha",
      "creator": "Hima Varsha",
      "robots": "index, follow",
    },
    icons: {
      icon: [
        { url: "/assets/icons/faviocn.ico.jpg" },
        { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/faviocn.ico.jpg"],
    },
  },

  "about": {
    title: "About | UI/UX Designer & Creative Professional",
    description:
      "Learn more about Hima Varsha, a UI/UX Designer passionate about blending aesthetics with functionality to create seamless and impactful digital experiences.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/about` },
    openGraph: {
      title: "About | UI/UX Designer & Creative Professional",
      description:
        "Discover Hima Varsha’s design philosophy, approach, and creative journey in crafting user-centric digital experiences.",
      url: `${baseUrl}/about`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "About Hima Varsha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "About | UI/UX Designer & Creative Professional",
      description:
        "Get to know Hima Varsha and her passion for design, storytelling, and creating meaningful user experiences.",
      images: ["/opengraph-image.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    }
  },

  "work": {
    title: "My Work | Hima Varsha UI/UX Design Portfolio",
    description:
      "Browse through Hima Varsha’s featured projects including Result Insight Hub, Libri Hub, Shopify, and GenAITools showcasing design expertise and creativity.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/work` },
    openGraph: {
      title: "My Work | Hima Varsha UI/UX Design Portfolio",
      description:
        "Explore creative UI/UX projects by Hima Varsha, highlighting research-driven design and seamless digital experiences.",
      url: `${baseUrl}/work`,
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
    }
  },

  "connect": {
    title: "Connect with Hima Varsha | UI/UX Designer",
    description:
      "Let’s collaborate! Reach out to Hima Varsha for UI/UX design projects, collaborations, or creative opportunities.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/connect` },
    openGraph: {
      title: "Connect with Hima Varsha | UI/UX Designer",
      description:
        "Contact Hima Varsha to discuss UI/UX design opportunities, collaborations, and creative projects.",
      url: `${baseUrl}/connect`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Connect with Hima Varsha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Connect with Hima Varsha | UI/UX Designer",
      description:
        "Get in touch with Hima Varsha to collaborate on creative design projects and UI/UX opportunities.",
      images: ["/opengraph-image.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    }
  },
};
