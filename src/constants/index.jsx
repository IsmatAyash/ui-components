import {
  IoCartOutline,
  IoChatbubbleOutline,
  IoCashOutline,
  IoEyeOutline,
  IoHomeOutline,
  IoSettingsOutline,
  IoAnalyticsOutline,
  IoConstructOutline,
} from 'react-icons/io5';

const iconSize = 30;
export const cards = [
  {
    id: 1,
    value: '234',
    title: 'Daily Views',
    icon: <IoEyeOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 2,
    value: '$80',
    title: 'Sales',
    icon: <IoCartOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 3,
    value: '234',
    title: 'Comments',
    icon: <IoChatbubbleOutline size={iconSize} className="icon-style" />,
  },
  {
    id: 4,
    value: '$7,500',
    title: 'Earnings',
    icon: <IoCashOutline size={iconSize} className="icon-style" />,
  },
];

export const sidebarItems = [
  {
    id: 2,
    icon: <IoHomeOutline size={iconSize} className="icon-style" />,
    path: '/',
    title: 'Dashboard',
  },
  {
    id: 3,
    icon: <IoConstructOutline size={iconSize} className="icon-style" />,
    path: '/product',
    title: 'Products',
  },
  {
    id: 4,
    icon: <IoConstructOutline size={iconSize} className="icon-style" />,
    path: '/customer',
    title: 'Customers',
  },
  {
    id: 5,
    icon: <IoAnalyticsOutline size={iconSize} className="icon-style" />,
    path: '/analytics',
    title: 'Analytics',
  },
  {
    id: 6,
    icon: <IoSettingsOutline size={iconSize} className="icon-style" />,
    path: '/settings',
    title: 'Settings',
  },
];
