function toggleInfo(button) {
    const info = button.nextElementSibling;
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.textContent = "Menos Informações";
    } else {
        info.style.display = "none";
        button.textContent = "Mais Informações";
    }
}
