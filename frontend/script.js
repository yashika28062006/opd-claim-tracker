const form = document.getElementById("claimForm");
const claimsList = document.getElementById("claimsList");

// Submit form
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const hospitalInput = document.getElementById("hospital");
  const amountInput = document.getElementById("amount");

  const name = nameInput.value;
  const hospital = hospitalInput.value;
  const amount = amountInput.value;

  try {
    const res = await fetch("http://localhost:5001/claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, hospital, amount })
    });

    const data = await res.json();

    // ✅ Clear inputs
    nameInput.value = "";
    hospitalInput.value = "";
    amountInput.value = "";

    // Focus back to first input
    nameInput.focus();

    // Reload claims
    loadClaims();

  } catch (error) {
    console.error("Error submitting claim:", error);
    alert("Something went wrong!");
  }
});

// Load claims
async function loadClaims() {
  try {
    const res = await fetch("http://localhost:5001/claims");
    const data = await res.json();

    claimsList.innerHTML = "";

    data.forEach(claim => {
      const div = document.createElement("div");
      div.className = "claim";

      // 🎨 Status class for badge
      let statusClass = "pending";
      if (claim.status === "Approved") statusClass = "approved";
      if (claim.status === "Under Review") statusClass = "review";

      div.innerHTML = `
        <strong>${claim.name}</strong><br>
        Hospital: ${claim.hospital}<br>
        Amount: ₹${claim.amount}<br><br>

        <span class="status ${statusClass}">
          ${claim.status}
        </span><br><br>

        <small>ID: ${claim.id}</small><br>
        <small>${new Date(claim.createdAt).toLocaleString()}</small>
      `;

      claimsList.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading claims:", error);
  }
}

// Initial load
loadClaims();