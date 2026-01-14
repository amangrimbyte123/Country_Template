// Server-side SDK (for API routes and Server Components)
import { Client as ServerClient, Databases as ServerDatabases } from 'node-appwrite';

// Client-side SDK (for browser/client components)
import { Client, Account } from 'appwrite';

// Initialize Appwrite Client for Server-Side (with API Key)
const serverClient = new ServerClient();

serverClient
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
  .setKey(process.env.APPWRITE_API_KEY || ''); // Server-side API Key

// Initialize Appwrite Client for Client-Side (without API Key)
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

// Initialize Databases (use serverClient for server-side operations)
export const databases = new ServerDatabases(serverClient);

// Initialize Account (for client-side authentication)
export const account = new Account(client);

// Export clients
export { serverClient, client };

// Database and Collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const BASIC_INFO_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_BASIC_INFO_COLLECTION_ID || 'basic_info';
export const SERVICES_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_SERVICES_COLLECTION_ID || 'services';
export const STATES_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_STATES_COLLECTION_ID || 'states';
export const CITIES_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_CITIES_COLLECTION_ID || 'cities';
export const LISTINGS_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_LISTINGS_COLLECTION_ID || 'listings';

