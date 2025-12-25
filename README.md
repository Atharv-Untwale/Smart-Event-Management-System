# Smart Campus Event Management System

Problem Statement:
Managing campus events often involves manual registrations, 
inefficient attendance tracking, and lack of visibility into 
event participation. Students struggle to discover events, 
organizers face difficulties managing registrations, and 
administrators lack actionable insights.

Solution:
The Smart Campus Event Management System is a full-stack web 
application designed to centralize event creation, registration, 
and attendance tracking within a campus. It provides role-based 
dashboards for administrators, organizers, and students, 
automates attendance using QR codes, and offers analytics 
to measure event engagement.

User Roles:
- Admin: Platform oversight, analytics, and monitoring
- Organizer: Event creation and attendance management
- Student: Event discovery, registration, and participation

Key Features (v1):
- Role-based authentication and authorization
- Event creation with image uploads
- Event registration with capacity control
- QR code-based attendance check-in
- Admin analytics dashboard
- Automated email notifications

Tech Stack:
Frontend: React, Axios, Chart.js/Recharts  
Backend: Node.js, Express.js  
Database: MongoDB (Atlas)  
Authentication: JWT  
Media Storage: Cloudinary  
Email Service: Nodemailer  
Deployment: Vercel (Frontend), Render (Backend)

Architecture Overview:
React Client → Express API → MongoDB  
                  ↓  
             Cloudinary  
                  ↓  
               Email Service

Project Status:
🚧 Currently under active development (v1)
