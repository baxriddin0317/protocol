document.addEventListener('DOMContentLoaded', () => {
  const navSections = document.querySelectorAll('.heading');
  const absoluteDiv = document.querySelector('.absolute-div');

  if (navSections.length === 0 || !absoluteDiv) {
      console.warn("Required elements not found. Exiting script.");
      return; // Exit if no elements to process
  }

  // Capture the initial top value from the absoluteDiv style
  let initialTop = parseFloat(getComputedStyle(absoluteDiv).top);

  // Function to determine if an element is in the viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.bottom >= 0 && rect.top <= window.innerHeight;
  }

  function updateAbsoluteDiv() {
      let visibleSections = 0;
      let firstVisibleIndex = -1;

      // Determine how many sections are visible and the first visible section
      navSections.forEach((section, index) => {
          if (isInViewport(section)) {
              visibleSections++;
              if (firstVisibleIndex === -1) {
                  firstVisibleIndex = index;
              }
          }
      });

      // Adjust the height based on the number of visible sections
      absoluteDiv.style.height = `${32 * visibleSections}px`;

      // Calculate the top position with initialTop as the base offset
      const newTop = initialTop + 32 * firstVisibleIndex;
      absoluteDiv.style.top = `${newTop}px`;
  }

  // Attach the event listener for scrolling to update the absoluteDiv
  window.addEventListener('scroll', updateAbsoluteDiv);

  // Initial update to ensure correct position and height on page load
  updateAbsoluteDiv();
});
