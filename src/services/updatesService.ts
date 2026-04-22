import { supabase } from "../lib/supabase";

export type SiteUpdate = {
  id: number;
  title: string;
  excerpt: string;
  href: string | null;
  tag: string;
  published_at: string;
};

export async function getPublishedUpdates(limit = 6): Promise<SiteUpdate[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("site_updates")
    .select("id, title, excerpt, href, tag, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Failed to fetch updates:", error);
    return [];
  }

  return data ?? [];
}