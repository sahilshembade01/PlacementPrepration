// JavaScript to handle the tips toggle functionality
function toggleTips() {
    var tipsSection = document.getElementById("tips");
    if (tipsSection.style.display === "none" || tipsSection.style.display === "") {
        tipsSection.style.display = "block";
    } else {
        tipsSection.style.display = "none";
    }
}
