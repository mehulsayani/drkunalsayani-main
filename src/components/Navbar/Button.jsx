import React, { useEffect } from "react";

export default function KiviHealthAppointment() {
  useEffect(() => {
    // Load jQuery
    const loadJquery = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
      script.onload = resolve;
      document.head.appendChild(script);
    });

    // Load Bootstrap and Widget CSS after jQuery is ready
    loadJquery.then(() => {
      const bootstrapScript = document.createElement("script");
      bootstrapScript.src = "https://cdn.kivihealth.com/twitter-bootstrap/3.3.6/js/bootstrap.min.js";
      bootstrapScript.async = true;
      document.body.appendChild(bootstrapScript);

      const widgetCSS = document.createElement("link");
      widgetCSS.rel = "stylesheet";
      widgetCSS.href = "https://files.kivihealth.com/assets/css/widget.css";
      document.head.appendChild(widgetCSS);
    });

    // Structured Data (fixed image URL)
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.innerHTML = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "MedicalOrganization",
      "image": "https://files.kivihealth.com/cache/profile_pic/20230526124102_18974.jpeg",
      "@id": "https://kivihealth.com/clinic/tvameva-clinic",
      "name": "TVAMEVA AESTHETICS ",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "501/502, Sapphire Plaza, Dadabhai Road",
        "addressLocality": "Vileparle West",
        "addressRegion": "Mumbai",
        "postalCode": "400056",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.105925",
        "longitude": "72.841313"
      },
      "telephone": "9967267567",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://kivihealth.com/iam/kunal.sayani.68p1u4blxsrm/bookslot",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Book an Appointment"
        }
      },
      "priceRange": "$"
    });
    document.head.appendChild(structuredData);
  }, []);

  // Manual fallback to trigger modal
  const handleBookClick = () => {
    const $ = window.jQuery;
    if ($) {
      $("#bookappointment").modal("show");
    } else {
      alert("Modal failed to load. Please try again later.");
    }
  };

  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="bookappointment" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title themeColor" id="myModalLabel">Appointment Details</h4>
            </div>
            <div className="modal-body kivi_modal_body">
              <iframe
                id="MainPopupIframe"
                src="https://kivihealth.com/iam/raju.rao.dak9cn1y96g2/bookslot"
                width="100%"
                height="500"
                style={{ border: "none" }}
                title="Book Appointment"
                allow="fullscreen; geolocation; microphone; camera; payment"
              ></iframe>
            </div>
            <div className="modal-footer" style={{ textAlign: "left" }}></div>
          </div>
        </div>
      </div>

      {/* Book Button */}
      <span>
        <button
          onClick={handleBookClick}
          type="button"
          className="btn kivi_bookappt_btn kivi_bookappt_btn-labeled btn-primary"
        >
          Book Appointment
        </button>
        <a
          href="https://kivihealth.com"
          className="_kivi_powered_container"
          target="_blank"
          rel="noopener noreferrer"
          title="Search and Book Appointment with Plastic Surgeon in Mumbai"
        >
          <span style={{ color: "#424748" }}>
            <span style={{ fontSize: "11px", marginRight: "0px" }}>Powered By</span>
            <span> kivihealth.com</span>
          </span>
        </a>
      </span>
    </>
  );
}
