import { supabase } from "../lib/supabase";

export type SubscriberSettings = {
  id: number;
  email: string;
  cadence_days: number;
  is_enabled: boolean;
  timezone: string;
  next_notification_at: string | null;
  unsubscribe_token: string;
};

export async function getSubscriberByToken(
  token: string
): Promise<SubscriberSettings | null> {
  if (!supabase || !token) return null;

  const { data, error } = await supabase
    .from("subscribers")
    .select(
      "id, email, cadence_days, is_enabled, timezone, next_notification_at, unsubscribe_token"
    )
    .eq("unsubscribe_token", token)
    .maybeSingle();

  if (error) {
    console.error("Failed to load subscriber settings:", error);
    return null;
  }

  return data;
}

export async function updateSubscriberSettings(
  token: string,
  payload: {
    cadence_days: number;
    is_enabled: boolean;
  }
): Promise<{ success: boolean; message: string }> {
  if (!supabase) {
    return {
      success: false,
      message: "Service temporarily unavailable.",
    };
  }

  if (![3, 7, 14, 30].includes(payload.cadence_days)) {
    return {
      success: false,
      message: "Invalid frequency selected.",
    };
  }

  const nextNotificationAt = payload.is_enabled
    ? (() => {
        const next = new Date();
        next.setDate(next.getDate() + payload.cadence_days);
        return next.toISOString();
      })()
    : null;

  const { error } = await supabase
    .from("subscribers")
    .update({
      cadence_days: payload.cadence_days,
      is_enabled: payload.is_enabled,
      next_notification_at: nextNotificationAt,
    })
    .eq("unsubscribe_token", token);

  if (error) {
    console.error("Failed to update subscriber settings:", error);
    return {
      success: false,
      message: "Unable to update your settings.",
    };
  }

  return {
    success: true,
    message: "Your alert settings have been updated.",
  };
}

export async function deleteSubscriberByToken(
  token: string
): Promise<{ success: boolean; message: string }> {
  if (!supabase) {
    return {
      success: false,
      message: "Service temporarily unavailable.",
    };
  }

  const { error } = await supabase
    .from("subscribers")
    .delete()
    .eq("unsubscribe_token", token);

  if (error) {
    console.error("Failed to delete subscriber:", error);
    return {
      success: false,
      message: "Unable to remove this subscription.",
    };
  }

  return {
    success: true,
    message: "You have been unsubscribed.",
  };
}