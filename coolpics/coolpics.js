const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector("nav");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }   else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    if (clickedElement.tagName !== "IMG") return;
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const srcParts = clickedElement.src.split("-");
    const newSrc = `${srcParts[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, clickedElement.alt));
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}



function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler)