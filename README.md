# Card Call

#### A web application built with React, Node.js, Express, and MySQL.

## Tech Stack

Frontend: React + Vite

Backend: Node.js + Express

Database: MySQL

## Requirements

Node.js (use a compatible LTS version)

npm

MySQL Server

## Setup

### 1. Clone the repository

git clone https://github.com/RikuSpl/Card-call
cd cardcall

### 2. Install frontend dependencies

cd client
npm install

### 3. Install backend dependencies

cd ../server
npm install

### 4. Configure the database

Create a MySQL database named cardcall.

Copy server/.env.example to server/.env and configure your local database credentials.

Apply the SQL schema in database/schema.sql when available.

### 5. Start the application

Open two terminals from the project root.

### Terminal 1:

cd client
npm run dev

Terminal 2:

cd server
npm run dev

Open the URL provided by Vite in your browser.

## Git Workflow

main contains the shared baseline.

Use feature branches for new features and bug fixes.

Submit pull requests before merging changes into main.

Detailed guideline for Git workflow

### 1. Start a new feature

Create a branch from the latest development branch:

git switch development
git pull origin development
git switch -c feature/your-feature

### 2. Commit and push your changes

git add .
git commit -m "Describe your changes"
git push -u origin feature/your-feature

### 3. Merge your feature

Open a Pull Request on GitHub from your feature branch into development.

Review and test the changes before merging.

Delete the feature branch after merging.

### 4. Release a stable version

When development is tested and ready, create a Pull Request from development into main.
Team Rules

Never commit directly to main.

Use short-lived, task-based feature branches (e.g., feature/navbar or fix/login).

Pull the latest development before starting new work.

Communicate with teammates and resolve conflicts before merging.

Keep commits focused and use descriptive commit messages.

## Team

Riku, Roope, Mikael
