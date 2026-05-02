# 🍳 Cooks Delight – Cooking & Recipes Blog

A React-based cooking and recipes blog built from a Figma design, integrating the DummyJSON API for dynamic recipe content. Browse featured recipes, search dishes, explore cooking tips, and log in to your personal cooking space.

---

## 🔗 Links

- **Figma Design:** [View Design](https://www.figma.com/design/EK0IVka3EakJw5lMCdhpv6/-FREE--Cooking---Recipes-Blog-Template--Community-?node-id=0-1&t=D20ycjrz44uhw0BD-1)
- **API:** [DummyJSON](https://dummyjson.com/)

---

## ✨ Features

- **Home Page** – Hero section, category showcase, featured recipes carousel, recipe grid with filtering, about preview, and CTA banner
- **Recipes / Search Results Page** – Dynamic search results powered by DummyJSON, recipe card grid
- **Recipe Details Page** – Full recipe info including ingredients, instructions, nutrition, rating, tags, and similar recipes
- **Cooking Tips Page** – Editorial blog-style tips, newest recipes, and locally stored tip cards
- **About Us Page** – Brand story, chef narrative, gallery, and featured recipes
- **Login Page** – Split-layout login with DummyJSON authentication, token handling, and form validation

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React |
| API | DummyJSON |
| Styling | CSS / TailwindCSS *(update as needed)* |
| Routing | React Router DOM |
| State Management | React Context / useState *(update as needed)* |
| Version Control | Git & GitHub |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/cooks-delight.git
   cd cooks-delight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🌐 API Integration

This project uses the [DummyJSON API](https://dummyjson.com/). No API key is required.

| Feature | Endpoint |
|--------|----------|
| Fetch all recipes | `GET /recipes` |
| Search recipes | `GET /recipes/search?q={query}` |
| Recipe details | `GET /recipes/{id}` |
| Filter by meal type | `GET /recipes/meal-type/{type}` |
| User login | `POST /auth/login` |
| Get current user | `GET /auth/me` |
| Refresh session | `POST /auth/refresh` |

---

## 📱 Responsive Design

The website is fully responsive across:
- 🖥️ Desktop / Laptop
- 📱 Tablet
- 📲 Mobile Phone

Sections reflow gracefully with no overlap, clipping, or broken spacing.

---

## 🎨 Animations & Transitions

- Hover effects on recipe cards, buttons, chips, and nav items
- Smooth carousel/slider transitions
- Section fade-in and reveal effects
- Filter and search result transitions
- CTA button hover emphasis

---

## 🧠 State & Error Handling

The app handles:
- ⏳ Loading states while fetching data
- 🔍 Empty states for no search results
- ❌ API errors with user-friendly messages
- 🖼️ Missing images or incomplete recipe data


---

## 📝 License

This project was built for educational purposes as part of a front-end development course.