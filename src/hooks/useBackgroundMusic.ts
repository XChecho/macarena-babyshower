import { useState, useEffect, useRef, useCallback } from "react";
import { BACKGROUND_MUSIC_SRC } from "../lib/constants";

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio(BACKGROUND_MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (hasInteracted && !isMuted) {
      audioRef.current.play().catch((err) => {
        console.warn("Could not play background music:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [hasInteracted, isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return { isMuted, hasInteracted, toggleMute };
}
