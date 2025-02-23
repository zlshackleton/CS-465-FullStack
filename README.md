# CS-465-FullStack
FullStack Travlr Website

🏗️ Architecture
This project combines Express HTML, JavaScript, and an Angular Single Page Application (SPA) to create a responsive and dynamic web experience.  

Express + HTML/JavaScript: Serves static pages and handles backend logic.  
Angular SPA: Provides a seamless user experience by updating content dynamically without full-page reloads.  
For data storage, MongoDB (NoSQL) was chosen for its flexibility, scalability, and JSON-like structure, making it ideal for handling dynamic datasets without rigid schemas.  


⚡ Functionality  
🔹 JSON vs. JavaScript:  
While JavaScript powers the app’s logic, JSON serves as the bridge between the frontend and backend, allowing data to be transferred efficiently.  

🔹 Code Refactoring & Reusability:  
To improve maintainability, I:  
✔ Modularized API service calls into an Angular Service (tripDataService).  
✔ Created reusable UI components (e.g., trip card) for a consistent design.  

These optimizations reduce redundancy, enhance performance, and streamline future updates.  


🛠️ API Testing & Security  
To ensure the SPA communicates effectively with the backend, I tested key API requests using Postman, DevTools, and Angular’s HttpClient module:  

Method	Purpose	Security Consideration  
GET	Retrieve trip data	Open to all users  
POST	Add a new trip	Requires authentication  
PUT	Update a trip	Restricted to authorized users  
DELETE	Remove a trip	Requires admin role  
✔ Authentication tokens were used to secure endpoints.  


🎯 Reflection & Key Takeaways  
This project strengthened my full stack development skills, particularly in:  

✅ Building APIs & connecting databases  
✅ Integrating Angular with Express for a seamless experience  
✅ Implementing security best practices in web apps  
✅ Debugging & optimizing for performance  

These skills help prepare me for real world development and have made me a stronger candidate in the tech industry.  
