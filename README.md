# Aiccountant

A mobile-first expense tracking web application built with Remix, featuring a beautiful UI powered by Tailwind CSS and shadcn/ui components.

## 📱 App Features
From the Figma designs:
- Monthly expense tracking with trend visualization
- Categorized expense breakdown with budgeting
- Detailed transaction history with review system
- Multi-account management (M-banking, Credit Cards, Wallet)
- Email auto-forward for receipt processing

## 🎯 Project Progress Tracker

### Phase 1: Project Setup ✅
- [x] Initialize Remix project
- [x] Install and configure Tailwind CSS
- [x] Set up shadcn/ui
- [x] Configure Storybook
- [x] Create basic project structure

### Phase 2: Core Components Development 🏗️
1. Layout Components
   - [ ] Mobile Layout Container
     - Safe area padding
     - Fixed header area
     - Main content area
   - [ ] Bottom Navigation
     - Home, Transaction, Category, Account tabs
     - Active state indicators
   - [ ] Header Component
     - Month/year selector
     - Total amount with trend
     - Settings button
   - [ ] Floating Action Button

2. Data Display Components
   - [ ] Amount Display
     - Currency (Rp) formatting
     - Positive/negative states
   - [ ] Category Tag
     - Icon with background
     - Label with amount
   - [ ] Progress Bar
     - Linear progress
     - Percentage indicator
   - [ ] Status Badge
     - Review status
     - Auto-forward status

3. Chart Components
   - [ ] Expense Trend Chart
     - Line chart with gradient
     - Interactive data points
     - Month comparison
   - [ ] Category Distribution
     - Horizontal bars
     - Percentage calculation
     - Category icons

4. List Components
   - [ ] Transaction Item
     - Merchant with icon
     - Amount and category
     - Date and review status
   - [ ] Category Item
     - Icon and progress
     - Budget vs actual
   - [ ] Account Item
     - Bank logo/icon
     - Balance display
     - Auto-forward status

### Phase 3: Page Implementation 📱
1. Home Page (`/`)
   - [ ] Monthly Overview
     - Total expense
     - Trend indicator
   - [ ] Expense Chart
     - Period selector
     - Data visualization
   - [ ] Category Breakdown
     - Top categories
     - Progress bars
   - [ ] Recent Transactions
     - List with review status
     - "View all" link

2. Transactions Page (`/transactions`)
   - [ ] Transaction List
     - Date grouping
     - Sort options
   - [ ] Search & Filters
     - Merchant search
     - Category filter
     - Date range
   - [ ] Review System
     - Status indicators
     - Batch actions

3. Categories Page (`/categories`)
   - [ ] Budget Overview
     - Total budget/spent
     - Period selection
   - [ ] Category List
     - Progress tracking
     - Budget management
   - [ ] Category Details
     - Spending analysis
     - Budget settings

4. Accounts Page (`/accounts`)
   - [ ] Account Groups
     - M-banking section
     - Credit cards section
     - Wallet section
   - [ ] Account Management
     - Balance tracking
     - Auto-forward setup
   - [ ] Receipt Upload
     - File upload
     - Processing status

### Phase 4: Transaction Management 🔄
- [ ] New Transaction Form
  - Amount input with keypad
  - Category selection
  - Date and notes
- [ ] Edit Transaction
  - Form pre-filling
  - Update/delete options
- [ ] Batch Operations
  - Multi-select
  - Bulk review
  - Bulk categorize

### Phase 5: UI/UX Polish ✨
- [ ] Animations & Transitions
  - Page transitions
  - List animations
  - Chart animations
- [ ] Loading States
  - Skeleton screens
  - Progress indicators
- [ ] Empty States
  - First-time user
  - No data views
- [ ] Error States
  - Error messages
  - Recovery actions
- [ ] Success Feedback
  - Toast notifications
  - Action confirmations

### Phase 6: Testing & Documentation 🧪
- [ ] Component Testing
  - Unit tests
  - Integration tests
- [ ] Storybook Stories
  - Component documentation
  - Usage examples
- [ ] Accessibility
  - ARIA labels
  - Keyboard navigation
- [ ] Performance
  - Load time optimization
  - Animation performance

## 🎨 Design System

### Colors
- Primary: Mint Green (#86EFAC)
- Background: White (#FFFFFF)
- Text Primary: Dark (#1F2937)
- Text Secondary: Gray (#6B7280)
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Error: Red (#EF4444)

### Typography
- Font: Inter
- Headings: Semi Bold
- Body: Regular
- Numbers: Medium

### Spacing
- Base: 4px
- Content: 16px
- Items: 12px
- Sections: 24px

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/reggiepurnawan/aiccountant.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Start Storybook:
   ```bash
   npm run storybook
   ```
