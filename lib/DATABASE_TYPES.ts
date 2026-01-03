export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      api_keys: {
        Row: {
          active: boolean | null
          created_at: string
          expires_at: string | null
          id: string
          key: string
          last_used: string | null
          name: string
          permissions: string[] | null
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          expires_at?: string | null
          id?: string
          key: string
          last_used?: string | null
          name: string
          permissions?: string[] | null
          user_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string
          expires_at?: string | null
          id?: string
          key?: string
          last_used?: string | null
          name?: string
          permissions?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          admin_id: string
          admin_name: string
          changes: Json | null
          id: string
          ip_address: string | null
          resource: string
          resource_id: string | null
          timestamp: string
        }
        Insert: {
          action: string
          admin_id: string
          admin_name: string
          changes?: Json | null
          id?: string
          ip_address?: string | null
          resource: string
          resource_id?: string | null
          timestamp?: string
        }
        Update: {
          action?: string
          admin_id?: string
          admin_name?: string
          changes?: Json | null
          id?: string
          ip_address?: string | null
          resource?: string
          resource_id?: string | null
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          id: string
          mime_type: string
          name: string
          owner_id: string
          size: number
          type: Database["public"]["Enums"]["document_type"]
          uploaded_at: string
          url: string
        }
        Insert: {
          id?: string
          mime_type: string
          name: string
          owner_id: string
          size: number
          type: Database["public"]["Enums"]["document_type"]
          uploaded_at?: string
          url: string
        }
        Update: {
          id?: string
          mime_type?: string
          name?: string
          owner_id?: string
          size?: number
          type?: Database["public"]["Enums"]["document_type"]
          uploaded_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          active: boolean | null
          body: string
          category: Database["public"]["Enums"]["email_category"]
          id: string
          last_modified: string
          name: string
          subject: string
          variables: string[] | null
        }
        Insert: {
          active?: boolean | null
          body: string
          category: Database["public"]["Enums"]["email_category"]
          id?: string
          last_modified?: string
          name: string
          subject: string
          variables?: string[] | null
        }
        Update: {
          active?: boolean | null
          body?: string
          category?: Database["public"]["Enums"]["email_category"]
          id?: string
          last_modified?: string
          name?: string
          subject?: string
          variables?: string[] | null
        }
        Relationships: []
      }
      fraud_flags: {
        Row: {
          flagged_at: string
          flagged_by: string
          id: string
          reason: string
          resolution_notes: string | null
          resolved_at: string | null
          status: Database["public"]["Enums"]["fraud_flag_status"]
          user_id: string
        }
        Insert: {
          flagged_at?: string
          flagged_by: string
          id?: string
          reason: string
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["fraud_flag_status"]
          user_id: string
        }
        Update: {
          flagged_at?: string
          flagged_by?: string
          id?: string
          reason?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["fraud_flag_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fraud_flags_flagged_by_fkey"
            columns: ["flagged_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fraud_flags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      landlord_profiles: {
        Row: {
          address: Json | null
          bank_details: Json | null
          business_info: Json | null
          created_at: string
          date_of_birth: string | null
          first_name: string | null
          id: string
          is_pro: boolean | null
          last_name: string | null
          national_id: string | null
          subscription_expiry: string | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          updated_at: string
          user_id: string
          verification_documents: Json | null
        }
        Insert: {
          address?: Json | null
          bank_details?: Json | null
          business_info?: Json | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          id?: string
          is_pro?: boolean | null
          last_name?: string | null
          national_id?: string | null
          subscription_expiry?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          updated_at?: string
          user_id: string
          verification_documents?: Json | null
        }
        Update: {
          address?: Json | null
          bank_details?: Json | null
          business_info?: Json | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          id?: string
          is_pro?: boolean | null
          last_name?: string | null
          national_id?: string | null
          subscription_expiry?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          updated_at?: string
          user_id?: string
          verification_documents?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "landlord_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_requests: {
        Row: {
          actual_cost: number | null
          assigned_to: string | null
          category: Database["public"]["Enums"]["maintenance_category"]
          completed_at: string | null
          created_at: string
          description: string
          estimated_cost: number | null
          id: string
          images: string[] | null
          landlord_id: string
          priority: Database["public"]["Enums"]["priority_level"]
          status: Database["public"]["Enums"]["maintenance_status"]
          tenant_id: string
          title: string
          unit_id: string
          updated_at: string
          videos: string[] | null
        }
        Insert: {
          actual_cost?: number | null
          assigned_to?: string | null
          category: Database["public"]["Enums"]["maintenance_category"]
          completed_at?: string | null
          created_at?: string
          description: string
          estimated_cost?: number | null
          id?: string
          images?: string[] | null
          landlord_id: string
          priority: Database["public"]["Enums"]["priority_level"]
          status?: Database["public"]["Enums"]["maintenance_status"]
          tenant_id: string
          title: string
          unit_id: string
          updated_at?: string
          videos?: string[] | null
        }
        Update: {
          actual_cost?: number | null
          assigned_to?: string | null
          category?: Database["public"]["Enums"]["maintenance_category"]
          completed_at?: string | null
          created_at?: string
          description?: string
          estimated_cost?: number | null
          id?: string
          images?: string[] | null
          landlord_id?: string
          priority?: Database["public"]["Enums"]["priority_level"]
          status?: Database["public"]["Enums"]["maintenance_status"]
          tenant_id?: string
          title?: string
          unit_id?: string
          updated_at?: string
          videos?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_requests_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maintenance_requests_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maintenance_requests_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_updates: {
        Row: {
          id: string
          images: string[] | null
          message: string
          request_id: string
          timestamp: string
          user_id: string
          user_name: string
        }
        Insert: {
          id?: string
          images?: string[] | null
          message: string
          request_id: string
          timestamp?: string
          user_id: string
          user_name: string
        }
        Update: {
          id?: string
          images?: string[] | null
          message?: string
          request_id?: string
          timestamp?: string
          user_id?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_updates_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "maintenance_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maintenance_updates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          due_date: string
          id: string
          landlord_id: string
          notes: string | null
          paid_date: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          receipt_url: string | null
          status: Database["public"]["Enums"]["payment_status"]
          tenant_id: string
          transaction_id: string | null
          unit_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          due_date: string
          id?: string
          landlord_id: string
          notes?: string | null
          paid_date?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          receipt_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          tenant_id: string
          transaction_id?: string | null
          unit_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          due_date?: string
          id?: string
          landlord_id?: string
          notes?: string | null
          paid_date?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          receipt_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          tenant_id?: string
          transaction_id?: string | null
          unit_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          actions: string[]
          created_at: string
          description: string
          id: string
          name: string
          resource: string
        }
        Insert: {
          actions: string[]
          created_at?: string
          description: string
          id?: string
          name: string
          resource: string
        }
        Update: {
          actions?: string[]
          created_at?: string
          description?: string
          id?: string
          name?: string
          resource?: string
        }
        Relationships: []
      }
      platform_announcements: {
        Row: {
          active: boolean | null
          created_at: string
          created_by: string
          end_date: string | null
          id: string
          message: string
          start_date: string
          target_audience: Database["public"]["Enums"]["target_audience"]
          title: string
          type: Database["public"]["Enums"]["announcement_type"]
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          created_by: string
          end_date?: string | null
          id?: string
          message: string
          start_date: string
          target_audience: Database["public"]["Enums"]["target_audience"]
          title: string
          type: Database["public"]["Enums"]["announcement_type"]
        }
        Update: {
          active?: boolean | null
          created_at?: string
          created_by?: string
          end_date?: string | null
          id?: string
          message?: string
          start_date?: string
          target_audience?: Database["public"]["Enums"]["target_audience"]
          title?: string
          type?: Database["public"]["Enums"]["announcement_type"]
        }
        Relationships: [
          {
            foreignKeyName: "platform_announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          address: string
          amenities: string[] | null
          city: string
          created_at: string
          description: string
          id: string
          images: string[] | null
          landlord_id: string
          latitude: number | null
          longitude: number | null
          name: string
          state: string
          total_units: number
          type: Database["public"]["Enums"]["property_type"]
          updated_at: string
          zip_code: string
        }
        Insert: {
          address: string
          amenities?: string[] | null
          city: string
          created_at?: string
          description: string
          id?: string
          images?: string[] | null
          landlord_id: string
          latitude?: number | null
          longitude?: number | null
          name: string
          state: string
          total_units?: number
          type: Database["public"]["Enums"]["property_type"]
          updated_at?: string
          zip_code: string
        }
        Update: {
          address?: string
          amenities?: string[] | null
          city?: string
          created_at?: string
          description?: string
          id?: string
          images?: string[] | null
          landlord_id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          state?: string
          total_units?: number
          type?: Database["public"]["Enums"]["property_type"]
          updated_at?: string
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      property_applications: {
        Row: {
          applicant_references: Json | null
          documents: Json | null
          employment_info: Json | null
          id: string
          move_in_date: string
          property_id: string
          reviewed_at: string | null
          status: Database["public"]["Enums"]["application_status"]
          submitted_at: string
          tenant_id: string
          unit_id: string
        }
        Insert: {
          applicant_references?: Json | null
          documents?: Json | null
          employment_info?: Json | null
          id?: string
          move_in_date: string
          property_id: string
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          submitted_at?: string
          tenant_id: string
          unit_id: string
        }
        Update: {
          applicant_references?: Json | null
          documents?: Json | null
          employment_info?: Json | null
          id?: string
          move_in_date?: string
          property_id?: string
          reviewed_at?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          submitted_at?: string
          tenant_id?: string
          unit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_applications_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_applications_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_applications_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      reminders: {
        Row: {
          channels: string[]
          created_at: string
          id: string
          message: string
          recipient_id: string
          recipient_type: Database["public"]["Enums"]["user_role"]
          scheduled_for: string
          sent_at: string | null
          status: Database["public"]["Enums"]["reminder_status"]
          type: Database["public"]["Enums"]["reminder_type"]
        }
        Insert: {
          channels?: string[]
          created_at?: string
          id?: string
          message: string
          recipient_id: string
          recipient_type: Database["public"]["Enums"]["user_role"]
          scheduled_for: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["reminder_status"]
          type: Database["public"]["Enums"]["reminder_type"]
        }
        Update: {
          channels?: string[]
          created_at?: string
          id?: string
          message?: string
          recipient_id?: string
          recipient_type?: Database["public"]["Enums"]["user_role"]
          scheduled_for?: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["reminder_status"]
          type?: Database["public"]["Enums"]["reminder_type"]
        }
        Relationships: [
          {
            foreignKeyName: "reminders_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string
          id: string
          is_system: boolean | null
          name: string
          permissions: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_system?: boolean | null
          name: string
          permissions?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_system?: boolean | null
          name?: string
          permissions?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          amount: number | null
          auto_renew: boolean | null
          billing_cycle: Database["public"]["Enums"]["billing_cycle"] | null
          created_at: string
          end_date: string | null
          id: string
          landlord_id: string
          next_billing_date: string | null
          payment_method: string | null
          plan: Database["public"]["Enums"]["subscription_plan"]
          start_date: string
          status: Database["public"]["Enums"]["subscription_status"]
          updated_at: string
        }
        Insert: {
          amount?: number | null
          auto_renew?: boolean | null
          billing_cycle?: Database["public"]["Enums"]["billing_cycle"] | null
          created_at?: string
          end_date?: string | null
          id?: string
          landlord_id: string
          next_billing_date?: string | null
          payment_method?: string | null
          plan?: Database["public"]["Enums"]["subscription_plan"]
          start_date: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Update: {
          amount?: number | null
          auto_renew?: boolean | null
          billing_cycle?: Database["public"]["Enums"]["billing_cycle"] | null
          created_at?: string
          end_date?: string | null
          id?: string
          landlord_id?: string
          next_billing_date?: string | null
          payment_method?: string | null
          plan?: Database["public"]["Enums"]["subscription_plan"]
          start_date?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          assigned_to: string | null
          category: Database["public"]["Enums"]["ticket_category"] | null
          created_at: string
          description: string
          id: string
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolved_at: string | null
          status: Database["public"]["Enums"]["ticket_status"]
          subject: string
          updated_at: string
          user_id: string
          user_role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          assigned_to?: string | null
          category?: Database["public"]["Enums"]["ticket_category"] | null
          created_at?: string
          description: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject: string
          updated_at?: string
          user_id: string
          user_role: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          assigned_to?: string | null
          category?: Database["public"]["Enums"]["ticket_category"] | null
          created_at?: string
          description?: string
          id?: string
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          subject?: string
          updated_at?: string
          user_id?: string
          user_role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      system_configurations: {
        Row: {
          category: Database["public"]["Enums"]["config_category"]
          description: string
          id: string
          key: string
          updated_at: string
          updated_by: string
          value: string
        }
        Insert: {
          category: Database["public"]["Enums"]["config_category"]
          description: string
          id?: string
          key: string
          updated_at?: string
          updated_by: string
          value: string
        }
        Update: {
          category?: Database["public"]["Enums"]["config_category"]
          description?: string
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "system_configurations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tenancy_agreements: {
        Row: {
          created_at: string
          deposit: number
          document_url: string | null
          end_date: string
          id: string
          landlord_id: string
          property_id: string
          rent_amount: number
          signed_date: string | null
          start_date: string
          status: Database["public"]["Enums"]["agreement_status"]
          tenant_id: string
          terms: string[] | null
          unit_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deposit: number
          document_url?: string | null
          end_date: string
          id?: string
          landlord_id: string
          property_id: string
          rent_amount: number
          signed_date?: string | null
          start_date: string
          status?: Database["public"]["Enums"]["agreement_status"]
          tenant_id: string
          terms?: string[] | null
          unit_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deposit?: number
          document_url?: string | null
          end_date?: string
          id?: string
          landlord_id?: string
          property_id?: string
          rent_amount?: number
          signed_date?: string | null
          start_date?: string
          status?: Database["public"]["Enums"]["agreement_status"]
          tenant_id?: string
          terms?: string[] | null
          unit_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenancy_agreements_landlord_id_fkey"
            columns: ["landlord_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenancy_agreements_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenancy_agreements_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenancy_agreements_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_profiles: {
        Row: {
          address: Json | null
          application_status:
            | Database["public"]["Enums"]["application_status"]
            | null
          created_at: string
          current_lease_id: string | null
          date_of_birth: string | null
          emergency_contact: Json | null
          employment: Json | null
          first_name: string | null
          id: string
          last_name: string | null
          national_id: string | null
          previous_address: Json | null
          tenant_references: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: Json | null
          application_status?:
            | Database["public"]["Enums"]["application_status"]
            | null
          created_at?: string
          current_lease_id?: string | null
          date_of_birth?: string | null
          emergency_contact?: Json | null
          employment?: Json | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          national_id?: string | null
          previous_address?: Json | null
          tenant_references?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: Json | null
          application_status?:
            | Database["public"]["Enums"]["application_status"]
            | null
          created_at?: string
          current_lease_id?: string | null
          date_of_birth?: string | null
          emergency_contact?: Json | null
          employment?: Json | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          national_id?: string | null
          previous_address?: Json | null
          tenant_references?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_current_lease"
            columns: ["current_lease_id"]
            isOneToOne: false
            referencedRelation: "tenancy_agreements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenant_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_messages: {
        Row: {
          attachments: string[] | null
          id: string
          is_internal: boolean | null
          message: string
          ticket_id: string
          timestamp: string
          user_id: string
          user_name: string
          user_role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          attachments?: string[] | null
          id?: string
          is_internal?: boolean | null
          message: string
          ticket_id: string
          timestamp?: string
          user_id: string
          user_name: string
          user_role: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          attachments?: string[] | null
          id?: string
          is_internal?: boolean | null
          message?: string
          ticket_id?: string
          timestamp?: string
          user_id?: string
          user_name?: string
          user_role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: [
          {
            foreignKeyName: "ticket_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      units: {
        Row: {
          available_date: string | null
          bathrooms: number
          bedrooms: number
          created_at: string
          current_tenant_id: string | null
          deposit: number
          features: string[] | null
          id: string
          is_occupied: boolean | null
          property_id: string
          rent_amount: number
          square_feet: number
          unit_number: string
          updated_at: string
        }
        Insert: {
          available_date?: string | null
          bathrooms: number
          bedrooms: number
          created_at?: string
          current_tenant_id?: string | null
          deposit?: number
          features?: string[] | null
          id?: string
          is_occupied?: boolean | null
          property_id: string
          rent_amount: number
          square_feet: number
          unit_number: string
          updated_at?: string
        }
        Update: {
          available_date?: string | null
          bathrooms?: number
          bedrooms?: number
          created_at?: string
          current_tenant_id?: string | null
          deposit?: number
          features?: string[] | null
          id?: string
          is_occupied?: boolean | null
          property_id?: string
          rent_amount?: number
          square_feet?: number
          unit_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "units_current_tenant_id_fkey"
            columns: ["current_tenant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "units_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          address: string | null
          avatar: string | null
          created_at: string
          email: string
          id: string
          is_verified: boolean
          kyc_status: Database["public"]["Enums"]["kyc_status"] | null
          last_login: string | null
          name: string
          phone: string | null
          profile_complete: boolean | null
          profile_completeness: number | null
          role: Database["public"]["Enums"]["user_role"]
          status: Database["public"]["Enums"]["user_status"] | null
        }
        Insert: {
          address?: string | null
          avatar?: string | null
          created_at?: string
          email: string
          id?: string
          is_verified?: boolean
          kyc_status?: Database["public"]["Enums"]["kyc_status"] | null
          last_login?: string | null
          name: string
          phone?: string | null
          profile_complete?: boolean | null
          profile_completeness?: number | null
          role: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["user_status"] | null
        }
        Update: {
          address?: string | null
          avatar?: string | null
          created_at?: string
          email?: string
          id?: string
          is_verified?: boolean
          kyc_status?: Database["public"]["Enums"]["kyc_status"] | null
          last_login?: string | null
          name?: string
          phone?: string | null
          profile_complete?: boolean | null
          profile_completeness?: number | null
          role?: Database["public"]["Enums"]["user_role"]
          status?: Database["public"]["Enums"]["user_status"] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      agreement_status:
        | "draft"
        | "sent"
        | "signed"
        | "active"
        | "expired"
        | "terminated"
      announcement_type: "info" | "warning" | "success" | "error"
      application_status: "pending" | "approved" | "rejected"
      billing_cycle: "monthly" | "yearly"
      config_category: "general" | "payment" | "email" | "security" | "features"
      document_type: "lease" | "receipt" | "id" | "photo" | "other"
      email_category:
        | "welcome"
        | "notification"
        | "billing"
        | "support"
        | "marketing"
      employment_status:
        | "employed"
        | "self-employed"
        | "unemployed"
        | "student"
        | "retired"
      fraud_flag_status: "open" | "investigating" | "resolved" | "dismissed"
      kyc_status: "pending" | "approved" | "rejected"
      maintenance_category:
        | "plumbing"
        | "electrical"
        | "hvac"
        | "appliance"
        | "structural"
        | "other"
      maintenance_status:
        | "pending"
        | "assigned"
        | "in_progress"
        | "completed"
        | "cancelled"
      notification_type: "info" | "warning" | "success" | "error"
      payment_method: "card" | "transfer" | "ussd" | "cash"
      payment_status: "pending" | "paid" | "overdue" | "partial"
      priority_level: "low" | "medium" | "high" | "urgent"
      property_type: "apartment" | "house" | "condo" | "townhouse"
      reminder_status: "scheduled" | "sent" | "failed"
      reminder_type:
        | "rent_due"
        | "rent_overdue"
        | "lease_renewal"
        | "maintenance"
      subscription_plan: "free" | "pro" | "enterprise"
      subscription_status: "active" | "cancelled" | "expired" | "trial"
      target_audience: "all" | "landlords" | "tenants"
      ticket_category:
        | "technical"
        | "billing"
        | "general"
        | "feature_request"
        | "other"
      ticket_priority: "low" | "medium" | "high" | "urgent"
      ticket_status: "open" | "in_progress" | "resolved" | "closed"
      user_role: "landlord" | "tenant" | "admin"
      user_status: "active" | "pending" | "suspended" | "inactive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      agreement_status: [
        "draft",
        "sent",
        "signed",
        "active",
        "expired",
        "terminated",
      ],
      announcement_type: ["info", "warning", "success", "error"],
      application_status: ["pending", "approved", "rejected"],
      billing_cycle: ["monthly", "yearly"],
      config_category: ["general", "payment", "email", "security", "features"],
      document_type: ["lease", "receipt", "id", "photo", "other"],
      email_category: [
        "welcome",
        "notification",
        "billing",
        "support",
        "marketing",
      ],
      employment_status: [
        "employed",
        "self-employed",
        "unemployed",
        "student",
        "retired",
      ],
      fraud_flag_status: ["open", "investigating", "resolved", "dismissed"],
      kyc_status: ["pending", "approved", "rejected"],
      maintenance_category: [
        "plumbing",
        "electrical",
        "hvac",
        "appliance",
        "structural",
        "other",
      ],
      maintenance_status: [
        "pending",
        "assigned",
        "in_progress",
        "completed",
        "cancelled",
      ],
      notification_type: ["info", "warning", "success", "error"],
      payment_method: ["card", "transfer", "ussd", "cash"],
      payment_status: ["pending", "paid", "overdue", "partial"],
      priority_level: ["low", "medium", "high", "urgent"],
      property_type: ["apartment", "house", "condo", "townhouse"],
      reminder_status: ["scheduled", "sent", "failed"],
      reminder_type: [
        "rent_due",
        "rent_overdue",
        "lease_renewal",
        "maintenance",
      ],
      subscription_plan: ["free", "pro", "enterprise"],
      subscription_status: ["active", "cancelled", "expired", "trial"],
      target_audience: ["all", "landlords", "tenants"],
      ticket_category: [
        "technical",
        "billing",
        "general",
        "feature_request",
        "other",
      ],
      ticket_priority: ["low", "medium", "high", "urgent"],
      ticket_status: ["open", "in_progress", "resolved", "closed"],
      user_role: ["landlord", "tenant", "admin"],
      user_status: ["active", "pending", "suspended", "inactive"],
    },
  },
} as const
