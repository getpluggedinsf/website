import Image from "next/image";
import type { ImageProps } from "next/image";

type HoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
} & Pick<ImageProps, "fill">;

export function HoverImage({
  src,
  alt,
  sizes,
  aspectClass = "aspect-[4/3]",
  className = "",
  priority = false,
}: HoverImageProps) {
  return (
    <div
      className={[
        "group/image relative w-full overflow-hidden rounded-lg",
        aspectClass,
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition duration-300 group-hover/image:scale-[1.02]"
      />
    </div>
  );
}
