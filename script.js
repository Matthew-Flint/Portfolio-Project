// Function to highlight words
const highlightWords = (array) => {
    let paragraph = document.querySelector('p'); // Select the paragraph
    let text = paragraph.innerHTML; // Get the paragraph's HTML content

    // Loop through the array of words and replace them with highlighted versions
    array.forEach(word => {
        if (word === "HTML") {
            text = text.replace(/HTML/g, '<span style="color: red;">HTML</span>');
        } else if (word === "CSS") {
            text = text.replace(/CSS/g, '<span style="color: blue;">CSS</span>');
        } else if (word === "JavaScript") {
            text = text.replace(/JavaScript/g, '<span style="color: yellow;">JavaScript</span>');
        }
    });

    // Update the paragraph's HTML with highlighted words
    paragraph.innerHTML = text;
}

// Add an event listener to the image
document.getElementById('skills').addEventListener('click', () => {
    const wordsToHighlight = ["HTML", "CSS", "JavaScript"]; // Words to highlight
    highlightWords(wordsToHighlight); // Call the highlight function on click
});
