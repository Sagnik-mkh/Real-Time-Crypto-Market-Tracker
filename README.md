# CoinGecko Crypto Tracker

A modern **React + Vite** application that fetches real-time cryptocurrency data from the **CoinGecko API** and displays it with clean UI components, routing, global state management, and modular services.

---

## 🚀 Features

- 🔄 Live market data from CoinGecko  
- 📊 View prices, market caps, circulating supply & market trends  
- 🧭 Client-side routing (React Router)  
- 🗂 Global state using Zustand  
- 🎨 Clean reusable UI components  
- ⚙️ Modular services, helpers & utilities  
- 📁 Scalable folder structure  

---

## 📂 Project Structure

```lua
CoinGekoCryptoTracker/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── helpers/
│   ├── routing/
│   ├── context/
│   ├── Util/
│   ├── zustand/
└── ...
```

## 📁 Folder Breakdown

### `components`

Reusable UI components such as:

- Crypto cards  
- Banner  
- Navbar  
- Detail view components  
- Lists, tables, loaders, etc.

### `pages`

Full page components linked through routing:

- Home Page  
- Coin Details Page  
- Market Overview Page  

### `services`

API service modules:

- Fetch list of cryptocurrencies  
- Fetch single coin details  
- Fetch market statistics  

### `helpers`

Utility functions:

- Convert numbers  
- Format currency  
- Prepare chart-friendly data  

### `zustand`

Global state store using **Zustand**:

- Theme  
- Cached API data  
- User preferences  

### `routing`

React Router setup:

- Route config  
- Dynamic route parameters  
- Page linking  

---

## 🛠️ Tech Stack

| Feature | Technology |
|--------|------------|
| Framework | React |
| Bundler | Vite |
| State Management | Zustand |
| Routing | React Router |
| Fetch | Axios |
| Query | TanStack Query |
| API | CoinGecko API |
| Styling | CSS |

---

## 📦 Installation & Setup

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Project preview

```bash
npm run preview
```

## API source

- All market data is fetched from the official free CoinGecko API:
- [CoinGecko](https://www.coingecko.com)
