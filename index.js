// Remove the <main id="main">
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and assign to newHeader
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content
newHeader.textContent = "Vincent is the champion";

// Append it to the body (so it's visible in the DOM)
document.body.appendChild(newHeader);
