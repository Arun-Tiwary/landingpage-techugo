import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  // { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-warning bg-opacity-20",
    price: "$93,291.24",
    mark: "$94,040.99 (-0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    price: "$3,128.84",
    mark: "$4,878.26 (-35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Bitcoin Cash ",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning bg-opacity-20",
    price: "$443.27",
    mark: "$3,785.82 (-88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    price: "$86.11",
    mark: "$410.26 (-79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "$238.70",
    mark: "$259.96 (-8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Manage your portfolio",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Vault protection",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Mobile apps",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "A Fraction of the Cost" },
  { title: "More Durable" },
  { title: "Easier to Use" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "Tell us what you need",
    text: "Pick a category, add details, and set your time window.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Compare & book",
    text: "See verified pros, reviews, and prices. Confirm in a tap.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/icons/lock.svg",
    title: "Pay securely",
    text: "Cashless payments with receipts and buyer protection.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const features = [
  {
    title: "Verified Providers",
    icon: "images/icons/verified.svg",
    description:
      "All professionals are background-checked and vetted for quality and safety.",
  },
  {
    title: "Instant Booking",
    icon: "images/icons/clock.svg",
    description: "Book a service in seconds. No back and forth.",
  },
  {
    title: "Choose Your Service Provider",
    icon: "images/icons/clock.svg",
    description:
      "Browse through verified professionals, compare ratings, and select the one that best fits your needs",
  },
  {
    title: "Transparent Pricing and Secure Payments",
    icon: "images/icons/lock.svg",
    description:
      "Transparent pricing and secure cashless transactions.No hidden charges. Know exactly what you’re paying for with upfront pricing before you confirm your booking.",
  },
  {
    title: "Background Checks",
    icon: "images/icons/id.svg",
    description:
      "ID and criminal checks help keep both customers and providers safe.",
  },
  {
    title: "Real-Time Live Tracking",
    icon: "images/icons/tracking.svg",
    description:
      "Track your service professional in real time. Know when they’re on the way and when they arrive — all within the app.",
  },
  {
    title: "Book Your Service – Choose Time & Date",
    icon: "images/icons/clock.svg",
    description:
      "Plan your service at your convenience. Select your preferred date and time, and we’ll be there — right on schedule.",
  },
  {
    title: "Customer Support",
    icon: "images/icons/support.svg",
    description:
      "Our support team is ready to help — before, during, and after your service.",
  },
];

export const services = [
  {
    title: "Beauty & Wellness",
    description:
      "Pamper yourself at home with salon, spa, and grooming services by certified professionals.",
    image: "/images/services/beauty.png",
  },
  {
    title: "Home Cleaning & Maintenance",
    description:
      "Deep cleaning, kitchen scrubs, bathroom sanitation — spotless results, every time.",
    image: "/images/services/cleaning.png",
  },
  {
    title: "Pipe Installation & Replacement",
    description:
      "Expert plumbing for leak fixes, pipe fittings, and hassle-free water flow solutions.",
    image: "/images/services/plumbing.png",
  },
  {
    title: "AC Repair & Servicing",
    description:
      "Keep your cool with quick AC checkups, gas refills, and full maintenance.",
    image: "/images/services/ac.png",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Transform your space with clean, professional-grade painting inside and out.",
    image: "/images/services/painting.png",
  },
  {
    title: "Furniture Repair & Assembly",
    description:
      "Whether it’s broken, loose, or brand new — we fix and fit it all, right at your place.",
    image: "/images/services/furniture.png",
  },
];
