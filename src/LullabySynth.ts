/**
 * Simple self-contained Web Audio API synthesizer for playing a sweet, delicate
 * lullaby themed sound or gentle chimes when interacting with the Baby Shower page.
 * Keeps the application entirely lightweight and free of external visual audio assets.
 */

let audioCtx: AudioContext | null = null;
let sequenceInterval: any = null;
let currentNoteIndex = 0;

// Merienda Melody (inspired by gentle lullabies)
const melody = [
  { note: 'G4', dur: 0.8 },
  { note: 'G4', dur: 0.8 },
  { note: 'D5', dur: 0.8 },
  { note: 'D5', dur: 0.8 },
  { note: 'E5', dur: 0.8 },
  { note: 'E5', dur: 0.8 },
  { note: 'D5', dur: 1.6 },
  { note: 'C5', dur: 0.8 },
  { note: 'C5', dur: 0.8 },
  { note: 'B4', dur: 0.8 },
  { note: 'B4', dur: 0.8 },
  { note: 'A4', dur: 0.8 },
  { note: 'A4', dur: 0.8 },
  { note: 'G4', dur: 1.6 },
];

const noteFreqs: Record<string, number> = {
  'A4': 440.00,
  'B4': 493.88,
  'C5': 523.25,
  'D5': 587.33,
  'E5': 659.25,
  'F5': 698.46,
  'G4': 392.00,
  'G5': 783.99,
};

function playNote(freq: number, duration: number, ctx: AudioContext) {
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // "Music box" chime sound (sine wave + short attack + exponential decay)
  osc.type = 'sine';
  osc.frequency.value = freq;

  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  // Soft, physical attack
  gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.08); 
  // Custom bell/music box style resonance and decay
  gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration - 0.05);

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function playSingleChime() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const randomNotes = ['G4', 'B4', 'C5', 'D5', 'E5', 'G5'];
    const selectedNote = randomNotes[Math.floor(Math.random() * randomNotes.length)];
    playNote(noteFreqs[selectedNote], 1.2, audioCtx);
  } catch (err) {
    console.warn("Could not play custom web audio chime: ", err);
  }
}

export function startLullabyPlaylist(onNotePlayed?: (note: string) => void) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (sequenceInterval) {
      clearInterval(sequenceInterval);
    }

    currentNoteIndex = 0;
    const playNext = () => {
      if (!audioCtx) return;
      const step = melody[currentNoteIndex];
      const freq = noteFreqs[step.note];
      if (freq) {
        playNote(freq, step.dur, audioCtx);
        if (onNotePlayed) {
          onNotePlayed(step.note);
        }
      }
      currentNoteIndex = (currentNoteIndex + 1) % melody.length;
      
      // Schedule next interval dynamically based on current duration
      clearInterval(sequenceInterval);
      sequenceInterval = setTimeout(playNext, step.dur * 1000);
    };

    playNext();
  } catch (err) {
    console.warn("Lullaby sequence failed: ", err);
  }
}

export function stopLullabyPlaylist() {
  if (sequenceInterval) {
    clearTimeout(sequenceInterval);
    sequenceInterval = null;
  }
}
