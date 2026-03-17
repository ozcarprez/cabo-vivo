-- Activities table
create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  name_es text not null,
  name_en text not null,
  description_es text not null default '',
  description_en text not null default '',
  category text not null,
  price_mxn numeric(10,2) not null default 0,
  price_usd numeric(10,2) not null default 0,
  emoji text not null default '',
  image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Providers table
create table if not exists providers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_phone text,
  contact_email text,
  activity_ids uuid[] not null default '{}',
  price_to_us numeric(10,2),
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Clients table
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  created_at timestamptz not null default now()
);

-- Reservations table
create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  activity_id uuid not null references activities(id) on delete cascade,
  provider_id uuid references providers(id) on delete set null,
  date date not null,
  guests integer not null default 1,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'paid', 'completed', 'cancelled')),
  total_amount numeric(10,2) not null default 0,
  currency text not null default 'MXN' check (currency in ('MXN', 'USD')),
  stripe_payment_id text,
  notes text,
  created_at timestamptz not null default now()
);

-- Indexes
create index if not exists idx_reservations_client on reservations(client_id);
create index if not exists idx_reservations_activity on reservations(activity_id);
create index if not exists idx_reservations_status on reservations(status);
create index if not exists idx_activities_active on activities(active);
create index if not exists idx_providers_active on providers(active);

-- Enable RLS
alter table activities enable row level security;
alter table providers enable row level security;
alter table clients enable row level security;
alter table reservations enable row level security;

-- Public read access for activities (needed for the landing page)
create policy "Activities are publicly readable"
  on activities for select
  using (true);
