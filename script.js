const travelData = [
  { title: "Top 10 Beaches in the World", category: "destinations", date: "2024-11-01" },
  { title: "A Guide to Solo Travel", category: "guides", date: "2024-10-15" },
  { title: "5 Packing Tips for Hassle-Free Travel", category: "tips", date: "2024-11-10" },
  { title: "Explore Paris: Must-See Attractions", category: "destinations", date: "2024-10-28" },
  { title: "How to Save Money While Traveling", category: "tips", date: "2024-11-05" },
];

document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  // Filter results based on query and category
  let filteredResults = travelData.filter(item => 
      (category === "all" || item.category === category) &&
      item.title.toLowerCase().includes(query)
  );

  // Sort results based on selected option
  if (sort === "date") {
      filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Display results
  displayResults(filteredResults);
});

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  if (results.length) {
      resultsContainer.innerHTML = results.map(result => `
          <div class="result-item">
              <h3>${result.title}</h3>
              <p>${capitalize(result.category)} - ${formatDate(result.date)}</p>
          </div>
      `).join("");
  } else {
      resultsContainer.innerHTML = "<p>No results found.</p>";
  }
}

// Helper functions
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
