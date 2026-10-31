// API key for TheMealDB (free API)
        const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

        // DOM Elements
        const searchForm = document.getElementById('search-form');
        const searchInput = document.getElementById('search-input');
        const resultsContainer = document.getElementById('results-container');
        const loader = document.getElementById('loader');
        const noResults = document.getElementById('no-results');
        const feedbackForm = document.getElementById('feedback-form');
        const testimonialsContainer = document.getElementById('testimonials-container');

        // User authentication elements
        const userNotLoggedIn = document.getElementById('user-not-logged-in');
        const userLoggedIn = document.getElementById('user-logged-in');
        const userNameNav = document.getElementById('userNameNav');
        const userAvatar = document.getElementById('userAvatar');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const logoutBtn = document.getElementById('logoutBtn');
        const savedRecipesBtn = document.getElementById('savedRecipesBtn');
        const saveRecipeBtn = document.getElementById('saveRecipeBtn');

        // Static recipe data (15 popular recipes)
        const staticRecipes = [
            {
                idMeal: "52772",
                strMeal: "Teriyaki Chicken Casserole",
                strCategory: "Chicken",
                strArea: "Japanese",
                strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
                strInstructions: "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray...",
                prepTime: 20,
                cookTime: 35,
                servings: 4,
                ingredients: [
                    "3 tablespoons soy sauce",
                    "3 tablespoons water",
                    "2 tablespoons brown sugar",
                    "1 teaspoon ground ginger",
                    "2 minced garlic cloves",
                    "2 large boneless chicken breasts",
                    "1 tablespoon cornstarch",
                    "4 cups cooked rice",
                    "2 cups broccoli florets"
                ]
            },
            {
                idMeal: "52874",
                strMeal: "Garlic Butter Beef Steak",
                strCategory: "Beef",
                strArea: "American",
                strMealThumb: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
                strInstructions: "Season the beef steaks with salt and pepper. In a skillet, heat butter and cook garlic until fragrant. Sear the steaks on both sides until desired doneness. Baste with garlic butter before serving...",
                prepTime: 10,
                cookTime: 15,
                servings: 2,
                ingredients: [
                    "2 beef steaks",
                    "3 tablespoons butter",
                    "4 cloves garlic, minced",
                    "1 tablespoon olive oil",
                    "Salt and pepper to taste",
                    "1 teaspoon rosemary (optional)"
                ]
            },
            {
                idMeal: "52774",
                strMeal: "Vegetable Stir Fry",
                strCategory: "Vegetarian",
                strArea: "Chinese",
                strMealThumb: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
                strInstructions: "Heat oil in a large wok or skillet over medium-high heat. Add garlic and ginger, stir for 30 seconds...",
                prepTime: 15,
                cookTime: 10,
                servings: 4,
                ingredients: [
                    "2 tablespoons vegetable oil",
                    "2 cloves garlic, minced",
                    "1 tablespoon ginger, minced",
                    "1 bell pepper, sliced",
                    "1 carrot, julienned",
                    "1 cup broccoli florets",
                    "1 cup snap peas",
                    "3 tablespoons soy sauce",
                    "1 tablespoon sesame oil"
                ]
            },
            {
                idMeal: "52775",
                strMeal: "Classic Beef Burger",
                strCategory: "Beef",
                strArea: "American",
                strMealThumb: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
                strInstructions: "In a large bowl, mix ground beef, salt, pepper, and any other desired seasonings...",
                prepTime: 15,
                cookTime: 10,
                servings: 4,
                ingredients: [
                    "1 lb ground beef",
                    "1 teaspoon salt",
                    "1/2 teaspoon black pepper",
                    "4 burger buns",
                    "4 slices cheese",
                    "Lettuce, tomato, onion for serving",
                    "Ketchup and mustard"
                ]
            },
            {
                idMeal: "52776",
                strMeal: "Creamy Mushroom Pasta",
                strCategory: "Pasta",
                strArea: "Italian",
                strMealThumb: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2023%2F02%2F05%2F391859-creamy-mushroom-pasta-gapch1026-4x3-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
                strInstructions: "Cook pasta according to package directions. Meanwhile, heat butter in a large skillet...",
                prepTime: 10,
                cookTime: 20,
                servings: 4,
                ingredients: [
                    "8 oz pasta",
                    "2 tablespoons butter",
                    "2 cloves garlic, minced",
                    "8 oz mushrooms, sliced",
                    "1 cup heavy cream",
                    "1/2 cup grated Parmesan",
                    "Salt and pepper to taste",
                    "Fresh parsley for garnish"
                ]
            },
            {
                idMeal: "52777",
                strMeal: "Chocolate Chip Cookies",
                strCategory: "Dessert",
                strArea: "American",
                strMealThumb: "https://www.allrecipes.com/thmb/ZmINPsDQYHTK4B-6PyFjPGrJqjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/10813-best-chocolate-chip-cookies-mfs-step-7-148-52cdaefcd6e04707863288ded8451075.jpg",
                strInstructions: "Preheat oven to 350°F. In a medium bowl, whisk together flour, baking soda, and salt...",
                prepTime: 15,
                cookTime: 12,
                servings: 24,
                ingredients: [
                    "2 1/4 cups all-purpose flour",
                    "1 teaspoon baking soda",
                    "1 teaspoon salt",
                    "1 cup butter, softened",
                    "3/4 cup granulated sugar",
                    "3/4 cup packed brown sugar",
                    "2 large eggs",
                    "2 teaspoons vanilla extract",
                    "2 cups chocolate chips"
                ]
            },
            {
                idMeal: "52778",
                strMeal: "Greek Salad",
                strCategory: "Vegetarian",
                strArea: "Greek",
                strMealThumb: "https://www.allrecipes.com/thmb/ZPYjvwwieaWRL9R5EcdIn2UQM4M=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14373-GreekSaladi-mfs-4X3-0354-e8388819cafa4bae843ea433258aa03d.jpg",
                strInstructions: "In a large bowl, combine cucumbers, tomatoes, red onion, and olives...",
                prepTime: 15,
                cookTime: 0,
                servings: 4,
                ingredients: [
                    "2 large cucumbers, chopped",
                    "4 tomatoes, chopped",
                    "1 red onion, sliced",
                    "1 cup Kalamata olives",
                    "4 oz feta cheese, cubed",
                    "2 tablespoons olive oil",
                    "1 tablespoon lemon juice",
                    "1 teaspoon dried oregano",
                    "Salt and pepper to taste"
                ]
            },
            {
                idMeal: "52779",
                strMeal: "Beef Tacos",
                strCategory: "Beef",
                strArea: "Mexican",
                strMealThumb: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5507683.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
                strInstructions: "Heat oil in a skillet over medium heat. Add onion and cook until softened...",
                prepTime: 15,
                cookTime: 15,
                servings: 4,
                ingredients: [
                    "1 lb ground beef",
                    "1 onion, diced",
                    "2 cloves garlic, minced",
                    "1 packet taco seasoning",
                    "8 taco shells",
                    "Shredded lettuce",
                    "Diced tomatoes",
                    "Shredded cheese",
                    "Sour cream"
                ]
            },
            {
                idMeal: "52780",
                strMeal: "French Toast",
                strCategory: "Breakfast",
                strArea: "French",
                strMealThumb: "https://www.allrecipes.com/thmb/avZP-AGmyZLBekhN-hTtxOKuXqM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7016-french-toast-i-VAT-013-3x2-42d0ca467ae24f64a7d925062b2ad543.jpg",
                strInstructions: "In a shallow bowl, whisk together eggs, milk, cinnamon, and vanilla...",
                prepTime: 10,
                cookTime: 15,
                servings: 4,
                ingredients: [
                    "8 slices bread",
                    "4 large eggs",
                    "1 cup milk",
                    "1 teaspoon cinnamon",
                    "1 teaspoon vanilla extract",
                    "2 tablespoons butter",
                    "Maple syrup for serving"
                ]
            },
            {
                idMeal: "52781",
                strMeal: "Chicken Curry",
                strCategory: "Chicken",
                strArea: "Indian",
                strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
                strInstructions: "Heat oil in a large pot over medium heat. Add onions and cook until golden...",
                prepTime: 20,
                cookTime: 40,
                servings: 6,
                ingredients: [
                    "2 lbs chicken, cut into pieces",
                    "2 onions, diced",
                    "3 cloves garlic, minced",
                    "1 tablespoon ginger, minced",
                    "2 tablespoons curry powder",
                    "1 can coconut milk",
                    "2 tomatoes, diced",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ]
            },
            {
                idMeal: "52782",
                strMeal: "Vegetable Lasagna",
                strCategory: "Vegetarian",
                strArea: "Italian",
                strMealThumb: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
                strInstructions: "Preheat oven to 375°F. Cook lasagna noodles according to package directions...",
                prepTime: 30,
                cookTime: 45,
                servings: 8,
                ingredients: [
                    "12 lasagna noodles",
                    "2 cups ricotta cheese",
                    "2 cups shredded mozzarella",
                    "1/2 cup grated Parmesan",
                    "2 cups marinara sauce",
                    "2 cups spinach",
                    "1 zucchini, sliced",
                    "1 cup mushrooms, sliced",
                    "1 egg"
                ]
            },
            {
                idMeal: "52783",
                strMeal: "BBQ Ribs",
                strCategory: "Pork",
                strArea: "American",
                strMealThumb: "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
                strInstructions: "Preheat oven to 275°F. Season ribs with salt, pepper, and paprika...",
                prepTime: 15,
                cookTime: 180,
                servings: 4,
                ingredients: [
                    "2 lbs pork ribs",
                    "1/4 cup brown sugar",
                    "1 tablespoon paprika",
                    "1 teaspoon garlic powder",
                    "1 teaspoon onion powder",
                    "1 cup BBQ sauce",
                    "Salt and pepper to taste"
                ]
            },
            {
                idMeal: "52784",
                strMeal: "Chocolate Cake",
                strCategory: "Dessert",
                strArea: "American",
                strMealThumb: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
                strInstructions: "Preheat oven to 350°F. Grease and flour two 9-inch round baking pans...",
                prepTime: 20,
                cookTime: 30,
                servings: 12,
                ingredients: [
                    "2 cups all-purpose flour",
                    "2 cups sugar",
                    "3/4 cup cocoa powder",
                    "2 teaspoons baking soda",
                    "1 teaspoon baking powder",
                    "1 teaspoon salt",
                    "2 eggs",
                    "1 cup milk",
                    "1/2 cup vegetable oil",
                    "2 teaspoons vanilla extract",
                    "1 cup boiling water"
                ]
            },
            {
                idMeal: "52785",
                strMeal: "Shrimp Scampi",
                strCategory: "Seafood",
                strArea: "Italian",
                strMealThumb: "https://www.allrecipes.com/thmb/ev5_y7Ns9olTeUv-3FvG-h8btew=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-recipe-19508-shrimp-scampi-VAT-hero-01-4x3-f5a1c9cadca542919285caa8dcf5d135.jpg",
                strInstructions: "Cook pasta according to package directions. Meanwhile, heat olive oil in a large skillet...",
                prepTime: 10,
                cookTime: 15,
                servings: 4,
                ingredients: [
                    "1 lb shrimp, peeled and deveined",
                    "8 oz linguine",
                    "4 cloves garlic, minced",
                    "1/4 cup olive oil",
                    "1/4 cup white wine",
                    "3 tablespoons lemon juice",
                    "2 tablespoons butter",
                    "2 tablespoons parsley, chopped",
                    "Salt and pepper to taste"
                ]
            },
            {
                idMeal: "52786",
                strMeal: "Beef Stroganoff",
                strCategory: "Beef",
                strArea: "Russian",
                strMealThumb: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
                strInstructions: "Cut beef into thin strips and season with salt and pepper. Heat oil in a large skillet...",
                prepTime: 15,
                cookTime: 25,
                servings: 4,
                ingredients: [
                    "1 lb beef sirloin, sliced",
                    "8 oz egg noodles",
                    "1 onion, diced",
                    "8 oz mushrooms, sliced",
                    "2 cups beef broth",
                    "1 cup sour cream",
                    "2 tablespoons flour",
                    "2 tablespoons butter",
                    "Salt and pepper to taste"
                ]
            }
        ];

        // Sample testimonials data
        const sampleTestimonials = [
            {
                name: "kafi",
                rating: 5,
                comment: "This recipe finder is amazing! I found the perfect chicken curry recipe for dinner last night. My whole family loved it!",
                date: "2025-10-15"
            },
            {
                name: "kornia",
                rating: 4,
                comment: "Great variety of recipes. The interface is user-friendly and the search works perfectly. Would recommend to all cooking enthusiasts!",
                date: "2025-10-12"
            },
            {
                name: "Nahid",
                rating: 5,
                comment: "As a beginner cook, I really appreciate the clear instructions and ingredient lists. The teriyaki chicken casserole was a hit!",
                date: "2025-10-10"
            }
        ];

        // Initialize testimonials from localStorage or use sample data
        let testimonials = JSON.parse(localStorage.getItem('recipeTestimonials')) || sampleTestimonials;

        // User management
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let users = JSON.parse(localStorage.getItem('recipeUsers')) || [];
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || {};

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Event listeners initialization
            if (searchForm) searchForm.addEventListener('submit', handleSearch);
            if (feedbackForm) feedbackForm.addEventListener('submit', handleFeedback);
            if (loginForm) loginForm.addEventListener('submit', handleLogin);
            if (registerForm) registerForm.addEventListener('submit', handleRegister);
            if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
            if (savedRecipesBtn) savedRecipesBtn.addEventListener('click', handleSavedRecipes);
            if (saveRecipeBtn) saveRecipeBtn.addEventListener('click', handleSaveRecipe);
            
            // Password confirmation validation
            const registerPassword = document.getElementById('registerPassword');
            const registerConfirmPassword = document.getElementById('registerConfirmPassword');
            
            if (registerPassword && registerConfirmPassword) {
                registerPassword.addEventListener('input', validatePasswordStrength);
                registerConfirmPassword.addEventListener('input', validatePasswordMatch);
            }
            
            // Initialize the application
            initializeApp();
        });

        function handleSearch(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                searchRecipes(searchTerm);
            } else {
                displayStaticRecipes();
            }
        }

        function handleFeedback(e) {
            e.preventDefault();
            submitFeedback();
        }

        function handleLogin(e) {
            e.preventDefault();
            loginUser();
        }

        function handleRegister(e) {
            e.preventDefault();
            registerUser();
        }

        function handleLogout() {
            logoutUser();
        }

        function handleSavedRecipes() {
            showSavedRecipes();
        }

        function handleSaveRecipe() {
            saveCurrentRecipe();
        }

        function validatePasswordStrength() {
            const password = document.getElementById('registerPassword').value;
            const strengthIndicator = document.querySelector('.password-strength');
            
            if (!strengthIndicator) return;
            
            // Reset strength indicator
            strengthIndicator.className = 'password-strength';
            
            if (password.length === 0) {
                return;
            }
            
            // Simple password strength check
            if (password.length < 6) {
                strengthIndicator.classList.add('password-strength-weak');
            } else if (password.length < 8) {
                strengthIndicator.classList.add('password-strength-medium');
            } else {
                strengthIndicator.classList.add('password-strength-strong');
            }
        }

        function validatePasswordMatch() {
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            const confirmField = document.getElementById('registerConfirmPassword');
            
            if (confirmPassword.length === 0) {
                confirmField.classList.remove('is-invalid');
                confirmField.classList.remove('is-valid');
                return;
            }
            
            if (password !== confirmPassword) {
                confirmField.classList.add('is-invalid');
                confirmField.classList.remove('is-valid');
            } else {
                confirmField.classList.remove('is-invalid');
                confirmField.classList.add('is-valid');
            }
        }

        function initializeApp() {
            displayStaticRecipes();
            displayTestimonials();
            updateUIForAuthState();
        }

        // User Authentication Functions
        function loginUser() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Simple validation
            if (!email || !password) {
                showToast('Please fill in all fields', 'danger');
                return;
            }

            // Find user by email
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Login successful
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUIForAuthState();

                // Close modal and show success message
                const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
                if (authModal) authModal.hide();

                showToast('Login successful! Welcome back, ' + user.name + '!', 'success');
            } else {
                // Login failed
                showToast('Invalid email or password. Please try again.', 'danger');
            }
        }

        function registerUser() {
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;

            // Simple validation
            if (!name || !email || !phone || !password || !confirmPassword) {
                showToast('Please fill in all fields', 'danger');
                return;
            }

            // Validate passwords match
            if (password !== confirmPassword) {
                showToast('Passwords do not match. Please try again.', 'danger');
                return;
            }

            // Check if user already exists
            if (users.some(u => u.email === email)) {
                showToast('An account with this email already exists.', 'danger');
                return;
            }

            // Create new user
            const newUser = {
                id: Date.now().toString(),
                name,
                email,
                phone,
                password,
                joinDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            };

            // Add to users array
            users.push(newUser);
            localStorage.setItem('recipeUsers', JSON.stringify(users));

            // Auto login after registration
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUIForAuthState();

            // Close modal and show success message
            const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
            if (authModal) authModal.hide();

            showToast('Registration successful! Welcome to Recipe Finder, ' + name + '!', 'success');
        }

        function logoutUser() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateUIForAuthState();
            showToast('You have been logged out successfully.', 'info');
        }

        function updateUIForAuthState() {
            if (currentUser) {
                // User is logged in
                if (userNotLoggedIn) userNotLoggedIn.classList.add('d-none');
                if (userLoggedIn) userLoggedIn.classList.remove('d-none');

                // Update user info in navbar
                if (userNameNav) userNameNav.textContent = currentUser.name;
                if (userAvatar) userAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=random`;

                // Update profile modal if it exists
                const profileName = document.getElementById('profileName');
                const profileEmail = document.getElementById('profileEmail');
                const profilePhone = document.getElementById('profilePhone');
                const profileJoinDate = document.getElementById('profileJoinDate');
                const profileAvatar = document.getElementById('profileAvatar');

                if (profileName) profileName.textContent = currentUser.name;
                if (profileEmail) profileEmail.textContent = currentUser.email;
                if (profilePhone) profilePhone.textContent = currentUser.phone;
                if (profileJoinDate) profileJoinDate.textContent = currentUser.joinDate;
                if (profileAvatar) profileAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&background=random`;
            } else {
                // User is not logged in
                if (userNotLoggedIn) userNotLoggedIn.classList.remove('d-none');
                if (userLoggedIn) userLoggedIn.classList.add('d-none');
            }
        }

        function saveCurrentRecipe() {
            if (!currentUser) {
                showToast('Please login to save recipes', 'warning');
                return;
            }

            const recipeTitle = document.getElementById('modalRecipeTitle').textContent;
            const recipeImage = document.getElementById('modalRecipeImage').src;
            const recipeId = recipeTitle.toLowerCase().replace(/\s+/g, '-');

            // Initialize user's saved recipes if not exists
            if (!savedRecipes[currentUser.id]) {
                savedRecipes[currentUser.id] = [];
            }

            // Check if recipe is already saved
            if (savedRecipes[currentUser.id].some(r => r.id === recipeId)) {
                showToast('Recipe is already saved', 'info');
                return;
            }

            // Add recipe to saved recipes
            savedRecipes[currentUser.id].push({
                id: recipeId,
                title: recipeTitle,
                image: recipeImage,
                savedAt: new Date().toLocaleDateString()
            });

            // Save to localStorage
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

            // Update button appearance
            saveRecipeBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
            saveRecipeBtn.classList.remove('btn-outline-danger');
            saveRecipeBtn.classList.add('btn-success');

            showToast('Recipe saved successfully!', 'success');
        }

        function showSavedRecipes() {
            if (!currentUser) {
                showToast('Please login to view saved recipes', 'warning');
                return;
            }

            const savedRecipesContainer = document.getElementById('savedRecipesContainer');
            const noSavedRecipes = document.getElementById('noSavedRecipes');

            // Clear previous content
            savedRecipesContainer.innerHTML = '';

            // Get user's saved recipes
            const userSavedRecipes = savedRecipes[currentUser.id] || [];

            if (userSavedRecipes.length === 0) {
                noSavedRecipes.classList.remove('d-none');
                savedRecipesContainer.classList.add('d-none');
            } else {
                noSavedRecipes.classList.add('d-none');
                savedRecipesContainer.classList.remove('d-none');

                // Display saved recipes
                userSavedRecipes.forEach(recipe => {
                    const recipeEl = document.createElement('div');
                    recipeEl.className = 'col';
                    recipeEl.innerHTML = `
                        <div class="card saved-recipe-card">
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src="${recipe.image}" class="img-fluid rounded-start" alt="${recipe.title}" style="height: 120px; width: 100%; object-fit: cover;">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${recipe.title}</h5>
                                        <p class="card-text"><small class="text-muted">Saved on ${recipe.savedAt}</small></p>
                                    </div>
                                </div>
                                <div class="col-md-1 d-flex align-items-center justify-content-center">
                                    <button class="btn btn-sm btn-outline-danger remove-recipe" data-id="${recipe.id}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    savedRecipesContainer.appendChild(recipeEl);
                });

                // Add event listeners to remove buttons
                document.querySelectorAll('.remove-recipe').forEach(button => {
                    button.addEventListener('click', function () {
                        const recipeId = this.getAttribute('data-id');
                        removeSavedRecipe(recipeId);
                    });
                });
            }

            // Show the modal
            const savedRecipesModal = new bootstrap.Modal(document.getElementById('savedRecipesModal'));
            savedRecipesModal.show();
        }

        function removeSavedRecipe(recipeId) {
            if (!currentUser) return;

            // Filter out the recipe to remove
            savedRecipes[currentUser.id] = savedRecipes[currentUser.id].filter(r => r.id !== recipeId);

            // Save to localStorage
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

            // Refresh the saved recipes display
            showSavedRecipes();

            showToast('Recipe removed from saved recipes', 'info');
        }

        function showToast(message, type = 'info') {
            // Create toast container if it doesn't exist
            if (!document.getElementById('toastContainer')) {
                const toastContainer = document.createElement('div');
                toastContainer.id = 'toastContainer';
                toastContainer.className = 'position-fixed top-0 end-0 p-3';
                toastContainer.style.zIndex = '1100';
                document.body.appendChild(toastContainer);
            }

            const toast = document.createElement('div');
            toast.className = `toast align-items-center text-white bg-${type} border-0`;
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');
            toast.setAttribute('aria-atomic', 'true');

            toast.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            `;

            document.getElementById('toastContainer').appendChild(toast);

            const bsToast = new bootstrap.Toast(toast);
            bsToast.show();

            // Remove toast after it's hidden
            toast.addEventListener('hidden.bs.toast', function () {
                toast.remove();
            });
        }

        // Search Recipes Function
        function searchRecipes(query) {
            // Show loader, hide previous results
            loader.style.display = 'block';
            resultsContainer.innerHTML = '';
            noResults.classList.add('d-none');

            // Fetch recipes from API
            fetch(`${API_URL}${query}`)
                .then(response => response.json())
                .then(data => {
                    setTimeout(() => {
                        loader.style.display = 'none';

                        if (data.meals) {
                            displayRecipes(data.meals);
                        } else {
                            noResults.classList.remove('d-none');
                        }
                    }, 800);
                })
                .catch(error => {
                    console.error('Error:', error);
                    loader.style.display = 'none';
                    noResults.classList.remove('d-none');
                });
        }

        // Display Static Recipes Function
        function displayStaticRecipes() {
            resultsContainer.innerHTML = '';

            staticRecipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'col';
                recipeCard.innerHTML = `
                    <div class="card h-100 recipe-card">
                        <span class="badge bg-success category-badge">${recipe.strCategory}</span>
                        <img src="${recipe.strMealThumb}" class="card-img-top recipe-image" alt="${recipe.strMeal}">
                        <div class="card-body">
                            <h5 class="card-title">${recipe.strMeal}</h5>
                            <p class="card-text">${recipe.strArea} ${recipe.strCategory}</p>
                            <p class="card-text"><small class="text-muted"><i class="fas fa-clock me-1"></i> ${recipe.prepTime + recipe.cookTime} mins | <i class="fas fa-user me-1"></i> ${recipe.servings} servings</small></p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <button class="btn btn-primary w-100 view-recipe" data-id="${recipe.idMeal}">
                                View Recipe
                            </button>
                        </div>
                    </div>
                `;
                resultsContainer.appendChild(recipeCard);
            });

            // Add event listeners to view recipe buttons
            document.querySelectorAll('.view-recipe').forEach(button => {
                button.addEventListener('click', function () {
                    const mealId = this.getAttribute('data-id');
                    showStaticRecipeDetails(mealId);
                });
            });
        }

        // Show Static Recipe Details
        function showStaticRecipeDetails(mealId) {
            const recipe = staticRecipes.find(r => r.idMeal === mealId);

            if (recipe) {
                // Set modal content
                document.getElementById('modalRecipeTitle').textContent = recipe.strMeal;
                document.getElementById('modalRecipeImage').src = recipe.strMealThumb;

                // Format and display ingredients
                const ingredientsList = document.getElementById('modalRecipeIngredients');
                ingredientsList.innerHTML = '';

                recipe.ingredients.forEach(ingredient => {
                    const listItem = document.createElement('li');
                    listItem.textContent = ingredient;
                    ingredientsList.appendChild(listItem);
                });

                // Set instructions, cooking time, and servings
                document.getElementById('modalRecipeInstructions').textContent = recipe.strInstructions;
                document.getElementById('modalRecipeTime').textContent = recipe.prepTime + recipe.cookTime;
                document.getElementById('modalRecipeServings').textContent = recipe.servings;
                
                const sourceLink = document.getElementById('modalRecipeSource');
                sourceLink.href = recipe.strSource || 'https://www.allrecipes.com/'; // Fallback to a recipe site
                sourceLink.target = '_blank';

                // Reset save button
                saveRecipeBtn.innerHTML = '<i class="far fa-bookmark"></i> Save';
                saveRecipeBtn.classList.remove('btn-success');
                saveRecipeBtn.classList.add('btn-outline-danger');

                // Check if recipe is already saved
                if (currentUser && savedRecipes[currentUser.id]) {
                    const recipeId = recipe.strMeal.toLowerCase().replace(/\s+/g, '-');
                    if (savedRecipes[currentUser.id].some(r => r.id === recipeId)) {
                        saveRecipeBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
                        saveRecipeBtn.classList.remove('btn-outline-danger');
                        saveRecipeBtn.classList.add('btn-success');
                    }
                }

                // Show the modal
                const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
                recipeModal.show();
            }
        }

        // Display Recipes Function (for API results)
        function displayRecipes(meals) {
            resultsContainer.innerHTML = '';

            meals.forEach(meal => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'col';
                recipeCard.innerHTML = `
                    <div class="card h-100 recipe-card">
                        <span class="badge bg-success category-badge">${meal.strCategory}</span>
                        <img src="${meal.strMealThumb}" class="card-img-top recipe-image" alt="${meal.strMeal}">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strArea} ${meal.strCategory}</p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <button class="btn btn-primary w-100 view-recipe" data-id="${meal.idMeal}">
                                View Recipe
                            </button>
                        </div>
                    </div>
                `;
                resultsContainer.appendChild(recipeCard);
            });

            // Add event listeners to view recipe buttons
            document.querySelectorAll('.view-recipe').forEach(button => {
                button.addEventListener('click', function () {
                    const mealId = this.getAttribute('data-id');
                    fetchRecipeDetails(mealId);
                });
            });
        }

        // Fetch Recipe Details Function
        function fetchRecipeDetails(mealId) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.meals) {
                        showRecipeDetails(data.meals[0]);
                    }
                })
                .catch(error => console.error('Error:', error));
        }

        // Show Recipe Details in Modal (for API results)
        function showRecipeDetails(meal) {
            // Set modal content
            document.getElementById('modalRecipeTitle').textContent = meal.strMeal;
            document.getElementById('modalRecipeImage').src = meal.strMealThumb;

            // Format and display ingredients
            const ingredientsList = document.getElementById('modalRecipeIngredients');
            ingredientsList.innerHTML = '';

            for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];
                    const listItem = document.createElement('li');
                    listItem.textContent = `${measure} ${ingredient}`;
                    ingredientsList.appendChild(listItem);
                }
            }

            // Set instructions, cooking time, and servings
            document.getElementById('modalRecipeInstructions').textContent = meal.strInstructions;
            document.getElementById('modalRecipeTime').textContent = '30'; // Placeholder as the API doesn't provide time
            document.getElementById('modalRecipeServings').textContent = meal.strYoutube ? '4' : 'N/A'; // Placeholder
            document.getElementById('modalRecipeSource').href = meal.strYoutube || meal.strSource || '#';

            // Reset save button
            saveRecipeBtn.innerHTML = '<i class="far fa-bookmark"></i> Save';
            saveRecipeBtn.classList.remove('btn-success');
            saveRecipeBtn.classList.add('btn-outline-danger');

            // Check if recipe is already saved
            if (currentUser && savedRecipes[currentUser.id]) {
                const recipeId = meal.strMeal.toLowerCase().replace(/\s+/g, '-');
                if (savedRecipes[currentUser.id].some(r => r.id === recipeId)) {
                    saveRecipeBtn.innerHTML = '<i class="fas fa-bookmark"></i> Saved';
                    saveRecipeBtn.classList.remove('btn-outline-danger');
                    saveRecipeBtn.classList.add('btn-success');
                }
            }

            // Show the modal
            const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
            recipeModal.show();
        }

        // Submit Feedback Function
        function submitFeedback() {
            const userName = document.getElementById('userName').value;
            const userRating = document.querySelector('input[name="rating"]:checked');
            const userComment = document.getElementById('userComment').value;

            if (!userName || !userRating || !userComment) {
                showToast('Please fill in all fields', 'danger');
                return;
            }

            const currentDate = new Date().toISOString().split('T')[0];

            const newTestimonial = {
                name: userName,
                rating: parseInt(userRating.value),
                comment: userComment,
                date: currentDate
            };

            // Add to testimonials array
            testimonials.unshift(newTestimonial);

            // Save to localStorage
            localStorage.setItem('recipeTestimonials', JSON.stringify(testimonials));

            // Update testimonials display
            displayTestimonials();

            // Show success message
            showToast('Thank you for your feedback!', 'success');

            // Reset form and close modal
            feedbackForm.reset();
            const feedbackModal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
            feedbackModal.hide();
        }

        // Display Testimonials Function
        function displayTestimonials() {
            if (!testimonialsContainer) return;
            
            testimonialsContainer.innerHTML = '';

            // Show only the 3 most recent testimonials
            const recentTestimonials = testimonials.slice(0, 3);

            recentTestimonials.forEach(testimonial => {
                const testimonialCard = document.createElement('div');
                testimonialCard.className = 'col';
                testimonialCard.innerHTML = `
                    <div class="card h-100 testimonial-card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="card-title mb-0">${testimonial.name}</h5>
                                <small class="text-muted">${testimonial.date}</small>
                            </div>
                            <div class="mb-3">
                                ${getStarRating(testimonial.rating)}
                            </div>
                            <p class="card-text testimonial-text">${testimonial.comment}</p>
                        </div>
                    </div>
                `;
                testimonialsContainer.appendChild(testimonialCard);
            });
        }

        // Get Star Rating HTML
        function getStarRating(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star text-warning"></i> ';
                } else {
                    stars += '<i class="far fa-star text-warning"></i> ';
                }
            }
            return stars;
        }