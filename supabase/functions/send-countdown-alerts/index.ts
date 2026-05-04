// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl =
  Deno.env.get("SUPABASE_URL") ?? Deno.env.get("PROJECT_URL") ?? "";
const serviceRoleKey =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ??
  Deno.env.get("SERVICE_ROLE_KEY") ??
  "";
const resendApiKey = Deno.env.get("RESEND_API_KEY") ?? "";

const siteUrl = "https://gta6-countdown-beige.vercel.app";

type EmailContent = {
  subject: string;
  title: string;
  body: string;
  badge: string;
};

function daysUntilRelease() {
  const releaseDate = new Date("2026-11-19T00:00:00Z");
  const now = new Date();
  const diff = releaseDate.getTime() - now.getTime();

  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getMilestoneContent(daysLeft: number): EmailContent | null {
  const milestones: Record<number, EmailContent> = {
    365: {
      subject: "GTA VI Countdown — 1 year to go",
      title: "One year left",
      body: "A full year remains before launch. Vice City is still on the horizon, but the wait has officially entered the final stretch.",
      badge: "1 year milestone",
    },
    300: {
      subject: "GTA VI Countdown — 300 days left",
      title: "300 days remaining",
      body: "The long road to launch keeps shrinking. Every milestone now feels more real, and the atmosphere only gets heavier from here.",
      badge: "300 day milestone",
    },
    200: {
      subject: "GTA VI Countdown — 200 days left",
      title: "200 days left",
      body: "The distance is starting to feel shorter. Vice City, Leonida, Jason, and Lucia are getting closer every day.",
      badge: "200 day milestone",
    },
    100: {
      subject: "GTA VI Countdown — 100 days left",
      title: "100 days left",
      body: "Triple digits. The countdown just got serious. The launch window is close enough now to feel real.",
      badge: "100 day milestone",
    },
    50: {
      subject: "GTA VI Countdown — 50 days left",
      title: "50 days left",
      body: "The wait is tightening. The atmosphere is heavier now, and every week matters more than the last.",
      badge: "50 day milestone",
    },
    30: {
      subject: "GTA VI Countdown — 30 days left",
      title: "One month left",
      body: "Thirty days. The countdown has moved from anticipation to pressure. The launch is close enough to feel immediate.",
      badge: "30 day milestone",
    },
    14: {
      subject: "GTA VI Countdown — 14 days left",
      title: "Two weeks left",
      body: "Two weeks. The final approach has started, and the wait is now measured in days you can actually count.",
      badge: "14 day milestone",
    },
    7: {
      subject: "GTA VI Countdown — 7 days left",
      title: "One week left",
      body: "Just one week remains. The countdown is no longer abstract. Vice City is almost here.",
      badge: "7 day milestone",
    },
    3: {
      subject: "GTA VI Countdown — 3 days left",
      title: "Three days left",
      body: "Three days. The pressure, the hype, the anticipation — everything is compressed now.",
      badge: "3 day milestone",
    },
    1: {
      subject: "GTA VI Countdown — Tomorrow",
      title: "Tomorrow",
      body: "One day left. This is it. The wait is about to break.",
      badge: "Final day",
    },
    0: {
      subject: "GTA VI Countdown — Launch day",
      title: "Launch day is here",
      body: "No more countdown. Grand Theft Auto VI is here.",
      badge: "Launch day",
    },
  };

  return milestones[daysLeft] ?? null;
}

function getFallbackContent(
  daysLeft: number,
  hypeMessage?: { title?: string; body?: string } | null
): EmailContent {
  return {
    subject: `GTA VI Countdown — ${daysLeft} day${daysLeft > 1 ? "s" : ""} left`,
    title: hypeMessage?.title ?? "Vice City is waiting",
    body: hypeMessage?.body ?? "Another step closer to launch.",
    badge: "Countdown alert",
  };
}

function buildEmailHtml(params: {
  daysLeft: number;
  title: string;
  body: string;
  subjectBadge: string;
  siteUrl: string;
  manageUrl: string;
}) {
  const { daysLeft, title, body, subjectBadge, siteUrl, manageUrl } = params;

  return `
    <div style="margin:0; padding:0; background:#05010a; font-family:Arial, Helvetica, sans-serif; color:#ffffff;">
      <div style="max-width:680px; margin:0 auto; padding:32px 20px;">
        <div
          style="
            position:relative;
            overflow:hidden;
            border:1px solid rgba(255,255,255,0.08);
            background:
              radial-gradient(circle at top left, rgba(236,72,153,0.18), transparent 28%),
              radial-gradient(circle at top right, rgba(34,211,238,0.14), transparent 26%),
              linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
            border-radius:28px;
            padding:36px 32px;
          "
        >
          <div style="margin-bottom:24px;">
            <p
              style="
                margin:0 0 14px;
                font-size:11px;
                letter-spacing:0.34em;
                text-transform:uppercase;
                color:rgba(255,255,255,0.48);
              "
            >
              GTA VI Countdown
            </p>

            <p
              style="
                display:inline-block;
                margin:0 0 18px;
                padding:8px 12px;
                border:1px solid rgba(255,255,255,0.10);
                border-radius:999px;
                font-size:11px;
                letter-spacing:0.28em;
                text-transform:uppercase;
                color:rgba(255,255,255,0.62);
                background:rgba(0,0,0,0.16);
              "
            >
              ${subjectBadge}
            </p>

            <h1
              style="
                margin:0;
                font-size:44px;
                line-height:0.95;
                font-weight:900;
                text-transform:uppercase;
                letter-spacing:-0.02em;
                color:#ffffff;
              "
            >
              ${daysLeft}
              <span
                style="
                  display:block;
                  margin-top:8px;
                  font-size:18px;
                  letter-spacing:0.28em;
                  text-transform:uppercase;
                  color:rgba(255,255,255,0.72);
                "
              >
                day${daysLeft > 1 ? "s" : ""} left
              </span>
            </h1>
          </div>

          <div
            style="
              margin-bottom:24px;
              padding:18px 18px 16px;
              border:1px solid rgba(255,255,255,0.08);
              border-radius:20px;
              background:rgba(0,0,0,0.18);
            "
          >
            <p
              style="
                margin:0 0 10px;
                font-size:12px;
                letter-spacing:0.28em;
                text-transform:uppercase;
                color:rgba(255,255,255,0.42);
              "
            >
              Hype note
            </p>

            <p
              style="
                margin:0 0 10px;
                font-size:22px;
                line-height:1.35;
                font-weight:800;
                color:#ffffff;
              "
            >
              ${title}
            </p>

            <p
              style="
                margin:0;
                font-size:15px;
                line-height:1.75;
                color:rgba(255,255,255,0.76);
              "
            >
              ${body}
            </p>
          </div>

          <div
            style="
              display:grid;
              grid-template-columns:repeat(3, 1fr);
              gap:12px;
              margin-bottom:28px;
            "
          >
            <div
              style="
                padding:14px;
                border:1px solid rgba(255,255,255,0.08);
                border-radius:18px;
                background:rgba(0,0,0,0.16);
              "
            >
              <p style="margin:0 0 8px; font-size:11px; text-transform:uppercase; letter-spacing:0.24em; color:rgba(255,255,255,0.38);">
                City
              </p>
              <p style="margin:0; font-size:15px; font-weight:700; color:#ffffff;">
                Vice City
              </p>
            </div>

            <div
              style="
                padding:14px;
                border:1px solid rgba(255,255,255,0.08);
                border-radius:18px;
                background:rgba(0,0,0,0.16);
              "
            >
              <p style="margin:0 0 8px; font-size:11px; text-transform:uppercase; letter-spacing:0.24em; color:rgba(255,255,255,0.38);">
                State
              </p>
              <p style="margin:0; font-size:15px; font-weight:700; color:#ffffff;">
                Leonida
              </p>
            </div>

            <div
              style="
                padding:14px;
                border:1px solid rgba(255,255,255,0.08);
                border-radius:18px;
                background:rgba(0,0,0,0.16);
              "
            >
              <p style="margin:0 0 8px; font-size:11px; text-transform:uppercase; letter-spacing:0.24em; color:rgba(255,255,255,0.38);">
                Leads
              </p>
              <p style="margin:0; font-size:15px; font-weight:700; color:#ffffff;">
                Jason & Lucia
              </p>
            </div>
          </div>

          <div style="margin-bottom:28px;">
            <a
              href="${siteUrl}"
              style="
                display:inline-block;
                padding:14px 20px;
                background:#ffffff;
                color:#000000;
                text-decoration:none;
                border-radius:14px;
                font-weight:800;
                margin-right:10px;
                margin-bottom:10px;
              "
            >
              Open countdown
            </a>

            <a
              href="${manageUrl}"
              style="
                display:inline-block;
                padding:14px 20px;
                background:transparent;
                color:#ffffff;
                text-decoration:none;
                border-radius:14px;
                border:1px solid rgba(255,255,255,0.18);
                font-weight:700;
                margin-bottom:10px;
              "
            >
              Manage alerts
            </a>
          </div>

          <div
            style="
              padding-top:18px;
              border-top:1px solid rgba(255,255,255,0.08);
            "
          >
            <p
              style="
                margin:0 0 8px;
                font-size:12px;
                line-height:1.6;
                color:rgba(255,255,255,0.48);
              "
            >
              You are receiving this email because you subscribed to GTA VI countdown alerts.
            </p>

            <p
              style="
                margin:0;
                font-size:12px;
                line-height:1.6;
                color:rgba(255,255,255,0.34);
              "
            >
              Unofficial fan-made project. Not affiliated with Rockstar Games.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

Deno.serve(async () => {
  try {
    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({
          success: false,
          step: "env_check",
          error: "Missing Supabase environment variables.",
          debug: {
            hasSupabaseUrl: Boolean(supabaseUrl),
            hasServiceRoleKey: Boolean(serviceRoleKey),
            hasResendApiKey: Boolean(resendApiKey),
          },
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const nowIso = new Date().toISOString();
    const daysLeft = daysUntilRelease();

    const { data: subscribers, error: subscriberError } = await supabase
      .from("subscribers")
      .select(
        "id, email, cadence_days, unsubscribe_token, next_notification_at, is_enabled"
      )
      .eq("is_enabled", true)
      .lte("next_notification_at", nowIso);

    if (subscriberError) {
      return new Response(
        JSON.stringify({
          success: false,
          step: "subscriber_query",
          error: subscriberError.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { data: hypeMessages, error: hypeError } = await supabase
      .from("hype_messages")
      .select("id, title, body")
      .eq("is_active", true);

    if (hypeError) {
      return new Response(
        JSON.stringify({
          success: false,
          step: "hype_query",
          error: hypeError.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const processedSubscribers = subscribers ?? [];
    const availableMessages = hypeMessages ?? [];

    if (processedSubscribers.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          processed: 0,
          message: "No subscribers due for notification.",
          debug: {
            hasSupabaseUrl: Boolean(supabaseUrl),
            hasServiceRoleKey: Boolean(serviceRoleKey),
            hasResendApiKey: Boolean(resendApiKey),
          },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          step: "env_check",
          error: "Missing RESEND_API_KEY",
          debug: {
            hasSupabaseUrl: Boolean(supabaseUrl),
            hasServiceRoleKey: Boolean(serviceRoleKey),
            hasResendApiKey: Boolean(resendApiKey),
          },
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const results: any[] = [];

    for (const subscriber of processedSubscribers) {
      const randomMessage =
        availableMessages.length > 0
          ? availableMessages[
              Math.floor(Math.random() * availableMessages.length)
            ]
          : null;

      const milestoneContent = getMilestoneContent(daysLeft);
      const content = milestoneContent ?? getFallbackContent(daysLeft, randomMessage);

      const manageUrl = `${siteUrl}/alerts?token=${subscriber.unsubscribe_token}`;

      const html = buildEmailHtml({
        daysLeft,
        title: content.title,
        body: content.body,
        subjectBadge: content.badge,
        siteUrl,
        manageUrl,
      });

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "GTA VI Countdown <onboarding@resend.dev>",
          to: subscriber.email,
          subject: content.subject,
          html,
        }),
      });

      const resendText = await resendResponse.text();
      const status = resendResponse.ok ? "sent" : "failed";

      await supabase.from("notification_history").insert({
        subscriber_id: subscriber.id,
        hype_message_id: randomMessage?.id ?? null,
        channel: "email",
        status,
      });

      if (resendResponse.ok) {
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + subscriber.cadence_days);

        await supabase
          .from("subscribers")
          .update({
            last_notification_at: new Date().toISOString(),
            next_notification_at: nextDate.toISOString(),
          })
          .eq("id", subscriber.id);
      }

      results.push({
        email: subscriber.email,
        status,
        resend_status_code: resendResponse.status,
        resend_response: resendText,
        subject: content.subject,
        badge: content.badge,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        processed: processedSubscribers.length,
        results,
        debug: {
          hasSupabaseUrl: Boolean(supabaseUrl),
          hasServiceRoleKey: Boolean(serviceRoleKey),
          hasResendApiKey: Boolean(resendApiKey),
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        step: "fatal",
        error: error?.message ?? "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});