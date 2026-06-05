Netlify Deployment & Verification

1. Build locally

```bash
npm install
npm run build
```

2. Confirm `dist/` contents

```bash
ls -la dist
```

3. If connected to Netlify (recommended):
- Push your branch to the repository remote (e.g., `git push origin feature/100-questions`)
- Netlify will auto-build using `npm run build` and publish `dist/`.

4. Manual deploy with Netlify CLI (optional):

```bash
npm i -g netlify-cli
netlify deploy --dir=dist --prod
```

5. Post-deploy verification (live):
- Open the site URL (Netlify dashboard -> Site deploys -> Live URL).
- Start a new session and confirm:
  - Navigation displays exactly 100 items.
  - Completing the exam shows correct final score and message (`>50` shows Congratulations, `<=50` shows Needs Improvement).
  - Retaking the exam does not duplicate questions across sessions until pool exhaustion.

6. Troubleshooting
- If the site shows stale content, clear browser cache and hard refresh (Ctrl+F5).
- Ensure `netlify.toml` has `publish = "dist"` and `build.command = "npm run build"`.
- Check Netlify build logs for errors.

7. optional: Rollback
- Use the Netlify deploys dashboard to rollback to a previous deploy if needed.
