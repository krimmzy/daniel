document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".item");
  
    // Default category (set to "social-media-manager", "video-editing", or "graphics-design")
    const defaultCategory = "social-media-manager";
  
    // Function to filter items
    const filterItems = (category) => {
      items.forEach(item => {
        if (item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
  
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === category);
      });
    };
  
    // Set default category on load
    filterItems(defaultCategory);
  
    // Add event listeners to buttons
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.dataset.filter;
        filterItems(category);
      });
    });
  });

