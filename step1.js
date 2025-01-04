document.getElementById(Form1).addEventListener("submit"), function(event) {
  const Username = document.getElementById("Username");
  const Region = document.getElementById("Region");
  if (!username.value.trim()) {
    alert("Username is required!");
    event.preventDefault();
    return;
            }
  if (region.value === "0") {
    alert("Please select a region!");
    event.preventDefault();
    return;
            }
};
