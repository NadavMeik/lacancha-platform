CLAUDE.md — LaCancha AI / AI Football Analytics Platform

Project Identity

Project name: LaCancha AI
Type: AI-powered football analytics platform
Goal: Build a professional portfolio-level product that analyzes football match data and presents insights through dashboards, charts, AI summaries, heatmaps, xG, player comparison, tactical insights, and secure role-based access.

This project should feel like a real SportsTech product, inspired by companies such as WSC Sports, Hudl, Sportian, and LaLiga Tech.

⸻

Core Product Vision

LaCancha AI helps users understand football matches through data and AI.

The platform should allow users to:

- View match results and team statistics.
- Analyze shots, passes, goals, cards, substitutions, and key events.
- View xG and chance-quality insights.
- Compare players and teams.
- Generate AI-powered match summaries.
- Display tactical insights in a clear and visual way.
- Support different user roles such as Admin, Analyst, Coach, and Fan.
- Maintain strong security and clean architecture.

The product should be built as a serious portfolio project, not as a quick demo.

⸻

Tech Stack

Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- Recharts for charts
- Clean component-based architecture

Backend

- Node.js
- Express
- TypeScript if possible
- REST API structure
- Middleware-based security

Database

- Supabase / PostgreSQL
- Clear relational schema
- Row-level security if Supabase is used

AI Layer

- Gemini API or OpenAI API
- AI should not access the database directly
- AI must receive only controlled data from backend services
- AI output should be used for summaries, insights, and explanations

Security

- JWT authentication
- Role-based access control
- Protected API routes
- Input validation
- Rate limiting
- Audit logging
- Error handling
- Secure environment variables

⸻

Architecture Principles

1. Plan Before Coding

Before implementing any non-trivial feature, first create a short plan.

Every plan should include:

- What feature is being built
- Which files will be affected
- Frontend changes
- Backend changes
- Database changes if needed
- Security considerations
- Testing checklist

Do not start coding complex features without a plan.

⸻

2. Build Small, Working Steps

Work in small iterations.

Preferred flow:

1. Build the simplest working version.
2. Test it manually.
3. Improve UI/UX.
4. Add validation and error handling.
5. Refactor only if needed.
6. Document the change.

Do not build huge features in one step.

⸻

3. Product First, Code Second

Every feature should serve a real product purpose.

Before adding a feature, ask:

- Does this help users understand football data better?
- Does this improve the analytics experience?
- Does this make the platform more impressive for a SportsTech portfolio?
- Is this feature realistic for an MVP?

Avoid adding random features that make the project messy.

⸻

MVP Scope

Phase 1 — Core Dashboard

Build the first version of the platform with:

- Landing page
- Login/Register pages
- Dashboard layout
- Match list
- Match details page
- Team statistics cards
- Basic charts
- Mock football data
- Clean responsive UI

Phase 2 — Analytics

Add:

- Shot statistics
- Possession data
- Pass completion
- xG display
- Player comparison
- Team comparison
- Key events timeline

Phase 3 — AI Insights

Add:

- AI match summary
- AI tactical insights
- AI player performance summary
- AI-generated highlight recommendations

Phase 4 — Security & Roles

Add:

- Authentication
- JWT
- Role-based UI
- Protected backend routes
- Admin / Analyst / Coach / Fan roles
- Audit logger
- Rate limiting

Phase 5 — Polish & Portfolio

Add:

- Better UI animations
- Loading states
- Empty states
- Error states
- README
- Screenshots
- Deployment
- LinkedIn post content
- Demo user accounts

⸻

User Roles

Admin

Can:

- Manage users
- Manage matches
- View all analytics
- View audit logs

Analyst

Can:

- View all match analytics
- Generate AI insights
- Compare players and teams

Coach

Can:

- View team-focused analytics
- View tactical insights
- View player performance summaries

Fan

Can:

- View public match summaries
- View simplified statistics
- View AI-generated explanations

⸻

Security Rules

Security is a major part of this project.

General Rules

- Never expose API keys in frontend code.
- Never allow the AI model to access the database directly.
- Never trust client-side input.
- Validate all incoming API requests.
- Protect all private routes.
- Keep user roles enforced in both frontend and backend.
- Use environment variables for secrets.
- Add audit logs for important actions.

Protected Actions

Log the following actions:

- Login attempt
- Failed login
- User role change
- Match creation
- Match update
- AI insight generation
- Admin dashboard access
- Unauthorized access attempt

AI Safety Rule

AI must work only through backend-controlled data.

Correct flow:

Frontend → Backend API → Database / Services → AI summary → Backend → Frontend

Incorrect flow:

Frontend → AI → Database

⸻

AI Feature Rules

AI should be used for clear, valuable football insights.

Good AI outputs:

- Match summary
- Tactical explanation
- Player performance explanation
- Highlight recommendation reasoning
- Coach-friendly insight
- Fan-friendly explanation

Bad AI outputs:

- Random unsupported claims
- Fake player statistics
- Overconfident predictions
- Long generic text
- Insights not based on available data

