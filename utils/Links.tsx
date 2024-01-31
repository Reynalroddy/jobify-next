import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/dashboard/add-job',
    label: 'add job',
    icon: <Layers />,
  },
  {
    href: '/dashboard/jobs',
    label: 'jobs',
    icon: <AppWindow />,
  },
  {
    href: '/dashboard/stats',
    label: 'stats',
    icon: <AreaChart />,
  },
];

export default links;