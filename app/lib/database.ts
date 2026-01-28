import { databases, DATABASE_ID, BASIC_INFO_COLLECTION_ID, SERVICES_COLLECTION_ID, STATES_COLLECTION_ID, CITIES_COLLECTION_ID, LISTINGS_COLLECTION_ID } from './appwrite';
import { Query } from 'node-appwrite';

// Types
export interface BasicInfo {
  siteName: string;
  tagline: string;
  domain: string;
  logo: string;
  logoAlt: string;
  bannerImage: string;
  bannerAlt: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  supportEmail: string;
  contactPhone: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  defaultCity: string;
  defaultState: string;
  defaultService: string;
  schemaOrgType: string;
  businessName: string;
  businessAddress: string;
  footerText: string;
  isLive: boolean;
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
}

export interface Service {
  name: string;
  slug: string;
  category: string | null;
  imageUrl: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  h1Title: string;
  introText: string;
  icon?: string;
  types?: string | string[];
  typesIntro?: string;
  typesConclusion?: string;
  $id?: string;
  $sequence?: number;
  $createdAt?: string;
  $updatedAt?: string;
  $databaseId?: string;
  $tableId?: string;
}

export interface State {
  name: string;
  slug: string;
  image?: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  h1Title: string;
  introText: string;
  latitude?: number;
  longitude?: number;
  $id?: string;
  $sequence?: number;
  $createdAt?: string;
  $updatedAt?: string;
  $databaseId?: string;
  $tableId?: string;
}

export interface City {
  name: string;
  slug: string;
  image?: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  h1Title: string;
  introText: string;
  latitude?: number;
  longitude?: number;
  stateId?: string;
  $id?: string;
  $sequence?: number;
  $createdAt?: string;
  $updatedAt?: string;
  $databaseId?: string;
  $tableId?: string;
}

export interface Listing {
  title: string;
  slug: string;
  address: string;
  website?: string | null;
  phone?: string | null;
  thumbnail?: string | null;
  placeId?: string | null;
  cid?: string | null;
  fid?: string | null;
  openingHours?: string | null;
  bookingLinks?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  rating?: number | null;
  ratingCount?: number | null;
  verified?: boolean;
  featured?: boolean;
  stateId?: string | null;
  cityId?: string | null;
  types?: string | null;
  type?: string | null;
  $id?: string;
  $sequence?: number;
  $createdAt?: string;
  $updatedAt?: string;
  $databaseId?: string;
  $tableId?: string;
}

// Get basic info
export async function getBasicInfo(): Promise<BasicInfo | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      BASIC_INFO_COLLECTION_ID,
      [Query.equal('isLive', true), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as BasicInfo;
    }
    return null;
  } catch (error) {
    console.error('Error fetching basic info:', error);
    return null;
  }
}

// Get document by ID
export async function getDocumentById(
  collectionId: string,
  documentId: string
) {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      collectionId,
      documentId
    );
    return response;
  } catch (error) {
    console.error('Error fetching document:', error);
    throw error;
  }
}

// List documents from a collection
export async function listDocuments(
  collectionId: string,
  queries: string[] = [],
  limit: number = 25
) {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      collectionId,
      queries.length > 0 ? queries : [Query.limit(limit)]
    );
    return response;
  } catch (error) {
    console.error('Error listing documents:', error);
    throw error;
  }
}

// Create a document
export async function createDocument(
  collectionId: string,
  data: Record<string, any>,
  documentId?: string
) {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      collectionId,
      documentId || 'unique()',
      data
    );
    return response;
  } catch (error) {
    console.error('Error creating document:', error);
    throw error;
  }
}

