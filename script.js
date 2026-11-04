
/* =====================================
   DEV ORGANIZERS - JAVASCRIPT
===================================== */

// BUSINESS CONFIGURATION
// Replace this number with your WhatsApp number.
// Include country code 91, without + or spaces.

const WHATSAPP_NUMBER = "91XXXXXXXXXX";


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// GALLERY FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        galleryItems.forEach(item => {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});


// EVENT DATE VALIDATION

const eventDate = document.getElementById("date");

function setMinimumDate() {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    eventDate.min = formattedDate;

}

setMinimumDate();


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check form validity

    if (!bookingForm.checkValidity()) {

        bookingForm.reportValidity();

        return;

    }

    // Get form values

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const eventType = document.getElementById("eventType").value;

    const date = document.getElementById("date").value;

    const guests = document.getElementById("guests").value;

    const location = document.getElementById("location").value.trim();

    const budget = document.getElementById("budget").value;

    const requirements =
        document.getElementById("requirements").value.trim();


    // Check for empty required information

    if (
        !name ||
        !phone ||
        !email ||
        !eventType ||
        !date ||
        !location
    ) {

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }


    // Check WhatsApp configuration

    if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {

        formMessage.textContent =
            "The WhatsApp number is not configured yet. Please contact the website administrator.";

        return;

    }


    // Create inquiry message

    const message = `
NEW EVENT INQUIRY
----------------------------

Organization: DEV ORGANIZERS

CUSTOMER DETAILS

Name: ${name}
Phone: ${phone}
Email: ${email}

EVENT DETAILS

Event Category: ${eventType}
Event Date: ${date}
Expected Guests: ${guests || "Not specified"}
Event Location: ${location}
Estimated Budget: ${budget || "Not specified"}

ADDITIONAL REQUIREMENTS

${requirements || "No additional requirements provided."}

----------------------------
Sent through DEV ORGANIZERS website.
`;


    // Encode message for WhatsApp

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    // Display instructions

    formMessage.textContent =
        "Your inquiry is ready. WhatsApp will open so you can review and send your message.";

    // Open WhatsApp

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});


// FOOTER WHATSAPP LINK

const footerWhatsApp = document.getElementById("footerWhatsApp");

footerWhatsApp.addEventListener("click", function(event) {

    event.preventDefault();

    if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {

        alert("Please configure the official WhatsApp number in script.js.");

        return;

    }

    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}`,
        "_blank",
        "noopener,noreferrer"
    );

});


// CONSOLE MESSAGE

console.log(
    "DEV ORGANIZERS website JavaScript loaded successfully."
);
