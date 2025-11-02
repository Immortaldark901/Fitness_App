#Main nodes
sitemap.node("Home", "🏠 Dashboard\n(Overview, Quick Stats)", shape="box", style="rounded,filled", fillcolor="lightblue")
sitemap.node("Sign", "🔑 Sign In / Sign Up", shape="box", style="rounded,filled", fillcolor="lightyellow")
sitemap.node("Tracker", "📊 Fitness Tracker\n(Calories + Workouts)", shape="box", style="rounded,filled", fillcolor="lightgreen")
sitemap.node("Recipes", "🍲 Recipes\n(Veg, Non-Veg, Healthy)", shape="box", style="rounded,filled", fillcolor="lightpink")
sitemap.node("Planner", "📅 Meal Planner\n(Weight Gain/Loss)", shape="box", style="rounded,filled", fillcolor="lightcoral")
sitemap.node("Tips", "💡 Healthy Eating Tips\n& Blogs", shape="box", style="rounded,filled", fillcolor="lightgoldenrod1")
sitemap.node("Compare", "⚖️ Food Comparison Tool\n(Roti vs Rice)", shape="box", style="rounded,filled", fillcolor="lavender")
sitemap.node("Progress", "📈 Progress & Reports\n(BMI, Charts)", shape="box", style="rounded,filled", fillcolor="lightcyan")
sitemap.node("Profile", "👤 User Profile\n(Details, Saved Data)", shape="box", style="rounded,filled", fillcolor="thistle")

# Connect nodes
sitemap.edges([("Sign", "Home"),
               ("Home", "Tracker"),
               ("Home", "Recipes"),
               ("Home", "Planner"),
               ("Home", "Tips"),
               ("Home", "Compare"),
               ("Home", "Progress"),
               ("Home", "Profile")])

############################################

@Navbar Structure

# 1. Home
Dashboard Overview
Latest Updates / Tips

# 2. Nutrition (combine Meal Planner + Food Database)
Daily Meal Plan
Weekly Plan
Custom Diet Plans
Food Recommendations
Indian Foods
Fruits & Vegetables
Proteins & Grains
Street Foods (Healthy Alternatives)

# 3. Tracking (all progress-related things)
Daily Calorie Intake
Weekly Intake Report
Exercise Tracking
Calories Burned
My Progress

# 4. Recipes
Veg Recipes
Non-Veg Recipes
Oil-Free Recipes
Quick Snacks

# 5. Profile
My Information
Settings

# 6. Account
Sign In
Sign Up
Logout


python -m http.server 8000


Title: Recipe name.
Description: A brief overview or background on the recipe.
Ingredients: List of ingredients with quantities, suitable for further analysis or nutrient extraction.
Instructions: Step-by-step cooking directions.
Preparation Time: Estimated cooking/preparation time in minute.
Servings: Intended number of servings.
Tags: Categorized tags such as cuisine type, meal type, dietary restrictions, and cooking technique.
Ratings: User ratings and count of reviews.
Image Filename: Some recipes include images with a reference to the filename under image_filename.

