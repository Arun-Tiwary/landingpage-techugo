// global.d.ts
declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}
