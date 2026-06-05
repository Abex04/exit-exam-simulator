PR Title: Limit sessions to 100 unique questions; prevent duplicates across retakes

Summary:
- Select exactly 100 questions per exam session (Immediate Feedback & Exam Review modes).
- Persist used question IDs in `localStorage` under `usedQuestionIds_v1` to avoid duplicating questions across retakes.
- If fewer than 100 unused questions remain, reset used-history and alert the user so a fresh 100-question session can be created.
- Results page now shows a pass/fail message: score > 50 -> "Congratulations — great job!"; score <= 50 -> "Needs Improvement — keep studying."

Files changed:
- `src/App.jsx` — core changes to session sampling, localStorage persistence, and result messaging.

Testing notes:
- Run locally with `npm install` and `npm run dev`.
- Verify navigation shows 100 items and scoring behavior.
- To simulate fresh repeatable sessions, remove the key in browser console: `localStorage.removeItem('usedQuestionIds_v1')`.

Deployment:
- Netlify build uses `npm run build` and publishes `dist/` (see `netlify.toml`).

Please review the sampling logic and messaging; let me know if you'd prefer an opt-in UI control to reset used-history instead of auto-resetting.
