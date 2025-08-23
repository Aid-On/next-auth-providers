// Test file to verify exports are working correctly
import { LineProvider } from './src/index'
import type { LineProfile, LineOptions } from './src/index'

// Test that the provider can be instantiated
const testProvider = LineProvider({
  clientId: 'test-client-id',
  clientSecret: 'test-client-secret',
})

// Check that the provider has the expected structure
console.log('Provider ID:', testProvider.id)
console.log('Provider Name:', testProvider.name)
console.log('Provider Type:', testProvider.type)

// Type checking for LineProfile
const mockProfile: LineProfile = {
  userId: 'U123456',
  displayName: 'Test User',
  pictureUrl: 'https://example.com/pic.jpg',
  statusMessage: 'Hello World'
}

// Type checking for LineOptions
const mockOptions: LineOptions = {
  clientId: 'test-id',
  clientSecret: 'test-secret'
}

console.log('✅ All exports are working correctly!')
console.log('Mock Profile:', mockProfile)
console.log('Mock Options:', mockOptions)