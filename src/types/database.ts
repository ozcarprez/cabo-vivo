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
        Insert: {
          id?: string;
          name_es: string;
          name_en: string;
          description_es?: string;
          description_en?: string;
          category: string;
          price_mxn?: number;
          price_usd?: number;
          emoji?: string;
          image_url?: string | null;
          active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name_es?: string;
          name_en?: string;
          description_es?: string;
          description_en?: string;
          category?: string;
          price_mxn?: number;
          price_usd?: number;
          emoji?: string;
          image_url?: string | null;
          active?: boolean;
        };
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
        Insert: {
          id?: string;
          name: string;
          contact_phone?: string | null;
          contact_email?: string | null;
          activity_ids?: string[];
          price_to_us?: number | null;
          notes?: string | null;
          active?: boolean;
          created_at?: string;
        };
        Update: {
          name?: string;
          contact_phone?: string | null;
          contact_email?: string | null;
          activity_ids?: string[];
          price_to_us?: number | null;
          notes?: string | null;
          active?: boolean;
        };
      };
      clients: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          email: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone?: string | null;
          email?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          phone?: string | null;
          email?: string | null;
        };
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
        Insert: {
          id?: string;
          client_id: string;
          activity_id: string;
          provider_id?: string | null;
          date: string;
          guests?: number;
          status?: string;
          total_amount?: number;
          currency?: string;
          stripe_payment_id?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          client_id?: string;
          activity_id?: string;
          provider_id?: string | null;
          date?: string;
          guests?: number;
          status?: string;
          total_amount?: number;
          currency?: string;
          stripe_payment_id?: string | null;
          notes?: string | null;
        };
      };
    };
  };
};
