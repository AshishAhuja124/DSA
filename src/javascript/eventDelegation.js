document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id); // This will log the clicked element
  window.location.href = '/' + e.target.id; // Redirect to the clicked category
});
