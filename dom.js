let form = document.getElementById("meme-form");
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let memeArea = document.getElementById('memes-here');
 
form.addEventListener("submit", function(e){
   e.preventDefault();
  
   //create elements
   let newMeme = document.createElement("div");
   let topTextArea = document.createElement("div");
   let bottomTextArea = document.createElement("div");
   let memeImg = document.createElement("img");
 
   //initialize elements to contain relevant content
   topTextArea.classList.add("topTextArea");
   topTextArea.innerHTML = topText.value;
   bottomTextArea.classList.add("bottomTextArea");
   bottomTextArea.innerHTML = bottomText.value;
   memeImg.src = document.getElementById("url").value;
 
   //change font size if string exceeds a certain length 
   if(topText.value.length > 25){
       topTextArea.style.fontSize = "45px";
   }
   if(bottomText.value.length > 25){
       bottomTextArea.style.fontSize = "45px";
   }
  
   //append everything to the meme and the meme to the meme area on the page
   newMeme.classList.add("newMeme");
   newMeme.appendChild(memeImg);
   newMeme.appendChild(topTextArea);
   newMeme.appendChild(bottomTextArea);
   memeArea.appendChild(newMeme);
 
   //create delete button
   let removeButton = document.createElement("div");
   removeButton.innerHTML = "Delete";
   removeButton.classList.add("removeButton");
 
   //sub-function to identify when delete button appears and what happens when it's clicked
   newMeme.addEventListener("mouseenter", function(e){
       console.log("what");
       newMeme.appendChild(removeButton);
       newMeme.setAttribute("opacity", "0.5");
 
       removeButton.addEventListener("click", function(e) {
           newMeme.remove();
       });
   });
 
   //clear out form inputs
   document.getElementById("url").form.reset();
   document.getElementById("topText").form.reset();
   document.getElementById("bottomText").form.reset();
 
});

