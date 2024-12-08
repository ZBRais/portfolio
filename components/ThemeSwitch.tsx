'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ensure the component only renders on the client
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Ensure `theme` is defined before allowing interaction
  if (!currentTheme) {
    return null; // Wait until the theme is ready
  }

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark'); // Default to 'dark' for the 'system' theme
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-full"
    >
      {currentTheme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
