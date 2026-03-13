import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/data";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function WhatsAppButton({
  text = "WhatsApp",
  message,
  size = "md",
  showIcon = true,
  className = "",
}: WhatsAppButtonProps) {
  const href = message
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`
    : WHATSAPP_LINK;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-black font-bold rounded-xl transition-all hover:scale-105 ${sizeStyles[size]} ${className}`}
    >
      {showIcon && <MessageCircle className={iconSizes[size]} />}
      {text}
    </a>
  );
}
