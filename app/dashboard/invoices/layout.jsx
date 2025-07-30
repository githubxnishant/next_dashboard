import SideNav from '@/app/ui/dashboard/sidenav';

const meta = {
    title: 'Acme | Invoices'
}

export default function Layout({ children }) {
    return (
        <div>{children}</div>
    );
}