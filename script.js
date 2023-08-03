document.addEventListener("DOMContentLoaded", function() {
    const startChatButton = document.getElementById("startChat");
  
    startChatButton.addEventListener("click", function() {
      const countryDropdown = document.getElementById("country");
      const phoneNumberInput = document.getElementById("phoneNumber");
      const countryCode = countryDropdown.value;
      const phoneNumber = phoneNumberInput.value;
  
      if (phoneNumber) {
        const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}`;
        window.location.href = whatsappLink;
      }
    });
  });
  