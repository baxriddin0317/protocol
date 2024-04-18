document.addEventListener("DOMContentLoaded", function () {
  let sunIcon = document.getElementById("sun-icon");
  let moonIcon = document.getElementById("moon-icon");
  let themeToggle = document.getElementById("theme-toggle");

  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }

  themeToggle.addEventListener("click", function () {
    if (sunIcon.classList.contains("hidden")) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  });
});

// feedback
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const feedbackThanks = document.getElementById("feedbackThanks");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  let submitted = false;

  function onSubmit(event) {
    event.preventDefault();
    const response = event.target.dataset.response;
    if (response === "yes" || response === "no") {
      submitted = true;
      form.classList.add("hidden");
      feedbackThanks.classList.remove("hidden");
    }
  }

  yesButton.addEventListener("click", onSubmit);
  noButton.addEventListener("click", onSubmit);
});

// copy function
function handleCopyButtonClick(event) {
  const button = event.currentTarget;
  const panel = button.closest('[role="tabpanel"]');

  if (!panel) {
    console.error('Unable to find parent panel.');
    return;
  }

  const preElement = panel.querySelector('.pre');

  if (!preElement) {
    console.error('Unable to find pre element inside panel.1');
    return;
  }
  
  const panelContent = preElement.textContent;
  
  navigator.clipboard.writeText(panelContent).then(() => {
    const copiedMessage = button.querySelector('.copied-message');
    const copy = button.querySelector('.copy');
    if (copiedMessage) {
      button.classList.add('bg-emerald-400/10')
      button.classList.add('ring-1')
      button.classList.add('ring-emerald-400/20')
      copiedMessage.classList.remove('hidden');
      copiedMessage.classList.add('flex');
      copy.classList.add('hidden');
      setTimeout(() => {
        button.classList.remove('bg-emerald-400/10')
        button.classList.remove('ring-1')
        button.classList.remove('ring-emerald-400/20')
        copiedMessage.classList.add('hidden');
        copy.classList.remove('hidden');
      }, 2000);
    } else {
      console.error('Unable to find copied message element.');
    }
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

const copyButtons = document.querySelectorAll('.group-button');
copyButtons.forEach(copyButton => {
  copyButton.addEventListener('click', handleCopyButtonClick);
});

// tabs
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