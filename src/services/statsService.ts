import { supabase } from "../lib/supabase";

export type PublicSiteStats = {
  subscriber_count: number;
  trailer_clicks: number;
  official_clicks: number;
};

export async function getPublicSiteStats(): Promise<PublicSiteStats | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("public_site_stats")
    .select("*")
    .single();

  if (error) {
    console.error("Failed to fetch public site stats:", error);
    return null;
  }

  return data;
}

export async function trackEvent(eventName: string): Promise<void> {
  if (!supabase) return;

  const { error } = await supabase.from("event_logs").insert({
    event_name: eventName,
    source: "gta6-countdown",
  });

  if (error) {
    console.error("Failed to track event:", error);
  }
}