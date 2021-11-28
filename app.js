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
//const colorBlock = document.querySelector(".color-picker");
const colorBlock = document.querySelector(".my-flex-cont");
let currentColor = "#0000CD";

colors.forEach(function (color) {
  itemColor = document.createElement("div");
  itemColor.classList.add("dquare");
  itemColor.classList.add("my-flex-box");
  itemColor.style.backgroundColor = "#" + color;
  itemColor.style.color = "rgba(255,228,181)";
  itemColor.innerHTML = "#" + color;
  itemColor.addEventListener("click", (event) => {
    console.log(event.target.style.backgroundColor);
    currentColor = event.target.style.backgroundColor;
    event.preventDefault();
    document.getElementById("qrcode").innerHTML = "";
    makeCode();
    addSavePicturEvent()
    addFooter();
  });

  colorBlock.append(itemColor);
});

const sizeBlock = document.querySelector(".custom-dropdown-option");
sizeBlock.addEventListener("click", (event) => {
  //console.log(event.target.style.backgroundColor);
  // currentColor = event.target.style.backgroundColor
  event.preventDefault();
  document.getElementById("qrcode").innerHTML = "";
  makeCode();
  addSavePicturEvent();
  addFooter();
});

const inputTextArea = document.querySelector("#text");
inputTextArea.addEventListener("blur", (event) => {
  //console.log(event.target.style.backgroundColor);
  // currentColor = event.target.style.backgroundColor
  event.preventDefault();
  document.getElementById("qrcode").innerHTML = "";
  makeCode();
  addSavePicturEvent()
  addFooter();
});

//const inputTextArea = document.querySelector('#text')
inputTextArea.addEventListener("keydown", (event) => {
  //console.log(event.target.style.backgroundColor);
  // currentColor = event.target.style.backgroundColor
  if (event.keyCode == 13) {
    event.preventDefault();
    document.getElementById("qrcode").innerHTML = "";
    makeCode();
    addSavePicturEvent()
    addFooter();
  }
});

function getCurrentWidth() {
  const width = document.querySelector(".custom-dropdown-option");

  //console.log(width.options.selectedIndex);

  if (width.options.selectedIndex == 0) {
    widthValue = 100;
    return widthValue;
  } else if (width.options.selectedIndex == 1) {
    widthValue = 128;
    return widthValue;
  } else if (width.options.selectedIndex == 2) {
    widthValue = 256;
    return widthValue;
  } else if (width.options.selectedIndex == 3) {
    widthValue = 512;
    return widthValue;
  } else if (width.options.selectedIndex == 4) {
    widthValue = 1024;
    return widthValue;
  }
}

// var qrcode = new QRCode(document.getElementById("qrcode"), {
//   width: widthValue,
//   height: widthValue,
//   colorDark: "#FF4500",
//   colorLight: "#ffffff",
//   correctLevel: QRCode.CorrectLevel.H,
// });

function makeCode() {
  var elText = document.getElementById("text");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: getCurrentWidth(),
    height: widthValue,
    colorDark: currentColor, //"#FF4500",
    colorLight: "#ffffff",
    //text: "rrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    correctLevel: QRCode.CorrectLevel.H,
  });

  qrcode.makeCode(elText.value);
}

makeCode();

function addFooter() {
  const qrCodeBlock = document.getElementById("qrcode");

  const footerBlock = document.createElement("footer");
  footerBlock.classList.add("pt-3");
  footerBlock.classList.add("mt-4");
  footerBlock.classList.add("text-muted");
  footerBlock.classList.add("border-top");

  footerBlock.innerHTML = `&copy; 2021`;

  qrCodeBlock.append(footerBlock);
}

addFooter();

function addSavePicturEvent() {
  const imgQrCode = document.querySelector("img");
  imgQrCode.addEventListener("click", (event) => {
    const base64URL = imgQrCode.src;
    var win = window.open();
    win.document.write(
      '<iframe src="' +
        base64URL +
        '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
    );
  });
}
