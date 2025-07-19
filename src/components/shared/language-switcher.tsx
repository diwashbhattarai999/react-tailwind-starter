import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useLanguage } from '../providers/language-provider';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger>
        <SelectValue placeholder='Select language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='ne'>Nepali</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
