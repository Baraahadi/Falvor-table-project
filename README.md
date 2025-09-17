# 🍽️ Flavor Table Project

## 📖 Description  
**Flavor Table** is a full-stack web application for managing recipes. It allows users to:   
- View recipes stored in a **PostgreSQL** database.  
- Update recipes dynamically using a **modal form**.  
- Delete recipes directly from the cards.  
- Search recipes by ingredients.  
- Save favorite recipes to **LocalStorage** for later access.  

---

## 🛠️ Tech Stack  

### **Frontend**  
- **HTML, CSS, JavaScript**  
- DOM Manipulation for dynamic recipe cards  
- Modal forms for recipe editing  
- LocalStorage for saving favorites  

### **Backend**  
- **Node.js + Express.js**  
- REST API with `GET`, `POST`, `PUT`, and `DELETE` routes  
- SQL queries with **pg (node-postgres)**  


---

## ⚙️ Features  

✅ **Display Recipes**  
Fetch recipes from Postgres and render them as styled cards.  

✅ **Update Recipe**  
- Each recipe card has an **Edit Recipe** button.  
- Clicking opens a modal pre-filled with recipe data.  
- Submitting sends a `PUT /recipes/:id` request to update the database.  

✅ **Delete Recipe**  
- Each recipe card has a **Delete Recipe** button.  
- Sends `DELETE /recipes/:id`.  
- Removes the card instantly from the UI.  

✅ **Search Recipes**  
- Search by ingredients using `/recipes/search?ingredients=...`.  

✅ **Favorite Recipes**  
- Add to favorites with **localStorage**.  
- Prevents duplicates and updates button text.  

---

## 🌍 Deployment  

The project is live and hosted on **Render** 🚀  

🔗 **Live Demo**: [Flavor Table Project](https://falvor-table-project.onrender.com/)  


---

## 📸 UI Overview  
- **Recipe Cards**: Display title, image, ingredients, and instructions.  
- **Modal Form**: Used for editing/updating recipes.  
- **Favorites Section**: Saves recipes locally.  

---

✨ With this project, you can manage recipes end-to-end: from **database storage → frontend rendering → editing and searching**.  
