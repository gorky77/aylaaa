// Request to Call function
function requestCall(productName) {
    const contactNumber = "+1-234-567-890"; // İletişim numarasını burada tanımlayın
    alert(`For more details about the ${productName}, please call us at ${contactNumber}.`);
}
// "CALL FOR PRICE" düğmesine tıklandığında iletişim numarası göstermek için
document.addEventListener("DOMContentLoaded", () => {
    const callButtons = document.querySelectorAll(".call-button");

    callButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("For pricing information, please call us at +1-800-265-5747.");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-section");
    aboutSection.style.opacity = 0;
    aboutSection.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => aboutSection.style.opacity = 1, 200);
});

