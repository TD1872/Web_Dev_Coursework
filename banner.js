function openBanner() {
    document.getElementById("contactBanner").style.display = "block";
}

function closeBanner() {
    document.getElementById("contactBanner").style.display = "none";
}

document.getElementById("contactBtn").addEventListener("click", openBanner);
