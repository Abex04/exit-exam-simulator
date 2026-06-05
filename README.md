# SE Exit Exam Simulator

Interactive SE Exit Exam Simulator — a lightweight React + Vite app for practicing software-engineering certification questions with Immediate and Review modes.

**Features**
- Timed exam sessions
- Immediate feedback or review mode
- Flag and navigate questions
- Build ready for static hosting (Netlify)

**Prerequisites**
- Node.js 18+ and npm

**Local development**
1. Install dependencies
```bash
npm install
```
2. Run dev server
```bash
npm run dev
```

**Build for production**
```bash
npm run build
npm run preview   # preview production build locally
```

**Deploy to Netlify (recommended)**
1. Push this repo to GitHub.
2. In Netlify: Add new site → Import from Git → select `Abex04/exit-exam-simulator`.
3. Set build command: `npm run build` and publish directory: `dist`.
4. (Optional) CLI deploy:
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --dir=dist --prod
```

**Notes**
- Question data is in `src/questions.js`. The app expects `q`, `o`, `a`, `e` keys when rendering questions.
- SPA routing is supported via `public/_redirects` and `netlify.toml` (already included).

**License**
MIT
