
// Create a center tag to center all the elements
var center = document.createElement('center');

// Create a table element
var ColoringGrid = document.createElement('table');
for (var i = 0; i < 16; i++) {

    // Create a row
    var tr = document.createElement('tr');
    for (var j = 0; j < 16; j++) {

    // Create a cell
    var td = document.createElement('td');
    td.setAttribute('style', 'background: orange; height: 20px; width: 20px; border: 1px solid grey;');
    tr.appendChild(td);
    }

    // Append the row
    ColoringGrid.appendChild(tr);
}
center.appendChild(ColoringGrid);

// Modifying table attribute properties
ColoringGrid.setAttribute('cellspacing', '0');
ColoringGrid.setAttribute('style', 'width: auto; border: 1px solid black');
document.body.appendChild(center);
