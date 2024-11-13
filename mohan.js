function upDate(previewPic) {
    console.log("Mouse over:", previewPic.alt);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}

function addTabIndex() {
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach((figure, index) => {
        figure.setAttribute('tabindex', '0');
        console.log(`Tabindex added to figure ${index + 1}`);
    });
}
