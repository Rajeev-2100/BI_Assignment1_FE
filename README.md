# MeetUp Event App 🎉

A responsive React application for discovering and exploring meetup events. Users can browse available events, search by title, filter events by type, and view detailed information about individual meetups. The application fetches data from a REST API and presents a clean, user-friendly interface using Bootstrap.

---

## 🌐 Live Demo

### Meetup App

https://meetup-frontend-navy.vercel.app/

---

## ✨ Features

* Browse all meetup events with images and event information.
* Search events dynamically by title.
* Filter events by type (Online or Offline).
* View complete event details on a dedicated page.
* Display formatted event date and time.
* Show event location, price, host information, and speaker details.
* Display additional information such as dress code, age restrictions, and event tags.
* Responsive design built with Bootstrap 5.
* Custom `useFetch` hook for API data fetching.

## 🛠 Tech Stack

* React
* React Router DOM
* Bootstrap 5
* JavaScript (ES6+)
* Custom Hooks
* REST API

## 📁 Project Structure

```bash
src/
├── components/
│   ├── ListingPage.jsx
│   └── DetailPage.jsx
├── useFetch.jsx
├── App.jsx
└── main.jsx
```

## 🚀 Routes

| Route                  | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `/`                    | Displays all meetup events                         |
| `/meetup/Id/:meetupId` | Displays detailed information for a specific event |

### Endpoints Used

```bash
GET /meetup
GET /meetup/Id/:meetupId
```

## ⚙️ Installation

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🔮 Future Improvements

* Add event registration functionality.
* Implement category and date filters.
* Add pagination or infinite scrolling.
* Include loading and error states across all pages.
* Add user authentication and favorite events feature.
* Improve search functionality with multiple criteria.
