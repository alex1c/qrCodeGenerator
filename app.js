/* JS for demo only */
const colors = [
  "1abc9c",
  "2c3e50",
  "2980b9",
  "7f8c8d",
  "f1c40f",
  "d35400",
  "27ae60",
];
const colorBlock = document.querySelector(".color-picker");

colors.forEach(function (color) {
  itemColor = document.createElement("div");
  itemColor.classList.add("dquare");
  itemColor.style.backgroundColor = "#" + color;
  itemColor.innerHTML = "==========";
  colorBlock.append(itemColor);
});

/*
 * Original version at
 * http://red-team-design.com/making-html-dropdowns-not-suck
 */

const width = document.querySelector(".custom-dropdown-option");
if ((width.value = "100x100")) {
  widthValue = 100;
} else if ((width.value = "128x128")) {
  widthValue = 128;
} else if ((width.value = "256x256")) {
  widthValue = 256;
} else if ((width.value = "512x512")) {
  widthValue = 512;
} else if ((width.value = "1024x1024")) {
  widthValue = 1024;
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: widthValue,
  height: widthValue,
  colorDark: "#FF4500",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

function makeCode() {
  var elText = document.getElementById("text");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
