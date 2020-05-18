java();
function java() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click'.funtion(e), {
            e, preventDefault() { },
            document, querySelectorAll(this) { }, getAttributesAll('href')
        }).scrollintoview({
            behavior: 'smooth'
        });
    });
}