// Update a document
export async function updateDocument(
  collectionId: string,
  documentId: string,
  data: Record<string, any>
) {
  try {
    const response = await databases.updateDocument(
      DATABASE_ID,
      collectionId,
      documentId,
      data
    );
    return response;
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
}

// Delete a document
export async function deleteDocument(
  collectionId: string,
  documentId: string
) {
  try {
    const response = await databases.deleteDocument(
      DATABASE_ID,
      collectionId,
      documentId
    );
    return response;
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
}

// Get all services
export async function getServices(limit: number = 12): Promise<Service[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      SERVICES_COLLECTION_ID,
      [Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as Service[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Get service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      SERVICES_COLLECTION_ID,
      [Query.equal('slug', slug), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as Service;
    }
    return null;
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return null;
  }
}

// Get single/default service (for single-service system)
export async function getSingleService(): Promise<Service | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      SERVICES_COLLECTION_ID,
      [Query.orderAsc('$sequence'), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as Service;
    }
    return null;
  } catch (error) {
    console.error('Error fetching single service:', error);
    return null;
  }
}

// Get all states
export async function getStates(limit: number = 20): Promise<State[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      STATES_COLLECTION_ID,
      [Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as State[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching states:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'states.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const states = JSON.parse(fileContent);
      return Array.isArray(states) ? states : [states];
    } catch (jsonError) {
      console.error('Error reading states from JSON:', jsonError);
      return [];
    }
  }
}

// Get state by slug
export async function getStateBySlug(slug: string): Promise<State | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      STATES_COLLECTION_ID,
      [Query.equal('slug', slug), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as State;
    }
    return null;
  } catch (error) {
    console.error('Error fetching state by slug:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'states.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const states = JSON.parse(fileContent);
      const stateArray = Array.isArray(states) ? states : [states];
      const state = stateArray.find((s: State) => s.slug === slug);
      return state || null;
    } catch (jsonError) {
      console.error('Error reading state from JSON:', jsonError);
      return null;
    }
  }
}

// Get all cities
export async function getCities(limit: number = 12): Promise<City[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      CITIES_COLLECTION_ID,
      [Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as City[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching cities:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'cities.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const cities = JSON.parse(fileContent);
      return Array.isArray(cities) ? cities : [cities];
    } catch (jsonError) {
      console.error('Error reading cities from JSON:', jsonError);
      return [];
    }
  }
}

// Get cities by state ID
export async function getCitiesByStateId(stateId: string, limit: number = 20): Promise<City[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      CITIES_COLLECTION_ID,
      [Query.equal('stateId', stateId), Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as City[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching cities by state ID:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'cities.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const cities = JSON.parse(fileContent);
      const cityArray = Array.isArray(cities) ? cities : [cities];
      return cityArray.filter((c: City) => c.stateId === stateId);
    } catch (jsonError) {
      console.error('Error reading cities from JSON:', jsonError);
      return [];
    }
  }
}

// Get city by slug
export async function getCityBySlug(slug: string): Promise<City | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      CITIES_COLLECTION_ID,
      [Query.equal('slug', slug), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as City;
    }
    return null;
  } catch (error) {
    console.error('Error fetching city by slug:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'cities.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const cities = JSON.parse(fileContent);
      const cityArray = Array.isArray(cities) ? cities : [cities];
      const city = cityArray.find((c: City) => c.slug === slug);
      return city || null;
    } catch (jsonError) {
      console.error('Error reading city from JSON:', jsonError);
      return null;
    }
  }
}

// Get city by ID
export async function getCityById(cityId: string): Promise<City | null> {
  try {
    const city = await getDocumentById(CITIES_COLLECTION_ID, cityId);
    return city as unknown as City;
  } catch (error) {
    console.error('Error fetching city by ID:', error);
    return null;
  }
}

// Get all listings
export async function getListings(limit: number = 12): Promise<Listing[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LISTINGS_COLLECTION_ID,
      [Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as Listing[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching listings:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'Listings.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const listings = JSON.parse(fileContent);
      return Array.isArray(listings) ? listings : [listings];
    } catch (jsonError) {
      console.error('Error reading listings from JSON:', jsonError);
      return [];
    }
  }
}

// Get listing by slug
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LISTINGS_COLLECTION_ID,
      [Query.equal('slug', slug), Query.limit(1)]
    );

    if (response.documents.length > 0) {
      return response.documents[0] as unknown as Listing;
    }
    return null;
  } catch (error) {
    console.error('Error fetching listing by slug:', error);
    // Fallback to JSON file if database fails
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'json_files', 'Listings.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const listings = JSON.parse(fileContent);
      const listingArray = Array.isArray(listings) ? listings : [listings];
      const listing = listingArray.find((l: Listing) => l.slug === slug);
      return listing || null;
    } catch (jsonError) {
      console.error('Error reading listing from JSON:', jsonError);
      return null;
    }
  }
}

// Get listings by city ID
export async function getListingsByCityId(cityId: string, limit: number = 20): Promise<Listing[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LISTINGS_COLLECTION_ID,
      [Query.equal('cityId', cityId), Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as Listing[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching listings by city ID:', error);
    return [];
  }
}

// Get listings by state ID
export async function getListingsByStateId(stateId: string, limit: number = 20): Promise<Listing[]> {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LISTINGS_COLLECTION_ID,
      [Query.equal('stateId', stateId), Query.orderAsc('$sequence'), Query.limit(limit)]
    );

    if (response.documents.length > 0) {
      return response.documents as unknown as Listing[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching listings by state ID:', error);
    return [];
  }
}

