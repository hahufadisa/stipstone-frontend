import { createTheme } from '@mantine/core';

export const theme = createTheme({
    // Цветовая палитра
    colors: {
        // Основные цвета
        primary: [
            '#ffeaea', // 0 - самый светлый
            '#ffb3b3',
            '#ff7f7f',
            '#ff4b4b',
            '#e74c3c', // 4 - основной цвет
            '#c0392b', // 5 - темный
            '#a93226',
            '#922b21',
            '#7b241c',
            '#641e16'  // 9 - самый темный
        ],
        // Вторичные цвета
        secondary: [
            '#e8f4fd',
            '#b8dffc',
            '#88cafb',
            '#58b5fa',
            '#3498db', // 4 - основной
            '#2980b9', // 5 - темный
            '#1f618d',
            '#1a5276',
            '#154360',
            '#0e3a4a'
        ],
        dark: [
            '#ffffff', // 0 - самый светлый (белый)
            '#f8f9fa', // 1 - очень светлый серый
            '#e9ecef', // 2 - светлый серый
            '#dee2e6', // 3 - светло-серый
            '#ced4da', // 4 - серый
            '#adb5bd', // 5 - средне-серый
            '#6c757d', // 6 - темно-серый
            '#495057', // 7 - очень темно-серый
            '#f5f6f7', // 8 - вторичный фон (приглушенный)
            '#f1f3f4'  // 9 - основной фон (приглушенный белый)
        ],
        // Серые цвета для текста
        gray: [
            '#f8f9fa',
            '#e9ecef',
            '#dee2e6',
            '#ced4da',
            '#adb5bd',
            '#6c757d',
            '#495057',
            '#343a40',
            '#212529',
            '#000000'
        ]
    },

    primaryColor: 'primary',

    fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontFamilyMonospace: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
    },

    radius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px'
    },

    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
    },

    shadows: {
        xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        md: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)'
    },

    breakpoints: {
        xs: '36em',   // 576px
        sm: '48em',   // 768px
        md: '62em',   // 992px
        lg: '75em',   // 1200px
        xl: '88em'    // 1408px
    },

    components: {
        AppShell: {
            defaultProps: {
                styles: {
                    main: {
                        backgroundColor: 'var(--mantine-color-dark-9)',
                        color: 'var(--mantine-color-gray-9)'
                    },
                    header: {
                        backgroundColor: 'var(--mantine-color-dark-8)',
                        borderBottom: '1px solid var(--mantine-color-dark-4)'
                    }
                }
            }
        },

        Button: {
            defaultProps: {
                styles: {
                    root: {
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                    }
                }
            }
        },

        Card: {
            defaultProps: {
                styles: {
                    root: {
                        backgroundColor: 'var(--mantine-color-dark-8)',
                        border: '1px solid var(--mantine-color-dark-4)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }
                }
            }
        },

        Text: {
            defaultProps: {
                styles: {
                    root: {
                        color: 'var(--mantine-color-gray-9)'
                    }
                }
            }
        },

        Title: {
            defaultProps: {
                styles: {
                    root: {
                        color: 'var(--mantine-color-gray-9)'
                    }
                }
            }
        },

        Input: {
            defaultProps: {
                styles: {
                    input: {
                        backgroundColor: 'var(--mantine-color-dark-8)',
                        border: '1px solid var(--mantine-color-dark-4)',
                        color: 'var(--mantine-color-gray-9)',
                        '&:focus': {
                            borderColor: 'var(--mantine-color-primary-4)'
                        }
                    }
                }
            }
        },

        Textarea: {
            defaultProps: {
                styles: {
                    input: {
                        backgroundColor: 'var(--mantine-color-dark-8)',
                        border: '1px solid var(--mantine-color-dark-4)',
                        color: 'var(--mantine-color-gray-9)',
                        '&:focus': {
                            borderColor: 'var(--mantine-color-primary-4)'
                        }
                    }
                }
            }
        }
    },

    // Глобальные стили
    // globalStyles: (theme: any) => ({
    //     '*, *::before, *::after': {
    //         boxSizing: 'border-box'
    //     },

    //     body: {
    //         backgroundColor: theme.colors.dark[9],
    //         color: theme.colors.gray[0],
    //         fontFamily: theme.fontFamily,
    //         lineHeight: 1.6,
    //         margin: 0,
    //         padding: 0,
    //         minHeight: '100vh',
    //         overflowX: 'hidden'
    //     },

    //     html: {
    //         scrollBehavior: 'smooth'
    //     },

    //     '::-webkit-scrollbar': {
    //         width: '8px'
    //     },

    //     '::-webkit-scrollbar-track': {
    //         background: theme.colors.dark[8]
    //     },

    //     '::-webkit-scrollbar-thumb': {
    //         background: theme.colors.primary[4],
    //         borderRadius: theme.radius.xs
    //     },

    //     '::-webkit-scrollbar-thumb:hover': {
    //         background: theme.colors.primary[5]
    //     },

    //     '*:focus': {
    //         outline: `2px solid ${theme.colors.primary[4]}`,
    //         outlineOffset: '2px'
    //     },

    //     '::selection': {
    //         backgroundColor: theme.colors.primary[4],
    //         color: theme.colors.gray[0]
    //     }
    // })
});
