import { useCallback, useEffect, useState } from 'react';

type SoundStatus = 'idle' | 'playing' | 'paused' | 'ended';

interface UseSoundReturn {
  play: () => void;
  pause: () => void;
  stop: () => void;
  status: SoundStatus;
  error: Error | null;
}

const useSound = (src: string): UseSoundReturn => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<SoundStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (src) {
      const newAudio = new Audio(src);
      newAudio.preload = 'auto'; // Precarrega o áudio
      newAudio.onplay = () => setStatus('playing');
      newAudio.onpause = () => setStatus('paused');
      newAudio.onended = () => setStatus('ended');
      newAudio.onerror = (e) => {
        console.error("Erro ao carregar ou reproduzir áudio:", e);
        setError(new Error("Falha ao carregar ou reproduzir o som."));
        setStatus('idle');
      };
      setAudio(newAudio);

      return () => {
        newAudio.pause();
        newAudio.src = ''; // Libera recursos
      };
    }
  }, [src]);

  const play = useCallback(() => {
    if (audio) {
      audio.currentTime = 0; // Reinicia o som
      audio.play().catch(e => {
        console.error("Erro ao tentar reproduzir o áudio:", e);
        setError(e);
      });
    }
  }, [audio]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
    }
  }, [audio]);

  const stop = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setStatus('idle');
    }
  }, [audio]);

  return { play, pause, stop, status, error };
};

export default useSound;