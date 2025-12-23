
const video = document.getElementById("introVideo");
const playBtn = document.getElementById("playBtn");
const signInBox = document.getElementById("signInBox");
const signInBtn = document.getElementById("signInBtn");

let signInShown = false;

// Start video with sound
playBtn.addEventListener("click", () => {
  video.play();
  playBtn.style.display = "none";
});

// Check remaining time
video.addEventListener("timeupdate", () => {
  const remaining = video.duration - video.currentTime;

  if (remaining <= 3 && !signInShown) { // 3 seconds before end
    signInShown = true;
    signInBox.style.opacity = "1";
    signInBox.style.pointerEvents = "auto";
  }
});

// Redirect
signInBtn.addEventListener("click", () => {
  window.location.href = "landing.html"; // change this
});
