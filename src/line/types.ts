import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
    } & DefaultSession["user"]
  }
}

export interface LineTokenResponse {
  access_token: string
  expires_in: number
  id_token?: string
  refresh_token: string
  scope: string
  token_type: string
}

export interface LineUserProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

export interface LineAuthOptions {
  clientId: string
  clientSecret: string
  scope?: string
  botPrompt?: "normal" | "aggressive"
}