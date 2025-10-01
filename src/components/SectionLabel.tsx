import { FC, ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export const SectionLabel: FC<SectionLabelProps> = ({ children }) => (
  <div className="relative w-fit flex items-center rounded-full overflow-hidden">
    <div className="absolute z-1 w-full aspect-square bg-label-border-gradient animate-spin-gradient" />
    <div className="relative rounded-full z-2 px-4 py-1 bg-[#0B0910] m-[1px]">
      <div className="bg-clip-text bg-label-gradient text-transparent font-medium text-sm">
        {children}
      </div>
    </div>
  </div>
);
