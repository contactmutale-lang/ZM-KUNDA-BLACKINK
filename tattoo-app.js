// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Tattoo app script loaded and DOM fully loaded");

    // Handle the upload form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        const designUpload = document.getElementById('designUpload');
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const file = designUpload.files[0];
            if (file) {
                console.log("File selected for upload:", file.name);
                alert(`Design "${file.name}" selected for upload. Backend logic will handle the upload process.`);
            } else {
                alert("Please select a file to upload.");
            }
        });
    }

    // Handle the booking form
    const bookingForm = document.getEventById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('bookingName').value;
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;

            if (name && date && time) {
                console.log("Booking details:", { name, date, time });
                alert(`Booking request for ${name} on ${date} at ${time} received. Backend logic will confirm availability.`);
            } else {
                alert("Please fill in all fields to check availability.");
            }
        });
    }

    // Log for debugging
    console.log("Event listeners for upload and booking forms are set up.");
});
