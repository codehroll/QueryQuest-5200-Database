# QueryQuest – AI-Powered SQL Learning Platform

QueryQuest is an interactive, web-based SQL learning platform designed to help learners master SQL effectively. It combines AI-powered feedback with gamification to create an engaging and personalized learning experience for students, instructors, and admins.

## Key Features

- **Role-Based Access:** Secure user roles including Admin, Instructor, and Student, each with customized access and capabilities.
- **Automated Grading:** Immediate and accurate evaluation of SQL exercises.
- **Progress Tracking & Gamification:** Point-based ranking and progression systems that motivate learners.
- **Built-in Messaging:** Facilitates seamless communication between users.
- **AI-Powered Feedback:** Integrated OpenAI’s ChatGPT analyzes SQL submissions, providing real-time feedback and converting natural language queries into executable SQL.
- **AI Chatbot Interface:** Helps users track learning progress, review incorrect submissions, and receive personalized performance analytics.

---

## Tech Stack

- **Backend:** Django (Python)
- **Frontend:** React (JavaScript/TypeScript)
- **Database:** MySQL deployed on Google Cloud Platform (GCP)
- **AI Integration:** OpenAI’s ChatGPT for natural language processing and feedback

---

## Architecture & Components

### Backend

- RESTful APIs with Django REST Framework
- User authentication and role management
- SQL problem management and grading engine
- Progress tracking and leaderboard
- Messaging APIs

### Frontend

- React application with modular components
- Sidebar navigation for Account, Exercises, and Messaging
- Real-time UI updates for messages and progress

### AI Feedback

- Analyzes SQL query submissions
- Provides constructive feedback and improvement suggestions

## Highlights

- Scalable and modular architecture
- Comprehensive testing of backend and frontend
- Clean and maintainable codebase
- Integration of AI to enhance SQL learning experience

