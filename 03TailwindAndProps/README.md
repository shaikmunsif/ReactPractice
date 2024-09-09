Installation of TailWInd css
    npm install -D tailwindcss postcss autoprefixer (installs tailwindcss postcss and autoprefixer)
    npx tailwindcss init -p  (create new tailwind config file)

Add file patterns 
    in taindwind.config.js file
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],

Add below code in index.css file
    @tailwind base;
    @tailwind components;
    @tailwind utilities;