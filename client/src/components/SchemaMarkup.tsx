import { useEffect } from "react";

const SCHEMA_ID = "polished-maids-jsonld";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://polishedmaids-betrprki.manus.space/#business",
  name: "Polished Maids Cleaning Service",
  description:
    "Professional residential and commercial cleaning services in Northeast Ohio. Insured, detail-oriented, and trusted since 2018.",
  url: "https://polishedmaids-betrprki.manus.space",
  telephone: "+1-330-242-7203",
  email: "polishedmaidsohio@gmail.com",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Jess",
  },
  image: "https://polishedmaids-betrprki.manus.space/manus-storage/logo_7fd8cea4.png",
  logo: "https://polishedmaids-betrprki.manus.space/manus-storage/logo_7fd8cea4.png",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  areaServed: [
    { "@type": "City", name: "Medina", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Akron", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Cleveland", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Canton", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Fairlawn", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Wooster", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Brecksville", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Broadview Heights", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Brunswick", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Wadsworth", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Strongsville", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "North Royalton", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Copley", containedInPlace: { "@type": "State", name: "Ohio" } },
    { "@type": "City", name: "Bath", containedInPlace: { "@type": "State", name: "Ohio" } },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "OH",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.1382,
    longitude: -81.8637,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Adam Loomis" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I've had the pleasure of having Polished Maids clean my home, and I couldn't be happier with their service! From start to finish, they were professional, thorough, and incredibly detail-oriented.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sean & Sylvia Bradford" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Jess has been cleaning our home for almost 2.5 years and we are very happy with the services. She is flexible and often works around my work schedule since I work from home.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rachel Kilgore" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We switched to Polished Maids about 3 months ago and we could not be happier! Their attention to detail and thoroughness is top notch.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Cody Grimm" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Jess and her team are the best cleaning service my family has used since moving to Medina. We are on a bi-weekly schedule and we wouldn't change a thing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Darin Ellinger" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Wish I could give her 10 stars. So impressed. Jess did such an amazing job. My kitchen has never looked better! Highly recommend.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Residential Cleaning", description: "Thorough home cleaning tailored to your needs" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercial Cleaning", description: "Professional office and workspace cleaning" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Deep Cleaning", description: "Intensive top-to-bottom cleaning for every surface" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Construction Cleaning", description: "Post-build cleaning that makes new spaces move-in ready" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AIRBNB & Vacation Rental Cleaning", description: "Quick turnovers to keep properties guest-ready" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Appliance Cleaning", description: "Specialized deep cleaning for kitchen appliances" },
      },
    ],
  },
  sameAs: [],
};

export default function SchemaMarkup() {
  useEffect(() => {
    // Remove any existing schema script to avoid duplicates
    const existing = document.getElementById(SCHEMA_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCHEMA_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(SCHEMA_ID);
      if (el) el.remove();
    };
  }, []);

  return null;
}
