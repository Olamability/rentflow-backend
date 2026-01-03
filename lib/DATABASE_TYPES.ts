// DATABASE_TYPES.ts

// Database type for Supabase client
export type Database = {
  public: {
    Tables: {
      properties: {
        Row: PropertyResponse;
        Insert: CreatePropertyInput;
        Update: UpdatePropertyInput;
      };
      units: {
        Row: UnitResponse;
        Insert: CreateUnitInput;
        Update: Partial<CreateUnitInput>;
      };
      payments: {
        Row: PaymentResponse;
        Insert: CreatePaymentInput;
        Update: Partial<CreatePaymentInput>;
      };
      maintenance_requests: {
        Row: MaintenanceRequestResponse;
        Insert: CreateMaintenanceRequestInput;
        Update: Partial<CreateMaintenanceRequestInput>;
      };
      users: {
        Row: UserResponse;
        Insert: Partial<UserResponse>;
        Update: Partial<UserResponse>;
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
};

export interface CreatePropertyInput {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  postal_code?: string;
  country: string;
  property_type: 'residential' | 'commercial' | 'mixed';
  landlord_id: string;
  total_units?: number;
  year_built?: number;
  amenities?: string[];
  images?: string[];
}

export interface UpdatePropertyInput extends Partial<CreatePropertyInput> {
  id: string;
}

export interface PropertyResponse {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  postal_code?: string;
  country: string;
  property_type: string;
  landlord_id: string;
  total_units: number;
  occupied_units: number;
  year_built?: number;
  amenities?: string[];
  images?: string[];
  created_at: string;
  updated_at: string;
}

export interface CreateUnitInput {
  property_id: string;
  unit_number: string;
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  rent_amount: number;
  status: 'available' | 'occupied' | 'maintenance';
}

export interface UnitResponse {
  id: string;
  property_id: string;
  unit_number: string;
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  rent_amount: number;
  status: string;
  tenant_id?: string;
  lease_start?: string;
  lease_end?: string;
  created_at: string;
  updated_at: string;
}

export interface CreatePaymentInput {
  tenant_id: string;
  property_id: string;
  unit_id?: string;
  amount: number;
  payment_method: 'card' | 'transfer' | 'cash';
  payment_reference?: string;
  payment_date: string;
}

export interface PaymentResponse {
  id: string;
  tenant_id: string;
  property_id: string;
  unit_id?: string;
  amount: number;
  payment_method: string;
  payment_reference?: string;
  payment_date: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface CreateMaintenanceRequestInput {
  property_id: string;
  unit_id?: string;
  tenant_id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category?: string;
  images?: string[];
}

export interface MaintenanceRequestResponse {
  id: string;
  property_id: string;
  unit_id?: string;
  tenant_id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  category?: string;
  images?: string[];
  created_at: string;
  updated_at: string;
}

export interface UserResponse {
  id: string;
  email: string;
  full_name?: string;
  role: 'tenant' | 'landlord' | 'admin' | 'super_admin';
  created_at: string;
  updated_at: string;
}

// Add more types as needed for your API endpoints