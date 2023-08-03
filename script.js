document.addEventListener("DOMContentLoaded", function() {
    const startChatButton = document.getElementById("startChat");
    const countryDropdown = document.getElementById("country");
  
    // Load country codes from JSON file
    fetch("countryCodes.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(country => {
          const option = document.createElement("option");
          option.value = country.dialCode;
          option.textContent = `${country.name} (${country.dialCode})`;
          countryDropdown.appendChild(option);
        });
  
        // Set default option to India
        const defaultCountryCode = "+91";
        countryDropdown.value = defaultCountryCode;
      })
      .catch(error => console.error("Error loading country codes:", error));
  
    startChatButton.addEventListener("click", function() {
      const phoneNumberInput = document.getElementById("phoneNumber");
      const countryCode = countryDropdown.value;
      const phoneNumber = phoneNumberInput.value;
  
      if (phoneNumber && countryCode) {
        const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}`;
        window.location.href = whatsappLink;
      }
    });
  });

  new TypeIt("#simpleUsage", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
}).go();