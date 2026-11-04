
# DEV ORGANIZERS

### Creating Unforgettable Experiences

DEV ORGANIZERS is an event management website designed to showcase professional event planning and coordination services.

## About the Project

This website is developed for an event management organization based in Bengaluru, Karnataka, India.

It provides information about event services, company details, an event inspiration gallery, and an event inquiry system.

## Services

- Wedding Planning
- Birthday Celebrations
- Corporate Events
- College Festivals
- Engagement Ceremonies
- Anniversary Events
- Entertainment Events
- Private Parties
- Decoration and Theme Design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Schema.org Structured Data

## Project Structure

```text
dev-organizers/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation

1. Download or clone this repository.

2. Open the project folder.

3. Open `index.html` in your browser.

No package installation is required.

## Configuration

Before publishing, update the following:

### WhatsApp Number

Open `script.js` and replace:

```javascript
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
```

With your official WhatsApp number, including the country code.

Example format:

```javascript
const WHATSAPP_NUMBER = "919876543210";
```

### Company Contact Details

Update the contact section in `index.html` with:

- Official phone number
- Business email
- Business address
- Social media accounts

### Website Domain

Replace the canonical URL in `index.html` with your actual domain.

## Booking System

The inquiry form validates customer information and prepares an event inquiry message.

The customer must manually send the prepared message through WhatsApp.

This version does not store inquiries in a database.

## Images

The current website uses externally hosted Unsplash photographs for visual inspiration.

Replace them with properly licensed company photographs when available.

## GitHub Deployment

1. Create a new GitHub repository named `dev-organizers`.
2. Upload all four project files.
3. Open repository Settings.
4. Select Pages.
5. Under Build and deployment, select Deploy from a branch.
6. Select the `main` branch and `/ (root)` folder.
7. Save the settings.
8. Wait for GitHub Pages to publish your website.

## SEO

The website includes:

- SEO title and description
- Open Graph metadata
- Semantic HTML
- Image alternative text
- Structured data
- Canonical URL
- Mobile responsive design

Add a sitemap.xml and robots.txt when publishing on your final domain.

## Copyright

© DEV ORGANIZERS. All Rights Reserved.
