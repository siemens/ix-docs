import React from 'react';
import './DosAndDonts.scss';

interface DosAndDontsProps {
  children: React.ReactNode;
}

export const DosAndDonts: React.FC<DosAndDontsProps> = ({ children }) => (
  <div className="dos-and-donts" markdown="true">
    {children}
  </div>
);

interface DosProps {
  children: React.ReactNode;
}

export const Dos: React.FC<DosProps> = ({ children }) => (
  <div className="dos" markdown="true">
    {children}
  </div>
);

interface DontsProps {
  children: React.ReactNode;
}

export const Donts: React.FC<DontsProps> = ({ children }) => (
  <div className="donts" markdown="true">
    {children}
  </div>
);
