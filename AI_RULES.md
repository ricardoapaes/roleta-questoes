# AI Rules for Roleta de Questões

This document outlines the technical stack and guidelines for developing the "Roleta de Questões" application.

## Tech Stack Overview

*   **React:** The primary JavaScript library for building the user interface.
*   **TypeScript:** Used for type safety across the entire codebase, ensuring robust and maintainable code.
*   **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling. All styling should leverage Tailwind classes.
*   **Vite:** The build tool for a fast development experience and optimized production builds.
*   **Firebase/Firestore:** Utilized for backend services, specifically for data persistence of classes and game history.
*   **React Router:** The standard library for declarative routing in React applications. Routes should be managed within `src/App.tsx`.
*   **shadcn/ui & Radix UI:** A collection of pre-built, accessible, and customizable UI components to accelerate development and ensure a consistent look and feel.
*   **Lucide React:** An icon library for adding scalable vector graphics to the application.
*   **`gh-pages`:** Used for deploying the application to GitHub Pages.

## Library Usage Guidelines

*   **UI Components:** Prefer using `shadcn/ui` and `Radix UI` components for common UI elements. If a specific component is not available or needs significant customization, create a new, small React component.
*   **Styling:** **Always** use Tailwind CSS classes for styling. Avoid writing custom CSS files or inline styles unless absolutely necessary for dynamic values.
*   **Routing:** Implement routing using `React Router`. All top-level routes should be defined and managed within `src/App.tsx`.
*   **State Management:** For local component state, use React's built-in `useState`, `useCallback`, and `useEffect` hooks.
*   **Data Persistence:** All data storage and retrieval operations should be handled through the `Firebase/Firestore` services located in `src/services/`.
*   **Icons:** Use icons from the `lucide-react` library.
*   **New Components/Hooks:** Every new component or hook, no matter how small, must reside in its own dedicated file within `src/components/` or `src/hooks/` respectively.