

import $ from "jquery";
import "owl.carousel";

// Animation
var textValues = ["Crafting compelling web designs", "Crafting visual stories for your brand", "Innovating the way we design the web.", "Elevating your brand through great design"];
var currentTextIndex = 0;
var currentCharacterIndex = 0;
var typingSpeed = 100; //milliseconds per character

function updateText() {
  var currentTextValue = textValues[currentTextIndex];
  var currentTextElement = document.querySelector('.animation-text');
  if (currentCharacterIndex < currentTextValue.length) {
    currentTextElement.textContent += currentTextValue.charAt(currentCharacterIndex);
    currentCharacterIndex++;
    setTimeout(updateText, typingSpeed);
  } else {
    setTimeout(function() {
      currentCharacterIndex = 0;
      currentTextIndex++;
      if (currentTextIndex >= textValues.length) {
        currentTextIndex = 0;
      }
      currentTextElement.textContent = "";
      updateText();
    }, 1000); //pause for 1 second before starting next text
  }
}

updateText();



