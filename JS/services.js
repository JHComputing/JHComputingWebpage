// Get all read more buttons
var readMoreBtns = document.querySelectorAll(".read-more-btn");

// Add click event listener to each read more button
readMoreBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Get the modal ID from the data-modal-id attribute
        var modalId = btn.getAttribute("data-modal-id");
        // Get the modal element by ID
        var modal = document.getElementById(modalId);
        // Display the modal
        modal.style.display = "block";
    });
});

// Get all close buttons
var closeBtns = document.querySelectorAll(".close");

// Add click event listener to each close button
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Get the modal element that contains the close button
        var modal = btn.parentElement.parentElement;
        // Hide the modal
        modal.style.display = "none";
    });
});