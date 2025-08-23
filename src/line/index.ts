/**
 * LINE Provider for NextAuth.js
 * Uses @aid-on/auth-providers core library
 */

import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/oauth"
import { type LineUserProfile } from "@aid-on/auth-providers"

// Use type alias instead of empty interface
export type LineProfile = LineUserProfile

export interface LineOptions extends OAuthUserConfig<LineProfile> {
  clientId: string
  clientSecret: string
}

export default function LineProvider(
  options: LineOptions
): OAuthConfig<LineProfile> {
  return {
    id: "line",
    name: "LINE",
    type: "oauth",
    authorization: {
      url: "https://access.line.me/oauth2/v2.1/authorize",
      params: {
        scope: "profile",
        bot_prompt: "normal",
      },
    },
    token: "https://api.line.me/oauth2/v2.1/token",
    userinfo: "https://api.line.me/v2/profile",
    idToken: false,
    checks: ["state"],
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    profile(profile: LineProfile) {
      return {
        id: profile.userId,
        name: profile.displayName,
        email: null,
        image: profile.pictureUrl,
      }
    },
  }
}

export { LineProvider }