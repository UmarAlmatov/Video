let video = Number(prompt("What year were you born?"));
let years = 2024 - video;
firstHTML = `   <div class="box"><video src="./Second.mp4" loop autoplay controls></video></div>
`;
secondHTML = `  <div class="box"><video src="./First.mp4" loop autoplay controls ></video></div>
`;
years >= 18
  ? (document.body.innerHTML = firstHTML)
  : (document.body.innerHTML = secondHTML);
