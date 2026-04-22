import { supabase } from "../lib/supabase";

export type AdminSiteUpdate = {
  id: number;
  title: string;
  excerpt: string;
  href: string | null;
  tag: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
};

export type CreateUpdatePayload = {
  title: string;
  excerpt: string;
  href?: string;
  tag: string;
};

export async function getAllUpdates(): Promise<AdminSiteUpdate[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("site_updates")
    .select(
      "id, title, excerpt, href, tag, is_published, published_at, created_at"
    )
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch admin updates:", error);
    return [];
  }

  return data ?? [];
}

export async function createUpdate(payload: CreateUpdatePayload): Promise<{
  success: boolean;
  message: string;
}> {
  if (!supabase) {
    return {
      success: false,
      message: "Supabase is not configured.",
    };
  }

  const title = payload.title.trim();
  const excerpt = payload.excerpt.trim();
  const tag = payload.tag.trim();
  const href = payload.href?.trim() || null;

  if (!title || !excerpt || !tag) {
    return {
      success: false,
      message: "Title, excerpt and tag are required.",
    };
  }

  const { error } = await supabase.from("site_updates").insert({
    title,
    excerpt,
    href,
    tag,
    is_published: true,
    published_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Failed to create update:", error);
    return {
      success: false,
      message: "Failed to create update.",
    };
  }

  return {
    success: true,
    message: "Update created successfully.",
  };
}

export async function togglePublished(
  id: number,
  nextValue: boolean
): Promise<{ success: boolean; message: string }> {
  if (!supabase) {
    return {
      success: false,
      message: "Supabase is not configured.",
    };
  }

  const { error } = await supabase
    .from("site_updates")
    .update({ is_published: nextValue })
    .eq("id", id);

  if (error) {
    console.error("Failed to update publish state:", error);
    return {
      success: false,
      message: "Failed to update publish state.",
    };
  }

  return {
    success: true,
    message: "Publish state updated.",
  };
}