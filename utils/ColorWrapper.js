'use client';
import { useEffect } from 'react';
// components/ColorWrapper.js
// while making change to color object remember to update the color object in tailwind.config.js
export const colors = {
  primary: {
    DEFAULT: '#1E3A8A', // Base color
    100: '#f0f0f0',     // Lightest shade
    200: '#2563EB',
    300: '#1D4ED8',
    400: '#1E40AF',
    500: '#1E3A8A',     // Base color
    600: '#1E2A62',
    700: '#1B1F50',
    800: '#181E44',
    900: '#141C39',     // Darkest shade
  },
  secondary: {
    DEFAULT: '#6B7280',  // Base color
    100: '#F3F4F6',      // Lightest shade
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',      // Base color
    600: '#4B5563',
    700: '#374151',
    800: '#252F3F',
    900: '#1F2937',      // Darkest shade
  },
  error: {
    DEFAULT: '#DC2626',  // Base color
    100: '#FEE2E2',      // Lightest shade
    200: '#FCA5A5',
    300: '#F87171',
    400: '#EF4444',
    500: '#DC2626',      // Base color
    600: '#B91C1C',
    700: '#991B1B',
    800: '#7F1D1D',
    900: '#601B1B',      // Darkest shade
  },
  success: {
    DEFAULT: '#10B981',  // Base color
    100: '#D1FAE5',      // Lightest shade
    200: '#6EE7B7',
    300: '#34D399',
    400: '#10B981',
    500: '#10B981',      // Base color
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E38',      // Darkest shade
  },
  warning: {
    DEFAULT: '#F59E0B',  // Base color
    100: '#FFFBEB',      // Lightest shade
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#F59E0B',
    500: '#F59E0B',      // Base color
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#7C2D12',      // Darkest shade
  },
  info: {
    DEFAULT: '#3B82F6',  // Base color
    100: '#E0F2FE',      // Lightest shade
    200: '#A5B4FC',
    300: '#60A5FA',
    400: '#3B82F6',
    500: '#3B82F6',      // Base color
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',      // Darkest shade
  },
};

const ColorWrapper = ({ children }) => {
  useEffect(() => {

    const root = document.documentElement;

    // Loop through each color category and set the CSS variables
    Object.keys(colors).forEach(category => {
      const colorCategory = colors[category];
      root.style.setProperty(`--${category}`, colorCategory.DEFAULT); // Set the base color
      Object.keys(colorCategory).forEach(shade => {
        if (shade !== 'DEFAULT') {
          root.style.setProperty(`--${category}-${shade}`, colorCategory[shade]);
        }
      });
    });
  }, []);

  return <>{children}</>; // Render the children components passed to the wrapper
};

export default ColorWrapper;

