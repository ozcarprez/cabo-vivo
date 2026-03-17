-- Temporary permissive policies for admin panel (will be replaced with auth-based policies later)
create policy "Temp: allow all on activities" on activities for all using (true) with check (true);
create policy "Temp: allow all on providers" on providers for all using (true) with check (true);
create policy "Temp: allow all on clients" on clients for all using (true) with check (true);
create policy "Temp: allow all on reservations" on reservations for all using (true) with check (true);
