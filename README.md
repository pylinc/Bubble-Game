# Bubble Game

Simple browser bubble-hit game built with HTML, CSS and JavaScript.

## Demo
Open `index.html` in a browser or serve the project and navigate to `http://localhost:8000`.

## How to play
- A random target number appears in the "Hit" box.
- Click bubbles with the same number to score points (+10 per correct hit).
- Timer counts down. When it reaches 0 the final score is shown.

## Features
- Randomized bubble grid (160 bubbles).
- Target number updates after each correct hit.
- Score and timer display.
- End-of-game score screen.

## Run locally

Option 1 — open file
- Double-click `index.html` or open it from your browser.

Option 2 — quick HTTP server (recommended for consistent behavior)
- Using Python (PowerShell or cmd):
  - python -m http.server 8000
  - Open http://localhost:8000 in your browser
- Using VS Code:
  - Install Live Server extension and click "Go Live".

## Project structure
- index.html — main page
- style.css — styles (layout, bubble and score UI)
- script.js — game logic (timer, bubble generation, scoring)
- README.md — this file


