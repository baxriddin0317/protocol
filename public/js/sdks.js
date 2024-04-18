// Define the array of libraries
const libraries = [
  {
    href: '#',
    name: 'PHP',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    logo: 'images/logos/php.svg',
  },
  {
    href: '#',
    name: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: 'images/logos/ruby.svg',
  },
  {
    href: '#',
    name: 'Node.js',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: 'images/logos/node.svg',
  },
  {
    href: '#',
    name: 'Python',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    logo: 'images/logos/python.svg',
  },
  {
    href: '#',
    name: 'Go',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: 'images/logos/go.svg',
  },
];

// Get the container element
const librariesContainer = document.getElementById('librariesContainer');

// Loop through the libraries array and create HTML elements for each library
libraries.forEach(library => {
  // Create a div for each library
  const libraryElement = document.createElement('div');
  libraryElement.className = 'flex flex-row-reverse gap-6';

  // Add content to the library div
  libraryElement.innerHTML = `
    <div class="flex-auto">
      <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">${library.name}</h3>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">${library.description}</p>
      <p class="mt-4">
        <a href="${library.href}" class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500">
          Read more
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 relative top-px -mr-1">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
          </svg>
        </a>
      </p>
    </div>
    <img src="${library.logo}" alt="" class="h-12 w-12" unoptimized>
  `;

  // Append the library div to the libraries container
  librariesContainer.appendChild(libraryElement);
});