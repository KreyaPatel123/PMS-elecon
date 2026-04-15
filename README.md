# Project Management System

A **role-based project management web application** built using the **MERN stack** with **TypeScript** and **Tailwind CSS**.  
It enables teams to efficiently manage projects through **sprints, tasks, bugs, collaboration tools, and GitHub integration**.

---

## Overview

This system allows **multiple users to collaborate across multiple projects** with different roles in each project.

- A user can be **Owner in one project**, **Admin in another**, and **Developer/Client in others**
- After login, users see **all projects they are part of**
- Each project has its own isolated workspace (**Project Portal**)

---

## Core Features

### Authentication & User Management
- User Registration & Login (JWT-based authentication)
- Profile Management & Password Change

### Project Management
- Create projects
- View all projects where user is a member
- Role-based dashboards (Owner/Admin/Developer/Client)

### Team & Roles
- Roles: **Owner, Admin, Developer, Client**
- Add/remove members
- Role assignment & updates
- Multi-project role flexibility

---

## Project Portal (Per Project Workspace)

Each project has a dedicated portal: /projects/portal/{projectId}


### Modules inside Project Portal:

#### Dashboard
- Project metrics & progress tracking
- Task, subtask, and bug statistics

#### Sprint Board
- Create/edit/delete sprints
- Manage tasks & subtasks
- Move tasks to backlog

#### Backlog
- Manage unscheduled tasks
- Move tasks to sprint

#### Bug Tracker
- Report bugs
- Update/delete bugs
- Comment system (author-based control)

#### Resources
- Store useful links (Docs, Figma, Meetings, Videos, etc.)
- Only Owner/Admin/Author can edit/delete

#### GitHub Integration
- Add repository links
- View project-related metadata

#### Team Management
- Add/remove members
- Assign/change roles

#### Settings
- Project details (name, status, owner)
- Controlled access for updates

---

## Role-Based Access Control (RBAC)

### Owner
- Full control over project
- Can delete project and manage all settings

### Admin
- Manages workflow (sprints, tasks, bugs)
- Cannot delete project or modify owner

### Developer
- Can manage **tasks, sprints, backlog, and bugs**
- Cannot manage team or project settings

### Client
- Read-only for most modules
- Can:
  - Report bugs
  - Comment on bugs
  - View progress

---

## Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React, TypeScript, Vite, Tailwind CSS, shadcn/ui |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (HTTP-only cookies), bcrypt |
| Storage | Cloudinary |
| Email | Nodemailer |

---

## Project Structure

```
project-management-system/
│
├── backend/ # Backend (Node.js + Express API)
│ ├── config/ # Configuration files (DB, Cloudinary, etc.)
│ ├── controllers/ # Route logic & request handlers
│ ├── middleware/ # Custom middleware (auth, error handling)
│ ├── models/ # Database schemas
│ ├── routes/ # API routes
│ ├── utils/ # Helper functions
│ └── index.js # Backend entry point
│
├── frontend/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── api/ 
│ │ ├── components/ # Reusable components
│ │ ├── context/ # State management
│ │ ├── pages/ # App pages
│ │ └── services/ # All Api functions
│ └── main.tsx # Frontend entry point
│
└── README.md # Documentation
```

---

## API Endpoints

All endpoints are prefixed with: /api/v1/user

## Routing Structure

### Public Routes
/ → Landing Page

### Authenticated Routes
- /projects
- /projects/dashboard/{role}
- /projects/portal/{projectId}


### Project Portal Routes
- /projects/portal/{projectId}/dashboard
- /projects/portal/{projectId}/github
- /projects/portal/{projectId}/
- /projects/portal/{projectId}/backlog
- /projects/portal/{projectId}/bugtracker
- /projects/portal/{projectId}/resources
- /projects/portal/{projectId}/team
-  /projects/portal/{projectId}/settings

## Installation

### 1. Clone Repository
- git clone

### 2. Backend Setup
- cd backend
- npm install
- npm run dev

### 3. Frontend Setup
- cd pms-frontend
- npm install
- npm run dev

### 4. Backend .env Setup
- PORT=4000
- MONGODB_URL=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=your_cloud_name
- CLOUDINARY_API_KEY=your_api_key
- CLOUDINARY_API_SECRET=your_api_secret
- FOLDER_NAME=your_folder_name
- MAIL_HOST=smtp.gmail.com
- MAIL_USER=your_email@gmail.com
- MAIL_PASS=your_app_password
- GITHUB_TOKEN=your_github_token

### 5. Frontend .env Setup
- VITE_API_BASE_URL=http://localhost:4000/api/v1/user
