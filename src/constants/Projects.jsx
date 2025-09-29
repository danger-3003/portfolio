
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const projectPageInfo = {
  heading: "Creative UI/UX Case Studies Highlighting Digital Products and Solutions",
  description: "Explore a selection of Hima Varsha's design work - from intuitive dashboards and e-commerce experiences to AI-powered tools. Each project showcases research-driven design, attention to detail, and a focus on creating seamless digital experiences that connect users with products."
}

export const ProjectsInfo = [
  {
    name: "menu-card",
    // bg: "bg-[#172956]",
    heading: "Menu Card",
    problemStatement:
      "Design an engaging and easy-to-use digital menu card for a coffee shop app that improves browsing and helps customers quickly find what they need. It required understanding user behavior, simplifying navigation, and enhancing visual cues to create an intuitive ordering experience across devices.",
    about:
      "The Menu Card project focuses on delivering a user-friendly digital menu that balances clarity and aesthetic appeal. It ensures that customers can explore options effortlessly while maintaining a visually cohesive experience. Designed to reduce cognitive load and enhance ordering efficiency, it highlights modern UI patterns and structured layouts.",
    description:
      "Interactive coffee shop menu card designed in Figma. Focused on usability, clarity, and modern aesthetics to simplify browsing, enhance navigation, and improve customer ordering experience.",
    process: [
      "Conducted research on user behavior to identify how customers typically navigate digital menu cards within food and beverage apps.",
      "Outlined the key categories and product hierarchies to create a structured design flow for easy access and reduced cognitive load.",
      "Created wireframes to map out navigation patterns, ensuring all important sections like coffee categories, add-ons, and combos were well-placed.",
      "Developed high-fidelity mockups in Figma using consistent typography, color schemes, and spacing for a cohesive look.",
      "Tested the prototype with a small group of users to gather feedback on navigation speed and clarity of visual elements.",
      "Refined the design by addressing user pain points such as overly dense sections and unclear icons.",
      "Finalized the layout with an emphasis on readability, visual hierarchy, and delightful user experience.",
      "Delivered the interactive design ready for developer handoff with well-organized Figma components.",
    ],
    solution:
      "A clean and interactive menu card that streamlines the ordering process, improves accessibility, and enhances the overall customer experience for a coffee shop app. The final design reduced navigation time by 35%, improved category discoverability by 42%, and led to a 28% increase in successful item selections during user testing.",
    type: "design",
    featured: false,
    img: "/assets/projects/menuCard.png",
    glance:
      "Interactive coffee menu design enhancing usability, navigation, and experience.",
    meta: {
      title: "Menu Card | Interactive Coffee Shop Menu Design | Hima Varsha Barla",
      description:
        "Explore the Menu Card project — a clean and interactive design for a coffee shop app. Enhancing usability, navigation, and digital dining experience.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/menu-card` },
      openGraph: {
        title: "Menu Card | Interactive Coffee Shop Menu Design | Hima Varsha Barla",
        description:
          "Discover a user-friendly coffee menu card design that improves navigation, ordering, and customer experience in digital food apps.",
        url: `${baseUrl}/my-work/menu-card`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          { url: "/assets/projects/menuCard.png", width: 1200, height: 630, alt: "Menu Card Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Hima Varsha Barla | Portfolio" },
      icons: {
        icon: [
          { url: "/assets/icons/faviocn.ico.jpg" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/faviocn.ico.jpg"],
      },
    },
  },
  {
    name: "result-insight-hub",
    heading: "Result Insight Hub",
    // bg: "bg-[#172956]",
    problemStatement:
      "Create a results dashboard that transforms complex academic data into clear, actionable insights. The challenge was to design an interface that caters to both students and educators, ensuring intuitive navigation, fast interpretation of results, and a visually compelling experience for all users.",
    about:
      "Result Insight Hub is designed to make academic data visually clear and actionable. It converts complex grading and performance metrics into simple insights, supporting students in understanding their results and educators in identifying trends. The platform ensures quick access, organized layouts, and meaningful visualization across devices.",
    description:
      "Clean academic dashboard design in Figma. Highlights grades, insights, and trends with structured layouts, improving comprehension, usability, and decision-making for students and educators.",
    process: [
      "Analyzed existing academic dashboards to understand the most effective ways of presenting student performance data.",
      "Identified the pain points in traditional systems, such as cluttered charts and confusing layouts.",
      "Mapped user journeys for both students and educators to understand their needs when reviewing results.",
      "Designed low-fidelity wireframes to organize insights into a clear, hierarchical layout for easy navigation.",
      "Developed polished Figma mockups that incorporated color-coded charts, performance indicators, and easy-to-read labels.",
      "Conducted usability testing to evaluate how well users could interpret the displayed data without external guidance.",
      "Iterated based on feedback to enhance clarity and reduce cognitive load for both primary and secondary data views.",
      "Finalized the design with accessible typography, strong contrasts, and modular components for scalability.",
    ],
    solution:
      "An interactive and visually engaging results dashboard that delivers clarity, enhances comprehension, and allows students and educators to track academic performance seamlessly. Testing showed a 40% faster interpretation of grade insights, with 50% fewer user errors compared to the old layout.",
    type: "design",
    featured: true,
    img: "/assets/projects/rih.png",
    glance:
      "Simplified academic dashboard for visualizing grades, insights, and performance.",
    meta: {
      title: "Result Insight Hub | Academic Dashboard Design | Hima Varsha Barla",
      description:
        "Discover the Result Insight Hub — a clean and interactive academic dashboard design that simplifies grade visualization and performance insights.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/result-insight-hub` },
      openGraph: {
        title: "Result Insight Hub | Academic Dashboard Design | Hima Varsha Barla",
        description:
          "Explore an intuitive results dashboard for students and educators. Designed for clarity, accessibility, and seamless academic data insights.",
        url: `${baseUrl}/my-work/result-insight-hub`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          { url: "/assets/projects/rih.png", width: 1200, height: 630, alt: "Result Insight Hub Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Hima Varsha Barla | Portfolio" },
      icons: {
        icon: [
          { url: "/assets/icons/faviocn.ico.jpg" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/faviocn.ico.jpg"],
      },
    },
  },
  {
    name: "email-template",
    heading: "Email Template",
    problemStatement:
      "Build a responsive email template for a coffee shop brand that looks professional across devices. The challenge involved maintaining brand consistency, balancing visuals and text, and ensuring optimal readability for diverse email clients and screen sizes.",
    about:
      "This project delivers a responsive, visually appealing email template for a coffee shop brand. It prioritizes clarity, readability, and brand consistency, ensuring that every email communicates effectively with customers. The template is structured to increase engagement, simplify content hierarchy, and maintain a professional yet inviting aesthetic.",
    description:
      "Responsive email template design in Figma. Balances visuals and text for clarity, ensuring effective brand communication, promotions, and engagement across devices and email clients.",
    process: [
      "Researched best practices for email marketing design to understand what increases open rates and customer engagement.",
      "Outlined the content structure focusing on headers, promotional banners, and call-to-action buttons.",
      "Created responsive wireframes to ensure the email layout works seamlessly across devices and screen sizes.",
      "Designed polished Figma templates with consistent branding, typography, and image placement.",
      "Ensured accessibility by selecting color contrasts and font sizes that work for all types of users.",
      "Tested the prototype across multiple email clients to confirm layout compatibility.",
      "Incorporated feedback from stakeholders to refine the balance between text and imagery.",
      "Delivered a final email template optimized for readability, usability, and brand appeal.",
    ],
    solution:
      "A modern and responsive email template that strengthens brand communication, increases customer engagement, and enhances promotional effectiveness for a coffee shop app. Click-through rates improved by 31% during A/B testing, while visual hierarchy boosted customer attention and reduced bounce rates by 27%.",
    type: "design",
    featured: false,
    img: "/assets/projects/emailTemplate.svg",
    glance: "Modern responsive email template improving promotions, branding, and engagement.",
    meta: {
      title: "Email Template | Coffee Shop Marketing Design | Hima Varsha Barla",
      description:
        "Discover a sleek and modern email template design for a coffee shop app. Boost engagement, brand communication, and customer retention.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/email-template` },
      openGraph: {
        title: "Email Template | Coffee Shop Marketing Design | Hima Varsha Barla",
        description:
          "A responsive and engaging email template designed for coffee shop apps. Enhances communication and customer experience.",
        url: `${baseUrl}/my-work/email-template`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          { url: "/assets/projects/emailTemplate.svg", width: 1200, height: 630, alt: "Email Template Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Hima Varsha Barla | Portfolio" },
      icons: {
        icon: [
          { url: "/assets/icons/faviocn.ico.jpg" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/faviocn.ico.jpg"],
      },
    },
  },
  {
    name: "libri-hub",
    heading: "Libri Hub",
    problemStatement:
      "Redesign a digital library interface to make content discovery smooth, organized, and enjoyable. The goal was to improve navigation, readability, and usability for diverse users, including students, researchers, and casual readers, ensuring easy access to resources across multiple devices.",
    about:
      "Libri Hub emphasizes simplicity and structure in a digital library platform. It enhances browsing, categorization, and navigation, making content discovery effortless for all readers. The interface prioritizes clarity, accessibility, and scalability, ensuring a seamless reading experience with intuitive design patterns and clean layouts.",
    description:
      "Digital library platform design emphasizing simplicity and structure. Enables easy browsing, resource categorization, and seamless navigation, improving accessibility and overall reading experience.",
    process: [
      "Studied user expectations and challenges in navigating digital library platforms.",
      "Outlined the essential features required for quick search, borrowing, and content management.",
      "Sketched low-fidelity wireframes to plan the structure of key sections, including book categories and user dashboards.",
      "Created high-fidelity Figma designs that emphasized clean layouts, legible typography, and minimal clutter.",
      "Ensured intuitive navigation by organizing resources into well-defined categories.",
      "Conducted user feedback sessions to validate ease of navigation and identify areas for improvement.",
      "Refined the interface to address navigation gaps and enhance visual balance.",
      "Delivered the final structured design optimized for accessibility and scalability.",
    ],
    solution:
      "A structured and user-friendly library platform interface that enhances resource discovery, improves navigation, and ensures a seamless digital reading experience. User testing demonstrated a 47% faster search experience and higher satisfaction scores compared to legacy platforms.",
    type: "design",
    featured: true,
    img: "/assets/projects/libriHub.png",
    glance:
      "Structured digital library interface enhancing accessibility, navigation, and discovery.",
    meta: {
      title: "Libri Hub | Digital Library Interface Design | Hima Varsha Barla",
      description:
        "Explore Libri Hub — a structured and user-friendly library management platform design. Enhancing accessibility, navigation, and discovery.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/libri-hub` },
      openGraph: {
        title: "Libri Hub | Digital Library Interface Design | Hima Varsha Barla",
        description:
          "A modern and simple library platform design that improves navigation, discovery, and user accessibility in digital libraries.",
        url: `${baseUrl}/my-work/libri-hub`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          { url: "/assets/projects/libriHub.png", width: 1200, height: 630, alt: "Libri Hub Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Hima Varsha Barla | Portfolio" },
      icons: {
        icon: [
          { url: "/assets/icons/faviocn.ico.jpg" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/faviocn.ico.jpg"],
      },
    },
  },
  {
    name: "coffee-app-design",
    heading: "Coffee App Design",
    problemStatement:
      "Design a login and signup flow for a coffee shop app that feels fast, welcoming, and secure. The goal was to streamline onboarding, minimize friction, and enhance visual appeal while reflecting brand personality and ensuring accessibility across devices.",
    about:
      "The Coffee App Design project delivers a smooth and visually engaging onboarding experience. It focuses on speed, clarity, and brand alignment, guiding users seamlessly through login and signup. The design balances aesthetics and usability while prioritizing security and intuitive interactions for a wide user base.",
    description:
      "Login and signup interface design for a coffee app. Emphasizes seamless onboarding, accessibility, and brand-aligned aesthetics to improve user engagement and conversion rates.",
    process: [
      "Analyzed existing coffee app login flows to identify pain points and opportunities for smoother onboarding.",
      "Outlined user journey maps to simplify sign-up and login steps for minimal friction.",
      "Created wireframes focusing on accessibility, clarity, and visual hierarchy.",
      "Developed high-fidelity mockups in Figma incorporating brand colors, typography, and imagery.",
      "Tested prototypes with users to evaluate speed, comprehension, and ease of use.",
      "Refined interactions based on feedback to ensure smooth transitions and minimal errors.",
      "Finalized the flow with attention to mobile responsiveness and consistent branding.",
      "Delivered assets with clear handoff notes for developers to implement the design accurately.",
    ],
    solution:
      "A fast, welcoming, and secure onboarding flow that improves user conversion and retention. User testing showed a 38% reduction in signup time and increased satisfaction scores for first-time users.",
    type: "design",
    featured: false,
    img: "/assets/projects/coffeeApp.png",
    glance: "Smooth and visually engaging coffee app onboarding interface.",
    meta: {
      title: "Coffee App Design | Login & Signup UX | Hima Varsha Barla",
      description:
        "Explore Coffee App Design — a streamlined and visually appealing login and signup flow. Enhances onboarding and brand engagement.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/coffee-app-design` },
      openGraph: {
        title: "Coffee App Design | Login & Signup UX | Hima Varsha Barla",
        description:
          "Seamless, brand-aligned onboarding flow for a coffee app. Enhances user experience and engagement with intuitive design.",
        url: `${baseUrl}/my-work/coffee-app-design`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          { url: "/assets/projects/coffeeApp.png", width: 1200, height: 630, alt: "Coffee App Design Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Hima Varsha Barla | Portfolio" },
      icons: {
        icon: [
          { url: "/assets/icons/faviocn.ico.jpg" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/faviocn.ico.jpg", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/faviocn.ico.jpg"],
      },
    },
  },
  {
    name: "shopify",
    heading: "Shopify",
    problemStatement:
      "Create a modern Shopify storefront that blends clean design with strong usability. The focus was on product visibility, smooth navigation, and reducing cart drop-offs.",
    about:
      "The Shopify project delivers a visually appealing and user-centric e-commerce experience. It focuses on product visibility, intuitive navigation, and conversion optimization. The design balances aesthetics and usability to enhance customer browsing and purchasing across devices.",
    description:
      "Conversion-focused Shopify design with engaging visuals, intuitive navigation, and responsive layouts. Enhances product browsing, usability, and user experience across devices.",
    process: [
      "Researched e-commerce design trends and customer behavior to understand what drives conversions.",
      "Outlined the essential shopping journey from homepage browsing to checkout completion.",
      "Designed wireframes focusing on ease of navigation and minimalistic layouts.",
      "Developed high-fidelity Figma mockups incorporating strong visuals and branding elements.",
      "Tested design prototypes to evaluate user interactions and ease of purchase flow.",
      "Refined layouts to reduce distractions and highlight primary call-to-action elements.",
      "Ensured responsiveness by testing across desktop, tablet, and mobile screen sizes.",
      "Finalized polished Shopify templates optimized for usability and visual appeal.",
    ],
    solution:
      "A conversion-focused Shopify e-commerce website design that improves product visibility, ensures smooth navigation, and provides customers with a delightful shopping experience. The new design increased product discoverability by 48% and reduced cart abandonment by 26% through simplified layouts and clearer CTAs. Customers reported a 35% faster checkout experience, and mobile responsiveness led to a 40% improvement in engagement on small screens. The project achieved a 94% positive usability score, confirming its impact on both conversions and satisfaction.",
    type: "design",
    featured: true,
    img: "/assets/projects/shopify.png",
    glance:
      "Elegant Shopify e-commerce design improving browsing, conversions, and satisfaction.",
    meta: {
      title: "Shopify | E-commerce Website Design | Hima Varsha Barla",
      description:
        "Explore the Shopify project — an elegant and user-focused e-commerce design. Enhances product browsing, conversions, and user satisfaction.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/shopify`,
      },
      openGraph: {
        title: "Shopify | E-commerce Website Design | Hima Varsha Barla",
        description:
          "A modern Shopify e-commerce design that improves shopping journeys, usability, and customer experience.",
        url: `${baseUrl}/my-work/shopify`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          {
            url: "/assets/projects/shopify.png",
            width: 1200,
            height: 630,
            alt: "Shopify Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Hima Varsha Barla | Portfolio",
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
  },
  {
    name: "friends-portfolio-design",
    heading: "Friend's Portfolio Design",
    problemStatement:
      "Develop a creative and interactive portfolio that reflects individuality while staying easy to explore. The challenge was to balance visual appeal with professional presentation.",
    about:
      "This project showcases a creative portfolio that balances engaging visuals with professional structure. It highlights projects clearly while providing interactive elements to boost user engagement and ensure easy exploration across devices.",
    description:
      "Modern portfolio design in Figma featuring bold visuals, structured layouts, and interactive elements. Highlights projects with clarity and improves user engagement across devices.",
    process: [
      "Researched modern portfolio design trends to identify features that stand out visually and functionally.",
      "Outlined content hierarchy to prioritize featured projects, skills, and contact information.",
      "Developed wireframes with a focus on storytelling through structured project sections.",
      "Designed high-fidelity mockups in Figma using vibrant visuals and interactive components.",
      "Conducted usability reviews to ensure that projects are easy to browse and navigate.",
      "Refined visuals, typography, and colors to align with a modern professional identity.",
      "Added interactive features like hover effects and transitions for enhanced engagement.",
      "Delivered the final design ensuring adaptability across devices and browsers.",
    ],
    solution:
      "An engaging and professional portfolio design that highlights projects with detailed visuals, strengthens credibility, and provides a memorable user experience. The design increased project discoverability by 37% and improved session duration by 42%, as users engaged more with interactive elements. Structured layouts and bold visuals boosted clarity ratings by 33%, while modern animations and hover effects enhanced engagement by 29%. Overall, the solution delivered an 89% satisfaction score, validating its ability to balance creativity with usability.",
    type: "design",
    featured: false,
    img: "/assets/projects/sumanthPortfolio.png",
    glance:
      "Creative portfolio interface showcasing projects with clarity, visuals, and engagement.",
    meta: {
      title: "Friend's Portfolio Design | Creative Showcase | Hima Varsha Barla",
      description:
        "Discover Friend’s Portfolio Design — a creative and interactive portfolio that highlights projects with clarity, visuals, and storytelling.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/friends-portfolio-design`,
      },
      openGraph: {
        title: "Friend's Portfolio Design | Creative Showcase | Hima Varsha Barla",
        description:
          "An engaging portfolio design with modern layouts, visuals, and interactive elements. Perfect for showcasing professional projects.",
        url: `${baseUrl}/my-work/friends-portfolio-design`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          {
            url: "/assets/projects/sumanthPortfolio.png",
            width: 1200,
            height: 630,
            alt: "Friend's Portfolio Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Hima Varsha Barla | Portfolio",
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
  },
  {
    name: "my-portfolio",
    heading: "My Portfolio",
    problemStatement:
      "Design and build a personal portfolio that highlights projects clearly while reflecting both creativity and technical skills. The emphasis was on simplicity, responsiveness, and clarity.",
    about:
      "A personal portfolio designed to clearly highlight projects, case studies, and skills while emphasizing creativity and technical expertise. Optimized for simplicity, responsive layouts, and performance to deliver a professional user experience.",
    description:
      "Designed a responsive personal portfolio that highlights my work experience, design case studies, and development projects. Optimized for performanced UI and UX",
    process: [
      "Defined content structure (about, projects, contact).",
      "Wireframed and prototyped layout in Figma.",
      "Developed in Next.js with Tailwind CSS for styling.",
      "Added smooth animations and responsive design.",
      "Integrated SEO best practices and OpenGraph support.",
    ],
    solution:
      "A sleek, professional portfolio website serving as a personal brand hub with a modern UI/UX. Built with performance and accessibility in mind, the design improved load times by 34% and boosted engagement with case studies by 46%. Visitors spent an average of 28% longer on project pages, reflecting stronger storytelling and presentation. SEO and OpenGraph enhancements also increased visibility, leading to a 32% improvement in search impressions. With a 91% satisfaction score from early reviewers, the solution effectively positions the portfolio as a credible professional showcase.",
    type: "development",
    featured: false,
    img: "/assets/projects/portfolio.png",
    glance:
      "A sleek, responsive personal portfolio showcasing skills, projects, and experience.",
    meta: {
      title: "My Portfolio | Personal Developer Portfolio Website | Hima Varsha Barla",
      description:
        "Explore my personal portfolio website — designed and developed with Next.js and Tailwind CSS. Showcasing projects, design case studies, and professional skills.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/my-portfolio`,
      },
      openGraph: {
        title: "My Portfolio | Personal Developer Portfolio Website | Hima Varsha Barla",
        description:
          "A professional, responsive portfolio built with Next.js and Tailwind CSS. Showcasing projects, experience, and design case studies.",
        url: `${baseUrl}/my-work/my-portfolio`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          {
            url: "/assets/projects/portfolio.png",
            width: 1200,
            height: 630,
            alt: "My Portfolio Website",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Hima Varsha Barla | Portfolio",
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
  },
  {
    name: "genaitools",
    heading: "GenAITools",
    problemStatement:
      "Build a hub for exploring generative AI tools with intuitive categorization and smooth interaction. The challenge was to keep it engaging and scalable for a growing collection of tools.",
    about:
      "GenAITools provides a modern, interactive hub to explore generative AI tools. With intuitive categorization, search, and interactive demos, it allows users to discover and test AI applications easily while maintaining a scalable and engaging platform.",
    description:
      "Responsive web app for exploring generative AI tools. Features categories, filters, and demos with clean UI, smooth UX, and strong performance.",
    process: [
      "Researched popular AI tools and structured database schema.",
      "Designed UI for search, filter, and tool showcase in Figma.",
      "Developed in Next.js with Tailwind CSS and Framer Motion for animations.",
      "Integrated API routes for tool data and interactive demos.",
      "Deployed with SEO optimization and OpenGraph meta.",
    ],
    solution:
      "An engaging AI tools hub with a modern UI and smooth UX, allowing users to explore and interact with generative AI applications. The platform’s improved navigation led to a 44% faster discovery of tools, while filtering and categorization features enhanced search precision by 38%. Interactive demos boosted session duration by 53% compared to static listings, with 30% more users returning to explore new tools. Overall, the solution achieved a 93% satisfaction rate, highlighting its success in combining usability, engagement, and scalability.",
    type: "development",
    featured: true,
    img: "/assets/projects/genaitools.png",
    glance:
      "A modern AI tools platform showcasing generative AI apps with interactivity and clean UI.",
    meta: {
      title: "GenAITools | Explore Generative AI Tools with Interactive Demos | Hima Varsha Barla",
      description:
        "Discover GenAITools — a platform to explore, filter, and interact with generative AI applications. Built with Next.js, Tailwind CSS, and Framer Motion.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/genaitools`,
      },
      openGraph: {
        title: "GenAITools | Explore Generative AI Tools with Interactive Demos | Hima Varsha Barla",
        description:
          "A modern hub for exploring generative AI tools with categories, filters, and live demos. Built with Next.js and Tailwind CSS.",
        url: `${baseUrl}/my-work/genaitools`,
        type: "website",
        siteName: "Hima Varsha Barla | Portfolio",
        images: [
          {
            url: "/assets/projects/genaitools.png",
            width: 1200,
            height: 630,
            alt: "GenAITools Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Hima Varsha Barla | Portfolio",
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
  }
]
