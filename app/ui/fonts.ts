import { Inter, Lusitana } from 'next/font/google';
// import { Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], weight: "300" });
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    // weight: "400"
    weight: ['400', '700']
});