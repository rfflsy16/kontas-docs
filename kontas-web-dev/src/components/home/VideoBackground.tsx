export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
    >
      <source
        src="https://res.cloudinary.com/dha1ugpsz/video/upload/v1734964442/SHOOTING_STARS_OVERLAY_4K_Motion_Background_NIGHT_SKY_Short_Version_Fr_Full-HD_60fps_n6cwhg.mp4"
        type="video/mp4"
      />
    </video>
  );
}
