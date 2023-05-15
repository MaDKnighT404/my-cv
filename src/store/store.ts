import { create } from 'zustand';

let theme = '';
if (localStorage.getItem('theme') === 'light-theme') {
  localStorage.setItem('theme', 'light-theme');
  theme = localStorage.getItem('theme') as string;
} else {
  localStorage.setItem('theme', 'dark-theme');
  theme = localStorage.getItem('theme') as string;
}

interface Theme {
  theme: string;
  changeTheme: (name: string) => void;
}

export const useTheme = create<Theme>((set) => ({
  theme: theme,
  changeTheme: (name) => set(() => ({ theme: name })),
}));

export default useTheme;
