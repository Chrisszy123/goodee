# Wedding Guest Validator

A simple and elegant Next.js landing page for validating wedding guests. Guests can search for their names to confirm their invitation and view their table assignment details.

## Features

- 🔍 **Guest Search**: Search functionality to find guests by name
- ✅ **Validation**: Confirms if a guest is on the invitation list
- 🎨 **Beautiful UI**: Wedding-themed design with elegant styling
- 📱 **Responsive**: Works perfectly on desktop and mobile devices
- 💕 **Guest Details**: Shows table assignments and plus-one information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter a guest's full name in the search box
2. Click "Search" or press Enter
3. The system will display:
   - ✅ **Found**: Guest details including table assignment and plus-one status
   - ❌ **Not Found**: Message indicating the name isn't on the guest list

## Sample Guests

The application comes with 25 sample guests. Try searching for:
- "John Smith"
- "Sarah Johnson"
- "Michael Brown"
- "Emily Davis"

## Customization

### Adding/Modifying Guests

Edit the guest list in `data/guests.ts`:

```typescript
export const weddingGuests: Guest[] = [
  { 
    id: 1, 
    name: "Guest Name", 
    email: "guest@email.com", 
    plusOne: true, 
    table: 1 
  },
  // Add more guests...
];
```

### Styling

Modify the appearance by editing `styles/Home.module.css` and `styles/globals.css`.

### Wedding Details

Update wedding information in `pages/index.tsx` in the info section.

## Project Structure

```
├── data/
│   └── guests.ts          # Guest data and search functionality
├── pages/
│   ├── _app.tsx          # App component
│   └── index.tsx         # Main landing page
├── styles/
│   ├── globals.css       # Global styles
│   └── Home.module.css   # Component-specific styles
└── package.json
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- CSS Modules - Styling

## License

This project is open source and available under the [MIT License](LICENSE).
