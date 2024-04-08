const frameElement = document.querySelector("iframe");

// `document.querySelector` may return null if the selector doesn't match anything.
if (frameElement) {
    let urlToPdf = frameElement.getAttribute("src").replace("https://legislation.mt//Pdf/web/viewer.html?file=", "");
    console.log(urlToPdf);
    const badge = document.createElement("p");
    // // Use the same styling as the publish information in an article's header
    // badge.classList.add("color-secondary-text", "type--caption");
    // badge.textContent = `⏱️ ${readingTime} min read`;
    //
    // // Support for API reference docs
    // const heading = frameElement.querySelector("h1");
    // // Support for article docs with date
    // const date = frameElement.querySelector("time")?.parentNode;
    //
    // (date ?? heading).insertAdjacentElement("afterend", badge);
}