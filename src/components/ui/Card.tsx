import React from "react";

type CardVariant = "default" | "hover-lift" | "hover-scale";
type CardPadding = "none" | "sm" | "md" | "lg";
type AspectRatio = "square" | "video" | "portrait";

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  rounded?: string;
  glass?: boolean;
  glow?: boolean;
  glowColor?: "emerald" | "blue" | "purple";
  className?: string;
  children?: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  zoom?: boolean;
  className?: string;
}

interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

// Main Card Component
export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  rounded = "3xl",
  glass = false,
  glow = false,
  glowColor = "emerald",
  className = "",
  children,
}) => {
  // Base styles
  const baseStyles = "relative transition-all";

  // Variant styles
  const variantStyles: Record<CardVariant, string> = {
    default: "",
    "hover-lift": "duration-500 hover:-translate-y-2",
    "hover-scale": "hover:scale-105",
  };

  // Padding styles
  const paddingStyles: Record<CardPadding, string> = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  // Glass effect
  const glassStyles = glass ? "glass border-white/5" : "";

  // Rounded corners
  const roundedStyles = `rounded-${rounded}`;

  // Glow color mapping
  const glowColorMap = {
    emerald: "bg-emerald-500/10",
    blue: "bg-blue-500/10",
    purple: "bg-purple-500/10",
  };

  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${roundedStyles} ${glassStyles} ${className}`;

  return (
    <div className={combinedStyles}>
      {glow && (
        <div
          className={`absolute top-0 right-0 w-32 h-32 ${glowColorMap[glowColor]} rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none`}
        />
      )}
      {children}
    </div>
  );
};

// CardImage Component
export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  aspectRatio = "video",
  zoom = true,
  className = "",
}) => {
  // Aspect ratio styles
  const aspectStyles: Record<AspectRatio, string> = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  // Zoom effect
  const zoomStyles = zoom
    ? "group-hover:scale-105 transition-transform duration-700"
    : "";

  return (
    <div className={`relative overflow-hidden ${aspectStyles[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${zoomStyles}`}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
    </div>
  );
};

// CardContent Component
export const CardContent: React.FC<CardContentProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`p-8 flex-1 flex flex-col ${className}`}>{children}</div>
  );
};

// Default export for convenience
export default Card;
