document.addEventListener("DOMContentLoaded", () => {
    // Example mock data
    const mockData = [
      {
        id: 1,
        name: "Example Facility 1",
        tankCapacity: 1000, // Tank capacity in liters
        waterLevel: 100, // Current water level in liters
        pumpStatus: "Running",
        valveStatus: "Closed",
        lastUpdate: "14.01.2025 - 11:20",
      },
      {
        id: 2,
        name: "Example Facility 2",
        tankCapacity: 800, // Tank capacity in liters
        waterLevel: 350,
        pumpStatus: "Running",
        valveStatus: "Open",
        lastUpdate: "14.01.2025 - 11:22",
      },
    ];
  
     // Function to get the card border color based on water level percentage
  function getCardBorderColor(percentage) {
    if (percentage < 25) {
      return "danger"; // Red border
    } else if (percentage < 50) {
      return "warning"; // Yellow border
    } else if (percentage < 75) {
      return "primary"; // Blue border
    } else {
      return "success"; // Green border
    }
  }

  // Function to render facilities in the DOM
  function renderFacilities(data) {
    const container = document.getElementById("facility-container");
    container.innerHTML = ""; // Clear previous content

    data.forEach((facility) => {
        const tankCapacityInfo=facility.tankCapacity;
      const waterLevelPercentage = ((facility.waterLevel / facility.tankCapacity) * 100).toFixed(1); // Calculate percentage
      const borderColorClass = getCardBorderColor(waterLevelPercentage); // Determine border color


  
        const card = `
          <div class="col-md-2">
              <div class="card border-${borderColorClass} shadow-0">
              <h5 class="card-header bg-${borderColorClass} text-white">${facility.name}</h5>
              <div class="cylinder-container text-center my-3">
                <div class="cylinder">
                  <div class="water" style="height: ${waterLevelPercentage}%;"></div>
                  <div class="cylinder-top"></div>
                </div>
              </div>
                <div class="card-header">Capacity : ${tankCapacityInfo} m³</div>
              <div class="card-body p-0">
                <table class="table table-bordered mb-0 w-100">
                  <thead class="table-light">
                    <tr>
                      <th>Data</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Water Level</td>
                      <td>${facility.waterLevel} ltrs / ${waterLevelPercentage}%</td>
                    </tr>
                    <tr>
                      <td>Pump Status</td>
                      <td class="${
                        facility.pumpStatus === "Running" ? "text-success" : "text-danger"
                      }">${facility.pumpStatus}</td>
                    </tr>
                    <tr>
                      <td>Valve Status</td>
                      <td class="${
                        facility.valveStatus === "Open" ? "text-success" : "text-danger"
                      }">${facility.valveStatus}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-footer text-center">Update Time: ${facility.lastUpdate}</div>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    }
  
    // Load initial data
    renderFacilities(mockData);
  
    // Simulate data updates every 5 seconds
    setInterval(() => {
      mockData.forEach((facility) => {
        // Randomize water level and update time
        facility.waterLevel = Math.floor(Math.random() * facility.tankCapacity) + 1; // Random value based on tank capacity
        facility.lastUpdate = new Date().toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
      });
  
      // Re-render the DOM with updated data
      renderFacilities(mockData);
    }, 5000);
  });
  