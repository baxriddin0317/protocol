
// guides
const guides = [
  {
    href: '/authentication',
    name: 'Authentication',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/pagination',
    name: 'Pagination',
    description: 'Understand how to work with paginated responses.',
  },
  {
    href: '/errors',
    name: 'Errors',
    description:
      'Read about the different types of errors returned by the API.',
  },
  {
    href: '/webhooks',
    name: 'Webhooks',
    description:
      'Learn how to programmatically configure webhooks for your app.',
  },
];

const guidesContainer = document.getElementById('guidesContainer');

// Loop through the guides array and create HTML elements dynamically
guides.forEach(guide => {
  const guideElement = document.createElement('div');
  guideElement.innerHTML = `
    <div>
      <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">
        ${guide.name}
      </h3>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
        ${guide.description}
      </p>
      <p class="mt-4">
        <a href="${guide.href}" class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500">
          <span>Read more</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 relative top-px -mr-1"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path></svg>
        </a>
      </p>
    </div>
  `;
  guidesContainer.appendChild(guideElement);
});

// resources
const resources = [
  {
    href: '/contacts',
    name: 'Contacts',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: 'UserIcon',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/conversations',
    name: 'Conversations',
    description:
      'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
    icon: 'ChatBubbleIcon',
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/messages',
    name: 'Messages',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: 'EnvelopeIcon',
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/groups',
    name: 'Groups',
    description:
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
    icon: 'UsersIcon',
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
];

const resourcesContainer = document.getElementById('resourcesContainer');

// Loop through the resources array and create HTML elements dynamically
resources.forEach(resource => {
  const resourceElement = document.createElement('div');
  resourceElement.className = 'group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5';
  resourceElement.innerHTML = `
    <div class="pointer-events-none">
      <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"><defs><pattern id=":ro:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="${resource.pattern.y}"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:ro:)"></rect><svg x="50%" y="${resource.pattern.y}" class="overflow-visible">${getPatternSVG(resource.pattern.squares)}</svg></svg>
      </div>
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]" style="mask-image: radial-gradient(180px at 181px 190px, white, transparent);"></div>
    </div>
    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
    <div class="relative rounded-2xl px-4 pb-4 pt-16">
      <div class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
        ${getIconSVG(resource.icon)}
      </div>
      <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
        <a href="${resource.href}">
          <span class="absolute inset-0 rounded-2xl"></span>
          ${resource.name}
        </a>
      </h3>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">${resource.description}</p>
    </div>
  `;
  resourcesContainer.appendChild(resourceElement);
});

function getPatternSVG(squares) {
  return squares.map(square => `<rect stroke-width="0" width="73" height="57" x="${square[0]}" y="${square[1]}"></rect>`).join('');
}

function getIconSVG(iconName) {
  // Assuming you have SVG icons stored as strings, you can return the SVG string based on the icon name
  switch (iconName) {
    case 'UserIcon':
      return `<svg viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"><path stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path></svg>`;
    case 'ChatBubbleIcon':
      return `<svg viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"><path stroke-linecap="round" stroke-linejoin="round" d="M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.5h5M8.5 11.5h3"></path></svg>`;
    case 'EnvelopeIcon':
      return `<svg viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"></path></svg>`;
    case 'UsersIcon':
      return `<svg viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"></path><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path></svg>`;
    default:
      return '';
  }
}