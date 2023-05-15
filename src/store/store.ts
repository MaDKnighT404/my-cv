import { create } from 'zustand';

interface Theme {
  theme: string;
  changeTheme: (name: string) => void;
}

export const useTheme = create<Theme>((set) => ({
  theme: 'Light',
  changeTheme: (name) => set(() => ({ theme: name })),
}));

export default useTheme;
