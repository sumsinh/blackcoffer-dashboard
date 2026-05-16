# Blackcoffer Data Visualization Dashboard

## Project Overview

This project is a full-stack interactive data visualization dashboard built as part of the Blackcoffer assignment.

The dashboard reads data from MongoDB and displays multiple interactive charts and filters to generate meaningful insights from the provided JSON dataset.

The application is built using:

* React.js
* Tailwind CSS
* Django
* MongoDB Atlas
* Recharts

---

# Features

## Interactive Dashboard

* Dynamic and responsive dashboard UI
* Real-time filtering and chart updates
* Professional layout with reusable components

## Data Visualizations

The dashboard includes:

* Intensity Analysis Chart
* Relevance Analysis Chart
* Topics Distribution Chart
* Year Trend Analysis Chart
* Sector Analysis Chart

## Filters

Users can filter dashboard data by:

* Region
* Country
* Topic
* Sector
* End Year

## Additional Features

* Loading state handling
* Empty state handling
* Responsive design for mobile and desktop
* Statistics summary cards
* MongoDB-backed APIs

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Recharts
* Axios

## Backend

* Django
* Django REST APIs
* PyMongo

## Database

* MongoDB Atlas

---

# Project Structure

```bash
frontend/
├── src/
│   ├── api/
│   ├── charts/
│   ├── pages/
│   └── components/

backend/
├── dashboard/
├── mongo_connection.py
├── views.py
└── urls.py
```

---

# Installation and Setup

## Clone Repository

```bash
git clone <your-github-repository-url>
```

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Create virtual environment

```bash
python -m venv venv
```

## Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run backend server

```bash
python manage.py runserver
```

Backend will run on:

```bash
http://localhost:8000
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# MongoDB Setup

1. Create MongoDB Atlas cluster
2. Import provided JSON dataset
3. Add MongoDB connection string in backend configuration
4. Connect Django backend with MongoDB

---

# API Endpoints

## Get All Insights

```bash
/api/insights/
```

## Get Filter Options

```bash
/api/filters/
```

---

# Screenshots

Add your project screenshots here.

Example:

```md
![Dashboard Screenshot](./screenshots/dashboard.png)
```

---

# Screenshots

## Dashboard

![Dashboard](./screenshots/dashboard.png)

## Filters

![Filters](./screenshots/filters.png)

## Charts

![Charts](./screenshots/charts.png)

# Assignment Requirements Covered

* MongoDB database integration
* Django backend APIs
* React frontend
* Interactive charts
* Dynamic filters
* Responsive dashboard
* Data visualization
* MongoDB data fetching
* Multiple visual insights

---

# Future Improvements

* Additional advanced filters
* Authentication system
* Export reports functionality
* Dark mode
* Advanced analytics

---


