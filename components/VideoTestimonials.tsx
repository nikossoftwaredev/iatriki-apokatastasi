"use client";

interface VideoTestimonial {
  youtubeId: string;
  title: string;
}

const prolotherapyVideos: VideoTestimonial[] = [
  {
    youtubeId: "5Er1w5w_JYg",
    title: "Χρόνιος πόνος στη μέση - Προλοθεραπεία",
  },
  {
    youtubeId: "2Fvvmv5ec5o",
    title: "Θεραπεία του πόνου στο γόνατο",
  },
  {
    youtubeId: "IhQVkBxSVzg",
    title: "Χρόνιος Πόνος στον ώμο",
  },
  {
    youtubeId: "SlFAxOqF74U",
    title: "Χρόνιος Πόνος στον ώμο",
  },
  {
    youtubeId: "3i1-Fcz56-0",
    title: "Χρόνιος Πόνος",
  },

];

export default function VideoTestimonials() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Βίντεο Μαρτυρίες</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {prolotherapyVideos.map((video) => (
          <div key={video.youtubeId} className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}