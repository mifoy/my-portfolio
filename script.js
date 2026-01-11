// Sélectionne le html et le bouton
const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");

// Fonction pour changer le thème
toggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);

    // Optionnel : changer le texte du bouton
    toggle.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    // Optionnel : sauvegarder le choix dans localStorage
    localStorage.setItem("theme", newTheme);
});

// Au chargement, on applique le thème sauvegardé si présent
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    toggle.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
}

const projects = document.querySelectorAll(".projinspi");
const modal = document.getElementById("proj1modal");

projects.forEach(project => {
    project.addEventListener("click", () => {
     modal.showModal();
    });
});
