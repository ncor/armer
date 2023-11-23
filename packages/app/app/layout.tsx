import './globals.css';
import Providers from './components/Providers';


export type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    { children }
                </Providers>
            </body>
        </html>
    );
}
