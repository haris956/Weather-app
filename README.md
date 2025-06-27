# React Weather App 

A beginner-friendly weather application built using **React** and **Vite**, powered by the **OpenWeatherMap API**. Users can type in any city name and get the current weather conditions instantly.

---

##  Live Demo

👉 [Click here to use the app](https://weather-edojfflu4-haris-projects-4cb7f8ac.vercel.app)

---

##  Features

- Search weather by city name
- Live data from OpenWeatherMap API
- Clean and simple UI
- Temperature and weather condition displayed

---

##  Tech Stack

- React
- Vite
- OpenWeatherMap API

---

##  Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-weather-app.git

# 2. Navigate into the project folder
cd react-weather-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

##  API Key Info

This app uses OpenWeatherMap's free API.

Replace the API key inside `App.jsx`:

```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
```

Sign up at [https://openweathermap.org](https://openweathermap.org) for your own key.

---

##  License

MIT – Free for personal and commercial use.

---

##  Author

Made by **Sirajuddin Haris**  
GitHub: [haris956](https://github.com/haris956)
