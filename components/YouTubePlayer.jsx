export default function YouTubePlayer({ src }) {
  return (
    <iframe
      className="w-full h-full"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
