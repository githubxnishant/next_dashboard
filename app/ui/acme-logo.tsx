import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-20 w-20 rotate-[15deg]" />
      <p className="text-[32px] px-2 md:text-[44px]">Acme</p>
    </div>
  );
}
