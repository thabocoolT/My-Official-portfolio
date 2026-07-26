# Software Architecture

## Overview

The portfolio follows a simple client-side architecture.

Since the website is static, all processing occurs within the user's browser.

```

                Browser

                   │

         ┌─────────┴─────────┐

         │                   │

      HTML Structure      CSS Styling

         │                   │

         └─────────┬─────────┘

                   │

            JavaScript Logic

                   │

      User Interaction & DOM Updates

```

---

# Components

## HTML

Responsible for:

- Page structure
- Semantic elements
- Accessibility

---

## CSS

Responsible for:

- Styling
- Layout
- Animations
- Responsive Design

---

## JavaScript

Responsible for:

- Theme Switching
- Typing Animation
- Navigation
- Carousel
- Contact Form
- Scroll Effects

---

# External Services

## Formspree

Used for contact form submission.

Purpose:

- Receive emails
- Avoid backend development

---

## Font Awesome

Provides social media icons.

---

## Devicon

Provides technology icons.

---

## Browser Storage

Local Storage stores:

- Theme preference

---

# User Flow

Visitor arrives

↓

Reads Hero Section

↓

Views About

↓

Views Skills

↓

Views Projects

↓

Downloads CV or Opens GitHub

↓

Submits Contact Form

---

# Folder Structure

```
Portfolio/

assets/

docs/

index.html

style.css

mediaquery.css

script.js

README.md
```

---

# Future Architecture

Possible future improvements:

- React
- ASP.NET Backend
- Database
- Authentication
- CMS Integration
