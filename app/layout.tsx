import type {
    Metadata
} from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Madhav Naradala - Portfolio',
    description: 'Professional portfolio showcasing resume, projects, and skills',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return ( < html lang = "en" > < body className = "bg-primary text-white" > {
        children
    } < /body> </html > );
}
