export const LOGO_MACARENA = "/assets/images/logoMacarena.png";

export const GALLERY_PHOTOS = [
  "/assets/images/Gallery1.jpg",
  "/assets/images/Gallery2.jpg",
  "/assets/images/GalleryCambio.jpg",
];

export const SMILEBABY_URL = "https://smilebaby.app/56ee1715-aafb-49af-8021-0fba437bbf1d";

export const MAPS_URL = "https://maps.app.goo.gl/huaijgDmj6MZcmWZ9";

export const WHATSAPP_NUMBER = "573106930466";

export const EVENT_DATE = "2026-08-07T16:00:00-05:00";

export const BACKGROUND_MUSIC_SRC = "/assets/sounds/indigo.mp3";

export const SECTIONS = ["hero", "event", "gallery", "gifts", "rsvp", "thanks"] as const;

export type SectionId = (typeof SECTIONS)[number];

export const SECTION_LABELS: Record<SectionId, string> = {
  hero: "Inicio",
  event: "Evento",
  gallery: "Galería",
  gifts: "Regalos",
  rsvp: "Asistencia",
  thanks: "Gracias",
};
