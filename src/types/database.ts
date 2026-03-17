export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          id: string;
          name_es: string;
          name_en: string;
          description_es: string;
          description_en: string;
          category: string;
          price_mxn: number;
          price_usd: number;
          emoji: string;
          image_url: string | null;
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["activities"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["activities"]["Insert"]>;
      };
      providers: {
        Row: {
          id: string;
          name: string;
          contact_phone: string | null;
          contact_email: string | null;
          activity_ids: string[];
          price_to_us: number | null;
          notes: string | null;
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["providers"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["providers"]["Insert"]>;
      };
      clients: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          email: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["clients"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["clients"]["Insert"]>;
      };
      reservations: {
        Row: {
          id: string;
          client_id: string;
          activity_id: string;
          provider_id: string | null;
          date: string;
          guests: number;
          status: string;
          total_amount: number;
          currency: string;
          stripe_payment_id: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["reservations"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["reservations"]["Insert"]>;
      };
    };
  };
};
