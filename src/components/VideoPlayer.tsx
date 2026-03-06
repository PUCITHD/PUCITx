interface Props {
  videoID: string;
  title: string;
}

export default function VideoPlayer({ videoID, title }: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-black shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${videoID}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
