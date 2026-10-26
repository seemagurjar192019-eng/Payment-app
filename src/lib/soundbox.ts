/**
 * Module 5: Audio Soundbox & Haptic Notifier Engine
 */

export class SoundboxEngine {
  private static audioCtx: AudioContext | null = null;

  private static getContext(): AudioContext {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  public static playPaymentChime(): void {
    try {
      const ctx = this.getContext();
      const frequencies = [523.25, 659.25, 783.99, 1046.50];
      const noteDuration = 0.12;

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * noteDuration);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * noteDuration);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + idx * noteDuration + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * noteDuration + noteDuration + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * noteDuration);
        osc.stop(ctx.currentTime + idx * noteDuration + noteDuration + 0.1);
      });

      if ('vibrate' in navigator) {
        navigator.vibrate([40, 60, 40, 60, 150]);
      }
    } catch (e) {
      console.warn("Audio synthesis not permitted prior to user interaction", e);
    }
  }

  public static speakPaymentSuccess(amount: number, language: 'hi' | 'en' = 'hi'): void {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const text = language === 'hi' 
      ? `पे-ज़ेन पर ${amount} रुपये प्राप्त हुए` 
      : `Received rupees ${amount} on PayZen`;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 1.0;
    utterance.pitch = 1.1;

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 600);
  }
}
