import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const ANTD_THEME = {
    token: {
        fontFamily: plusJakartaSans.style.fontFamily,
        colorPrimary: '#065366', // Teal Blue
        colorSuccess: '#a0ba3b', // Sushi
        colorWarning: '#e5a80e', // Gamboge
        colorError: '#d47800', // Mango Tango
        borderRadius: 6,
    },
    components: {
        Button: {
            borderRadius: 6,
        },
        Input: {
            borderRadius: 6,
        },
        Form: {
            itemMarginBottom: 24,
        },
    },
};