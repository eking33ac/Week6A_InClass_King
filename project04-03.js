// Step 3
"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Ezri King
      Date:   04/24/2025

      Filename: project04-03.js
*/

// Maximum Length of Review
// Step 8
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue"); // Step 6
let warningBox = document.getElementById("warningBox"); // Step 6


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   // Step 6
   let commentText = document.getElementById("comment").value; // Step 6
   let charCount = countCharacters(commentText); // Step 6
   
   // Step 4
   try {
      // Step 4a
      if (charCount > MAX_REVIEW) {
         throw "You have exceeded the character count limit"
      }
   }
   catch (err){
      // Step 4b
      warningBox.innerHTML = err;
   }
   finally {
      // Step 4c
      wordCountBox.innerHTML = charCount;
   }
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 