export function ScrollToProjects() {
  const proj = document.getElementById("projects");

  if (proj) {
    proj.scrollIntoView({ behavior: "smooth" });
  }
}
