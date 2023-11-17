### WhatToWatch

**WhatToWatch is still work in progress**
The latest version can be found [here](https://what-to-watch-blush.vercel.app/)

This application will help you choose a movie or TV show to watch and will give you movie suggestions base on different factors.


![localhost_5173_](https://github.com/TeodorTodorovT/WhatToWatch/assets/44364594/46156e84-ef26-494d-af4f-b850eaf3575a)



## Installation:

Make sure that you have Node version ^14.18.0 installed as it is required to run the project!
To install Node plase take a look at this article:
- [Node Version Manager – NVM Install Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

1. Get your free API key from [TMDB](https://developer.themoviedb.org/docs/getting-started)
2. Open a terminal in an empty directory
3. Clone the repo - `git clone https://github.com/TeodorTodorovT/WhatToWatch.git`
4. Add a file named `.env.local` to the directory and enter the following inside:
> VITE_BASE_URL = "https://api.themoviedb.org/3"
>
> VITE_DB_ACCESS_TOKEN = "{THE API KEY YOU GOT FROM TMDB}"
5. Install NPM Packages - `npm install`
6. Start the application - `npm run dev`
