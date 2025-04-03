document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');

    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      const formData = {
        ...Object.fromEntries(new FormData(e.target)),
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyB6maTGmGz6Ut8CZZADQ9Cvv-V8hEJqvvvbEfnGxVcZQKV5jhEoT_NHMxxmCa5ItmSJA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Server error");
      }

      alert("✓ Message sent!");
      e.target.reset();
    } catch (error) {
      console.error("Full error:", error);
      alert(
        `✗ Error: ${
          error.message || "Failed to send. Check console for details."
        }`
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Send Message";
    }
  });
