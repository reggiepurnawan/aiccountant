# Aiccountant Development Plan (Updated)

## 📱 Main Screens (from Figma)
1. Home (`main-home.jpeg`)
2. Transaction List (`main-transaction-list.jpeg`)
3. Category View (`main-category.jpeg`)
4. Accounts (`main-accounts.jpeg`)

## 🔄 Overlays/Modals
1. New Transaction (`overlay-new-transaction.jpeg`)
2. Edit Transaction (`overlay-edit-transaction.jpeg`)
3. View Category (`overlay-view-category.jpeg`)
4. Filter Category (`overlay-filter-category.jpeg`)

## 🎯 Development Phases

### Phase 1: Project Setup ✅
- [x] Initialize Remix project
- [x] Install and configure Tailwind CSS
- [x] Set up shadcn/ui
- [x] Configure Storybook
- [x] Set up project structure

### Phase 2: Core Components Development 🏗️

#### 2.1 Layout & Navigation
- [ ] Mobile Layout Container
  - Safe area padding
  - Bottom navigation bar
  - Fixed header
- [ ] Navigation Components
  - Bottom tab bar with icons (Home, Transaction, Category, Accounts)
  - Active state styling
  - Navigation logic

#### 2.2 Shared UI Components
- [ ] Header Component
  - Month/year selector
  - Total amount display with trend indicator
  - Settings/profile button
- [ ] Amount Display
  - Currency formatting (Rp)
  - Positive/negative styling
- [ ] Category Icons
  - Icon component with background colors
  - Size variants
- [ ] Progress Bars
  - Linear progress for budgets
  - Percentage indicator

#### 2.3 Chart Components
- [ ] Expense Trend Line Chart
  - Monthly comparison
  - Dot indicators
  - Gradient background
- [ ] Category Distribution
  - Horizontal bars with percentages
  - Category icons integration

#### 2.4 List Components
- [ ] Transaction Item
  - Merchant name with icon/initial
  - Amount display
  - Category tag
  - Date display
  - Review status indicator
- [ ] Category Item
  - Icon with color
  - Progress bar
  - Amount/budget display
- [ ] Account Item
  - Bank logo/icon
  - Balance display
  - Auto-forward status
  - Upload button

### Phase 3: Page Implementation 📱

#### 3.1 Home Page
- [ ] Monthly Overview
  - Total expense with trend
  - Period selector
- [ ] Expense Chart
  - Line chart component
  - Interactive points
- [ ] Category Distribution
  - Top categories with percentages
  - Progress indicators
- [ ] Recent Transactions
  - Transaction list
  - Review indicators

#### 3.2 Transaction List Page
- [ ] Transaction Filters
  - Date range
  - Category filter
  - Search by merchant
- [ ] Grouped Transactions
  - Date grouping
  - Sort options
- [ ] Review System
  - Review status
  - Batch review

#### 3.3 Category Page
- [ ] Budget Overview
  - Total budget vs spent
  - Category breakdown
- [ ] Category List
  - Progress bars
  - Amount tracking
- [ ] Category Details Modal
  - Spending analysis
  - Budget management

#### 3.4 Accounts Page
- [ ] Account Groups
  - M-banking
  - Credit Cards
  - Wallet
- [ ] Account Management
  - Balance display
  - Auto-forward setup
  - Receipt upload

### Phase 4: Transaction Management
- [ ] New Transaction Form
  - Amount input with keypad
  - Category selection
  - Date picker
  - Note/description
- [ ] Edit Transaction
  - Form pre-filling
  - Update/delete options
- [ ] Batch Operations
  - Multi-select
  - Bulk review
  - Bulk categorize

### Phase 5: State & Data Management
- [ ] Application State
  - Current view/period
  - Filter states
  - Form data
- [ ] Data Persistence
  - Local storage
  - Sync status
- [ ] Mock Data
  - Sample transactions
  - Categories
  - Accounts

### Phase 6: UI/UX Polish
- [ ] Animations
  - Page transitions
  - Modal animations
  - Chart animations
- [ ] Loading States
  - Skeleton screens
  - Progress indicators
- [ ] Error Handling
  - Error messages
  - Fallback UI
- [ ] Empty States
  - First-time experience
  - Empty lists

## 🎨 Design System (from Figma)

### Colors
- Primary: Mint Green (#86EFAC)
- Background: White (#FFFFFF)
- Text Primary: Dark (#1F2937)
- Text Secondary: Gray (#6B7280)
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Error: Red (#EF4444)

### Typography
- Font Family: Inter
- Headings: Semi Bold
- Body: Regular
- Numbers: Medium

### Spacing
- Base: 4px
- Content Padding: 16px
- List Item Spacing: 12px
- Section Spacing: 24px

### Icons
- Navigation: 24px
- Category: 20px
- Action: 16px

## 📱 Responsive Design
- Primary: Mobile-first (375px - 428px)
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
