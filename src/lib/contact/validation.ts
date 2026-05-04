import type { ContactPayload, PreferredContactMethod } from "@/lib/contact/types";

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function normalizePhone(raw: string) {
  return raw.replace(/\D/g, "");
}

export function isValidPhone(phone: string) {
  return normalizePhone(phone).length >= 10;
}

export function safeText(v?: string) {
  return (v ?? "").trim();
}

export function safeArray(v?: string[]) {
  return Array.isArray(v) ? v.map(safeText).filter(Boolean) : [];
}

export function validatePreferredContact(params: {
  preferredContact: PreferredContactMethod;
  email?: string;
  phone?: string;
}) {
  const hasEmail = !!params.email && isValidEmail(params.email);
  const hasPhone = !!params.phone && isValidPhone(params.phone);

  if (params.preferredContact === "email" && !hasEmail) {
    return {
      ok: false as const,
      error: "Please provide a valid email address.",
      hasEmail,
      hasPhone,
    };
  }

  if (params.preferredContact === "phone" && !hasPhone) {
    return {
      ok: false as const,
      error: "Please provide a valid phone number.",
      hasEmail,
      hasPhone,
    };
  }

  if (params.preferredContact === "either" && !hasEmail && !hasPhone) {
    return {
      ok: false as const,
      error: "Please provide at least one valid contact method.",
      hasEmail,
      hasPhone,
    };
  }

  return {
    ok: true as const,
    hasEmail,
    hasPhone,
  };
}

export function validateRequiredContactFields(payload: ContactPayload) {
  const fullName = safeText(payload.full_name);
  const description = safeText(payload.description);

  if (!fullName || !description) {
    return {
      ok: false as const,
      error: "Missing required fields.",
    };
  }

  return {
    ok: true as const,
    fullName,
    description,
  };
}
