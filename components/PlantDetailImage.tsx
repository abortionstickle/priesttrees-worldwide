"use client";

import { useState } from "react";
import type { Plant } from "@/data/plants";

export default function PlantDetailImage({ plant }: { plant: Plant }) {
  const [imgError, setImgError] = useState(false);
  const showImage = !!plant.imageUrl && !imgError;

  return (
    <div className="aspect-[4/3] bg-surface-2 border border-border overflow-hidden flex items-center justify-center">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={plant.imageUrl}
          alt={plant.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-center p-8">
          <p className="text-muted text-sm italic mb-2">{plant.scientificName}</p>
          <p className="text-subtle text-xs">Photography coming soon</p>
        </div>
      )}
    </div>
  );
}
