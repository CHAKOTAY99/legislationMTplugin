let frameElement = document.querySelector("iframe");

// `document.querySelector` may return null if the selector doesn't match anything.
if (frameElement) {
    let urlToPdf = frameElement.getAttribute("src").replace("https://legislation.mt//Pdf/web/viewer.html?file=", "");
    window.open(urlToPdf);
}