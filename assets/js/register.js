// Initialize flag ropdownm -->

const phoneInput = document.querySelector("#phone");

    window.intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
    });