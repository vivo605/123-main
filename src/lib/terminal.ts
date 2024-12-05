import { question } from 'readline-sync'

interface Terminal {
  clear(): void
}

declare global {
  const input: (message?: string) => string;
  const print: (message?: string | number) => void;
  const terminal: Terminal;
}

;(global as any).input = question

;(global as any).print = (message = '') => {
  console.log(String(message))
}

;(global as any).terminal = {
  clear: console.clear
}
