newFunction();
function newFunction() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click'.funtion(e), {
            e, : .preventDefault(),
            document, : .querySelector(this.getAttributesAll('href')).scrollintoview({
                behavior: 'smooth'
            })
        });
    });
}
