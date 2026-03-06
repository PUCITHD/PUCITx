export function CardSkeleton() {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-video bg-white/10" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="h-4 bg-white/10 rounded w-5/6" />
        <div className="flex justify-between pt-2">
          <div className="h-3 bg-white/10 rounded w-1/3" />
          <div className="h-3 bg-white/10 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function VideoSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="aspect-video bg-white/10 rounded-2xl" />
      <div className="h-6 bg-white/10 rounded w-3/4" />
      <div className="h-4 bg-white/10 rounded w-full" />
      <div className="h-4 bg-white/10 rounded w-5/6" />
    </div>
  );
}

export function LectureSidebarSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-12 bg-white/10 rounded-lg" />
      ))}
    </div>
  );
}
