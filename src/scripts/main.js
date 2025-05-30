// This file contains JavaScript code for the Jurassic Park-themed website, focusing on Fishwin's interactivity and dynamic content.

document.addEventListener('DOMContentLoaded', () => {
    const fishwinProfile = document.getElementById('fishwin-profile');
    const fishwinButton = document.getElementById('show-fishwin');

    fishwinButton.addEventListener('click', () => {
        fishwinProfile.classList.toggle('hidden');
    });

    // Example of dynamic content related to Fishwin
    const fishwinData = {
        name: "Fishwin",
        description: "A unique character that is part fish and part force of nature, known for their charming personality and distinctive floral-patterned shirt.",
        image: "images/fishwin.png" // Placeholder for Fishwin's image
    };

    const renderFishwinProfile = () => {
        fishwinProfile.innerHTML = `
            <h2>${fishwinData.name}</h2>
            <img src="${fishwinData.image}" alt="${fishwinData.name}" />
            <p>${fishwinData.description}</p>
        `;
    };

    renderFishwinProfile();
});