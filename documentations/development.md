# Development Documentation

## Overview

This project is a static frontend application built using HTML, CSS, and JavaScript.

The goal was to strengthen my frontend development skills by implementing interactive components without relying on frameworks such as React or Vue.

---

# Technologies Used

## HTML5

Used for:

- Semantic page structure
- Accessibility
- SEO-friendly layout

---

## CSS3

Responsible for:

- Layout
- Responsive design
- Animations
- Glassmorphism
- Theme styling

Features include:

- CSS Variables
- Flexbox
- CSS Grid
- Media Queries
- Keyframe Animations

---

## JavaScript

JavaScript provides all interactive functionality including:

- Theme switching
- Typing animation
- Navigation
- Skills carousel
- Scroll animations
- Contact form validation

---

# Project Structure

```
Portfolio/

index.html

style.css

mediaquery.css

script.js

assets/
```

## index.html

Contains all website sections and semantic HTML structure.

---

## style.css

Contains:

- Global styling
- Colours
- Typography
- Layout
- Components
- Animations

---

## mediaquery.css

Contains responsive layouts for different screen sizes.

---

## script.js

Handles all interactive functionality.

Major components include:

- Theme Toggle
- Navigation
- Typing Effect
- Skills Carousel
- Scroll Animations
- Contact Form
- Mobile Navigation

---

# Theme Switching

The website supports both light and dark themes.

The selected theme is saved using Local Storage so the user's preference is remembered across sessions.

---

# Skills Carousel

The skills section automatically scrolls through technologies.

Desktop:

- Automatic scrolling
- Pause on hover
- Arrow navigation

Mobile:

- Horizontal swipe scrolling

---

# Scroll Animations

JavaScript monitors elements entering the viewport.

When an element becomes visible, CSS animation classes are applied.

---

# Contact Form

The contact form uses Formspree.

Advantages include:

- No backend required
- Spam protection
- Email delivery
- Easy integration

---

# Responsive Design

Responsive layouts were built using:

- Flexbox
- CSS Grid
- Media Queries

The website supports:

Desktop

Laptop

Tablet

Mobile

Small Mobile Devices

---

# Challenges

## Responsive Carousel

Challenge:

Making the carousel work smoothly across different devices.

Solution:

Separate desktop animation from mobile scrolling behaviour.

---

## Theme Persistence

Challenge:

Remembering the user's selected theme.

Solution:

Use Local Storage to save and restore the selected theme.

---

## Glassmorphism

Challenge:

Maintaining readability while using transparent cards.

Solution:

Combined backdrop filters with carefully selected opacity and shadow values.

---

# Lessons Learned

This project helped strengthen my understanding of:

- Responsive Web Design
- CSS Architecture
- JavaScript DOM Manipulation
- Event Handling
- Local Storage
- UI Design
- Debugging
- Git Version Control

---

# Future Improvements

Future versions may include:

- React migration
- Better animations
- Accessibility improvements
- Backend integration
- Project filtering