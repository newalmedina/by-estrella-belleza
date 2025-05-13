import preset from '../../../../vendor/filament/filament/tailwind.config.preset'
/** @type {import('tailwindcss').Config} */
export default {
    presets: [preset],
    content: [
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],
    safelist: [
        'grid', // Habilita display: grid
        'inline-grid', // Habilita display: inline-grid
        { pattern: /^grid-cols-(\d{1,2})$/ }, // Habilita grid-cols-1 hasta grid-cols-99 (útil para definir número de columnas)
        { pattern: /^col-span-(\d{1,2})$/ }, // Habilita col-span-1 hasta col-span-99 (útil para el tamaño de columna)
        { pattern: /^(sm|md|lg|xl):grid-cols-(\d{1,2})$/ }, // Habilita grid-cols-X con breakpoints responsivos
        { pattern: /^(sm|md|lg|xl):col-span-(\d{1,2})$/ }, // Habilita col-span-X con breakpoints responsivos
        { pattern: /^gap(-[xy])?-(0|1|2|3|4|5|6|8|10|12|16|20)$/ }, // Habilita espaciado (gap, gap-x, gap-y) para valores comunes
        { pattern: /^(m|p)([trblxy]?)-[0-9]+$/ }, // Habilita márgenes (m) y padding (p), direccionales o globales
        { pattern: /^(min-w|w)-full$/ }, // Habilita min-w-full y w-full

         // Colores
          'text-red-500',
        'hover:text-red-600',
         'bg-blue-500',
    'bg-blue-700',
    'border-blue-700',
    'bg-yellow-400',
    'border-yellow-600',
    'bg-green-500',
    'hover:bg-green-600',
    'border-2',
    'border-green-500',
    'hover:border-green-600',
    'text-white',
    'hover:text-green-200',

    // Efectos de hover y transición
    'transform',
    'hover:scale-105',
    'shadow-md',

    // Otros posibles estilos
    'focus:outline-none',
    'transition-all',
    'duration-300',
    'ease-in-out',
        'border-green-500',
        'hover:border-green-300',
        'text-green-500',          // Color base del ícono
        'hover:text-green-300',    // Color al pasar el cursor
        // Clases específicas (útiles si el patrón no los detecta en tiempo de build)
            // Grid column counts (1–12)
        'grid-cols-1', // 1 columna
        'grid-cols-2', // 2 columnas
        'grid-cols-3', // 3 columnas
        'grid-cols-4', // 4 columnas
        'grid-cols-5', // 5 columnas
        'grid-cols-6', // 6 columnas
        'grid-cols-7', // 7 columnas
        'grid-cols-8', // 8 columnas
        'grid-cols-9', // 9 columnas
        'grid-cols-10', // 10 columnas
        'grid-cols-11', // 11 columnas
        'grid-cols-12', // 12 columnas

        // Column span (1–12)
        'col-span-1', // Ocupar 1 columna
        'col-span-2',
        'col-span-3',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-8',
        'col-span-9',
        'col-span-10',
        'col-span-11',
        'col-span-12',

        // Responsive: grid-cols (1–12)
        'sm:grid-cols-1', 'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:grid-cols-4',
        'sm:grid-cols-5', 'sm:grid-cols-6', 'sm:grid-cols-7', 'sm:grid-cols-8',
        'sm:grid-cols-9', 'sm:grid-cols-10', 'sm:grid-cols-11', 'sm:grid-cols-12',

        'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4',
        'md:grid-cols-5', 'md:grid-cols-6', 'md:grid-cols-7', 'md:grid-cols-8',
        'md:grid-cols-9', 'md:grid-cols-10', 'md:grid-cols-11', 'md:grid-cols-12',

        'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4',
        'lg:grid-cols-5', 'lg:grid-cols-6', 'lg:grid-cols-7', 'lg:grid-cols-8',
        'lg:grid-cols-9', 'lg:grid-cols-10', 'lg:grid-cols-11', 'lg:grid-cols-12',

        'xl:grid-cols-1', 'xl:grid-cols-2', 'xl:grid-cols-3', 'xl:grid-cols-4',
        'xl:grid-cols-5', 'xl:grid-cols-6', 'xl:grid-cols-7', 'xl:grid-cols-8',
        'xl:grid-cols-9', 'xl:grid-cols-10', 'xl:grid-cols-11', 'xl:grid-cols-12',

        // Responsive: col-span (1–12)
        'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4',
        'sm:col-span-5', 'sm:col-span-6', 'sm:col-span-7', 'sm:col-span-8',
        'sm:col-span-9', 'sm:col-span-10', 'sm:col-span-11', 'sm:col-span-12',

        'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4',
        'md:col-span-5', 'md:col-span-6', 'md:col-span-7', 'md:col-span-8',
        'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12',

        'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4',
        'lg:col-span-5', 'lg:col-span-6', 'lg:col-span-7', 'lg:col-span-8',
        'lg:col-span-9', 'lg:col-span-10', 'lg:col-span-11', 'lg:col-span-12',

        'xl:col-span-1', 'xl:col-span-2', 'xl:col-span-3', 'xl:col-span-4',
        'xl:col-span-5', 'xl:col-span-6', 'xl:col-span-7', 'xl:col-span-8',
        'xl:col-span-9', 'xl:col-span-10', 'xl:col-span-11', 'xl:col-span-12',
    ]



}
