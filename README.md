# @aid-on/nextauth-providers

NextAuth.js authentication providers by Aid-On

## Installation

```bash
npm install @aid-on/nextauth-providers
```

## Usage

```typescript
import NextAuth from "next-auth"
import { LineProvider } from "@aid-on/nextauth-providers"

export default NextAuth({
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    })
  ],
})
```

## Available Providers

### LINE
Full support for LINE Login OAuth 2.0

## Configuration

### Required Environment Variables

- `LINE_CLIENT_ID`: Your LINE channel ID
- `LINE_CLIENT_SECRET`: Your LINE channel secret

### LINE Developers Console Setup

1. Create a LINE Login channel at [LINE Developers Console](https://developers.line.biz/)
2. Set the callback URL: `https://your-domain.com/api/auth/callback/line`
3. Get your Channel ID and Channel Secret

## Features

- Retrieves user profile information (ID, display name, profile picture)
- Handles OAuth 2.0 flow with LINE
- Compatible with NextAuth.js v4+
- TypeScript support with full type definitions

## License

MIT