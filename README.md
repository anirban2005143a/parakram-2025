# Parakram 2025

Parakram 2025 is a full-stack sports fest management platform for handling event information, team registration, player details, accommodation selection, payment submission, and administrative data management.

## Tech Stack

### Frontend

* React 18
* Vite
* React Router
* Tailwind CSS
* Framer Motion
* GSAP
* Three.js
* tsparticles
* Axios
* React Toastify
* Lucide React
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Cloudinary
* PDFKit
* Streamifier

## Features

### Public Website

* Home page with hero section and event memories.
* Dedicated pages for events, merchandise, accommodation, sponsors, about, and teams.
* Responsive navigation and UI components.
* Animated sections and interactive visual effects.

### Team Registration

* Team registration for different sports.
* Automatic generation of unique team IDs.
* Registration of multiple players under a team.
* Unique player IDs generated for registered participants.
* Player information includes name, phone number, college, sport, email, ID card, and T-shirt size.

### Accommodation Management

* Multiple accommodation types with configurable pricing.
* Accommodation selection for individual players.
* Automatic calculation of the total accommodation amount.
* Accommodation details linked with player and team records.

### Payment Management

* Payment submission using transaction ID and amount paid.
* Payment screenshot upload using Multer.
* Payment screenshots stored on Cloudinary.
* Payment records linked to registered teams.
* Payment screenshot retrieval through API endpoints.

### Admin Management

* JWT-protected admin authentication.
* View all registered teams and players.
* Filter players and teams by sport.
* View payment information and payment screenshots.
* Dashboard statistics including:

  * Total teams
  * Total players
  * Total payments
  * Total amount collected
  * Sport-wise player distribution
  * Accommodation distribution and revenue

### Registration Documents

* Generates registration PDFs containing team, player, accommodation, and payment information.
* Provides an API endpoint for downloading generated registration PDFs.

## Project Structure

```text
parakram-2025/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── About/
│   │   │   ├── Accomodation/
│   │   │   ├── Merchandise/
│   │   │   ├── Payment/
│   │   │   ├── Register/
│   │   │   ├── Sponsors/
│   │   │   ├── Teamdetails/
│   │   │   ├── auth/
│   │   │   ├── events/
│   │   │   ├── homepage/
│   │   │   └── team/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── utils/
    ├── app.js
    ├── server.js
    └── package.json
```

## API Routes

### Team

```text
POST /api/teams/register
GET  /api/teams/:id
```

### Accommodation

```text
GET  /api/accommodation/types
POST /api/accommodation/select
```

### Payment

```text
POST /api/payments/process
GET  /api/payments/screenshot/:paymentId
```

### Authentication

```text
POST /api/auth/login
```

### Admin

```text
GET /api/admin/teams
GET /api/admin/players
GET /api/admin/players/sport/:sport
GET /api/admin/payments
GET /api/admin/dashboard
GET /api/admin/teams/sport/:sport
GET /api/admin/payments/team/:teamId/screenshot
```

### PDF

```text
GET /api/pdf/download/:teamId
```

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Create a `.env` file inside the frontend directory.

```env
VITE_REACT_BACKEND_URL=http://localhost:5000
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

For development with Nodemon:

```bash
npx nodemon server.js
```

## Database Models

The backend uses MongoDB with Mongoose models for:

* Teams
* Players
* Payments
* Accommodation

Teams maintain references to their registered players and associated payment records, while players maintain references to their team and accommodation details.

## Deployment

The frontend is configured for deployment with Vite-compatible hosting such as Vercel.

The backend runs as an Express.js server and requires MongoDB and Cloudinary configuration through environment variables.
