// components/OrganizationJSONLD.js
import React from "react";

const OrganizationJSONLD = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ÉtherCode",
        url: "https://www.ethercode.com.ar",
        logo: "https://www.ethercode.com.ar/img-logo/ÉtherCodeSlogan.png",
        description:
          "ÉtherCode ofrece soluciones tecnológicas innovadoras para impulsar tu negocio.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+549 38843988439",
          contactType: "Customer Service",
        },
      }),
    }}
  />
);

export default OrganizationJSONLD;
