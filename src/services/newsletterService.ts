import { supabase } from "../lib/supabase";

export type SubscribeResult =
  | { success: true; message: string }
  | { success: false; message: string };

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function computeNextNotificationAt(cadenceDays: number) {
  const now = new Date();
  now.setDate(now.getDate() + cadenceDays);
  return now.toISOString();
}

export async function subscribeToNewsletter(
  rawEmail: string,
  cadenceDays: number
): Promise<SubscribeResult> {
  if (!supabase) {
    return {
      success: false,
      message: "Service temporarily unavailable.",
    };
  }

  const email = normalizeEmail(rawEmail);

  if (!email) {
    return {
      success: false,
      message: "Please enter your email address.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (![3, 7, 14, 30].includes(cadenceDays)) {
    return {
      success: false,
      message: "Please select a valid notification frequency.",
    };
  }

  const { error } = await supabase.from("subscribers").insert({
    email,
    source: "gta6-countdown",
    cadence_days: cadenceDays,
    is_enabled: true,
    next_notification_at: computeNextNotificationAt(cadenceDays),
    timezone: "Europe/Paris",
  });

  if (!error) {
    return {
      success: true,
      message: "You’re in. Your countdown alerts are now active.",
    };
  }

  console.error("Supabase subscribe error:", error);

  if (error.code === "23505" || error.message.toLowerCase().includes("duplicate")) {
    return {
      success: false,
      message: "This email is already registered.",
    };
  }

  return {
    success: false,
    message: "Something went wrong. Please try again.",
  };
}