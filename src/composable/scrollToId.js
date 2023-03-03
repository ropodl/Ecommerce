export function scrollToId(id) {
  document.getElementById(id).scrollIntoView({
    offset: 100,
    behavior: "smooth",
  });
}
