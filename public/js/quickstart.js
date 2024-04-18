
function initializeTabs(tabButtons, tabPanels) {
  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let getLabel = button.getAttribute('aria-label')
      
      tabButtons.forEach(function (btn) {
        btn.classList.remove("border-emerald-500");
        btn.classList.remove("text-emerald-400");
        btn.classList.add("border-transparent");
        btn.classList.add("text-zinc-400");
        btn.classList.add("hover:text-zinc-300");
      });

      button.classList.remove("border-transparent");
      button.classList.remove("text-zinc-400");
      button.classList.remove("hover:text-zinc-300");
      button.classList.add("border-emerald-500");
      button.classList.add("text-emerald-400");
      
      tabPanels.forEach((tab) => {
        let getPanelLabel = tab.getAttribute('aria-label');
        tab.classList.add('hidden')
        if(getLabel == getPanelLabel){
          tab.classList.remove('hidden')
        }
      })
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const tabComponents = document.querySelectorAll(".tab-component");

  tabComponents.forEach(function (tabComponent) {
    const tabButtons = tabComponent.querySelectorAll("[role='tab']");
    const tabPanels = tabComponent.querySelectorAll("[role='tabpanel']");
    initializeTabs(tabButtons, tabPanels);
  });
});

