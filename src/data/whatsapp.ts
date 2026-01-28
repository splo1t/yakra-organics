/**
 * Centralized WhatsApp configuration
 * This number is used throughout the site for WhatsApp links
 */

// WhatsApp number in E.164 format without the + symbol
// Format: country code + number (e.g., 94771234567 for Sri Lanka)
export const WHATSAPP_NUMBER = '94771234567';

/**
 * Generate WhatsApp link with pre-filled message
 * @param message - The message to pre-fill
 * @returns WhatsApp URL
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
