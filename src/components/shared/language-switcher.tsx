import { ChevronDown, Languages } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useLanguage } from '../../contexts/language-context';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

/**
 * LanguageSwitcher component to switch between different languages.
 *
 * This component uses the Select component to allow users to choose a language.
 * It utilizes the useLanguage hook to access the current language and a function to change it.
 */
export default function LanguageSwitcher() {
  const { language, setLanguage, getAvailableLanguages, getDisplayName } = useLanguage();

  return (
    <div className='flex items-end'>
      <Popover>
        <PopoverTrigger className='focus:ring-primary bg-accent text-accent-foreground hover:bg-muted flex cursor-pointer items-center gap-1 rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none'>
          <Languages size={18} />
          {getDisplayName(language)}
          <ChevronDown size={12} />
        </PopoverTrigger>

        <PopoverContent className='popover-w-full flex flex-col gap-1 p-1 text-sm'>
          {getAvailableLanguages().map(({ locale, name }) => {
            const isSelected = language === locale;
            return (
              <div
                key={locale}
                className={cn(
                  'hover:bg-accent cursor-pointer rounded-md px-4 py-2 select-none',
                  isSelected && 'text-primary bg-accent'
                )}
                onClick={() => setLanguage(locale)}
              >
                <span className='block truncate'>{name}</span>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
    </div>
  );
}
