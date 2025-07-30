import { Metadata } from 'next';
import { inter } from '../ui/fonts';

export const metadata: Metadata = {
    title: 'Acme | Login'
}

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <body>{children}</body> */}
            {/*antialiased - taiwind class which smooths out the font. */}
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}