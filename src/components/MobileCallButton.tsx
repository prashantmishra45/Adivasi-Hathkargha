import { Phone } from 'lucide-react';

export function MobileCallButton() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <a
        href="tel:+919236863278"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta-600 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-terracotta-700 dark:bg-terracotta-600 dark:hover:bg-terracotta-500"
      >
        <Phone className="h-5 w-5" />
        Call Now: 9236863278
      </a>
    </div>
  );
}