AI Output Format

AI summaries should be:

- Short
- Clear
- Based only on provided data
- Written like a sports analyst
- Easy to understand
- Not overly dramatic

⸻

Code Style Rules

General

- Keep code simple and readable.
- Prefer clear names over clever code.
- Avoid unnecessary abstractions.
- Use TypeScript types where possible.
- Keep functions short.
- Keep components focused.
- Avoid huge files.

Frontend

- Create reusable UI components.
- Keep pages clean.
- Move repeated logic into hooks or utilities.
- Use responsive design.
- Add loading and error states.
- Avoid hardcoded repeated data when a shared mock/API layer can be used.

Backend

- Use routes, controllers, services, and middleware.
- Keep business logic out of route files.
- Validate request bodies.
- Return consistent JSON responses.
- Use proper HTTP status codes.
- Add centralized error handling.

⸻

Folder Structure Recommendation

lacancha-platform/
client/
src/
components/
pages/
hooks/
services/
types/
utils/
data/
server/
src/
routes/
controllers/
services/
middleware/
models/
utils/
config/
docs/
tasks.md
lessons.md
architecture.md
api.md

⸻

Task Management

Maintain a docs/tasks.md file.

Each task should include:

- Task title
- Goal
- Files changed
- Status
- Manual test result
- Notes

Example:

## Build Match Dashboard

Status: In Progress
Goal:
Create the first dashboard screen with match cards and basic team statistics.
Files:

- client/src/pages/Dashboard.tsx
- client/src/components/MatchCard.tsx
  Manual test:
- Dashboard loads successfully
- Match cards display correctly
- Responsive layout works on mobile

⸻

Lessons Learned

Maintain a docs/lessons.md file.

After fixing bugs or making important architecture decisions, add a short note.

Example:

## Lesson: Protect routes on both frontend and backend

Frontend route guards improve UX, but they are not enough for security. Backend middleware must also verify the JWT and user role before returning protected data.

⸻

Testing Rules

Before marking any feature as complete, verify:

- App runs without errors
- No console errors
- UI is responsive
- Main user flow works
- API returns expected data
- Unauthorized users are blocked
- Error states are handled
- Loading states exist when needed

Do not say a feature is done unless it was actually tested.

⸻

Design Direction

The UI should feel:

- Modern
- Premium
- Sport-tech oriented
- Clean
- Dark-mode friendly
- Data-driven
- Professional enough for LinkedIn/GitHub portfolio

Design inspiration:

- Sports analytics dashboards
- Hudl-style product pages
- WSC Sports style energy
- Modern SaaS dashboard UI

Avoid:

- Childish colors
- Overloaded screens
- Too much text
- Messy layouts
- Random icons without purpose

⸻

Suggested Screens

- Landing Page
- Login
- Register
- Main Dashboard
- Match Details
- Player Comparison
- Team Analytics
- AI Insights
- Highlights Feed
- Scout Mode
- Admin Panel
- Audit Logs
- Profile / Settings

⸻

MVP Data Model

Initial entities:

- User
- Role
- Team
- Player
- Match
- MatchEvent
- PlayerStat
- TeamStat
- AIInsight
- AuditLog

⸻

Backend API Ideas

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me
GET /api/matches
GET /api/matches/:id
POST /api/matches
PUT /api/matches/:id
GET /api/teams
GET /api/teams/:id
GET /api/players
GET /api/players/:id
GET /api/players/compare
POST /api/ai/match-summary
POST /api/ai/tactical-insights
POST /api/ai/highlight-recommendations
GET /api/audit-logs

⸻

Vibe Coding Rules

This project can be built with AI-assisted coding, but the developer must stay in control.

Rules:

- Do not blindly accept generated code.
- Understand every major file.
- Ask for explanations when needed.
- Keep changes small.
- Commit working versions frequently.
- When something breaks, inspect the error before asking for a rewrite.
- Prefer fixing over regenerating the entire project.
- Keep architecture clean from the beginning.

⸻

Git Rules

Use clear commits.

Examples:

feat: add match dashboard layout
feat: implement player comparison chart
feat: add AI match summary endpoint
fix: protect analyst routes with role middleware
refactor: split match analytics components

Avoid vague commits such as:

update
changes
fix stuff
new things

⸻

Definition of Done

A feature is done only when:

- It works locally
- It has been manually tested
- It has basic error handling
- It does not break existing screens
- It follows the project architecture
- It is documented in tasks.md
- Security implications were checked

⸻

Current North Star

Build a polished MVP that can be shown to recruiters as:

A secure AI-powered football analytics platform built with React, Node.js, Supabase, and AI APIs, demonstrating product thinking, data visualization, backend architecture, and AI integration.

This project should help position the developer for roles such as:

- Junior QA Engineer
- Product QA Engineer
- Data Analyst
- BI Analyst
- AI Product Engineer
- Junior Full Stack Developer
- SportsTech Analyst
- AI Operations / Data Operations
