let gridcontainer = document.querySelector('#gridcontainer');

for (let x = 0; x<16; x++) {
    let row = document.createElement('div');
    for (let y = 0; y<16; y++) {
        let pixel = document.createElement('div');
        pixel.setAttribute('id', 'pixel');
        row.appendChild(pixel);
    }
    gridcontainer.appendChild(row);
}

let draw = document.querySelector('#pixel');

document.addEventListener('mouseover', mouseOver);

function mouseOver() {
  document.getElementById("pixel").style.color = "red";
}


// document.getElementById("pixel").mouseover = function() {mouseOver()};

// function mouseOver() {
//   document.getElementById("pixel").style.color = "red";
// }