import { WHATSAPP_LINK } from "./data";

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous characters from strings
 */
export function sanitizeInput(input: string): string {
  return input.replace(/[<>"']/g, "");
}

/**
 * Create WhatsApp link with pre-filled message for tool rental
 */
export function createWhatsAppLink(toolName: string, price: number): string {
  const sanitizedToolName = sanitizeInput(toolName);
  const message = encodeURIComponent(
    `Здравствуйте! Хочу арендовать: ${sanitizedToolName} (${price.toLocaleString()} ₸/день)`
  );
  return `${WHATSAPP_LINK}?text=${message}`;
}
