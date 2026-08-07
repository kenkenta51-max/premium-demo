import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

interface PhotoProps {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}

// Server-only: checks whether the real asset has been dropped into public/
// yet. Until then, renders a neutral placeholder instead of a broken
// next/image request — no code change needed once the real file lands.
const Photo = ({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  className = '',
  priority = false,
}: PhotoProps) => {
  const exists = fs.existsSync(path.join(process.cwd(), 'public', src));

  if (!exists) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-border/50 text-sm text-muted-foreground ${ratio} ${className}`}
      >
        画像準備中
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default Photo;
