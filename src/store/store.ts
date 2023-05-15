import { create } from 'zustand';

interface Theme {
  theme: string;
  changeTheme: (name: string) => void;
}

let theme = '';
if (localStorage.getItem('theme') === 'light-theme') {
  localStorage.setItem('theme', 'light-theme');
  theme = localStorage.getItem('theme') as string;
} else {
  localStorage.setItem('theme', 'dark-theme');
  theme = localStorage.getItem('theme') as string;
}

export const useTheme = create<Theme>((set) => ({
  theme: theme,
  changeTheme: (name) => set(() => ({ theme: name })),
}));

export default useTheme;
