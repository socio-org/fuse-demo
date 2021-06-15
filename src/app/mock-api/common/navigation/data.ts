/* tslint:disable:max-line-length */
import {FuseNavigationItem} from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/example'
    }, {
        id: 'calendar',
        title: 'Calendar',
        subtitle: '3 upcoming events',
        type: 'basic',
        icon: 'heroicons_outline:calendar',
        link: '/calendar'
    },
    {
        id: 'posts',
        title: 'Posts',
        type: 'basic',
        icon: 'heroicons_outline:user-group',
        link: '/posts'
    },
    {
        id: 'families',
        title: 'Families',
        type: 'basic',
        icon: 'heroicons_outline:user-group',
        link: '/family/list'
    },
    {
        id: 'members',
        title: 'Members',
        type: 'basic',
        icon: 'heroicons_outline:user',
        link: '/member/list'
    },
    {
        id: 'directory',
        title: 'Directory',
        icon: 'mat_outline:contact_phone',
        type: 'collapsable',
        children: [
            {
                id: 'directory.committee',
                title: 'Parish Committee',
                type: 'basic',
                link: '/coming-soon/classic',
            }, {
                id: 'coming-soon.accounting.estimate',
                title: 'Metropolitan',
                type: 'basic',
                link: '/coming-soon/classic',
            }, {
                id: 'coming-soon.accounting.estimate',
                title: 'Priest',
                type: 'basic',
                link: '/coming-soon/classic',
            }, {
                id: 'coming-soon.accounting.estimate',
                title: 'Near By',
                type: 'basic',
                link: '/coming-soon/classic',
            },
        ]
    }, {
        id: 'pages.settings',
        title: 'Settings',
        type: 'basic',
        icon: 'heroicons_outline:cog',
        link: '/coming-soon/classic'
    },
    {
        id: 'divider-2',
        type: 'divider'
    },
    {
        id: 'coming-soon',
        title: 'Coming soon',
        type: 'group',
        subtitle: 'upcoming features',
        children: [
            {
                id: 'coming-soon.accounting',
                title: 'Accounting',
                icon: 'heroicons_outline:newspaper',
                type: 'collapsable',
                children: [
                    {
                        id: 'coming-soon.accounting.accounts',
                        title: 'Accounts',
                        type: 'basic',
                        link: '/coming-soon/classic',
                    }, {
                        id: 'coming-soon.accounting.estimate',
                        title: 'Estimates',
                        type: 'basic',
                        link: '/coming-soon/classic',
                    },
                ]
            }

        ]
    },
    {
        id: 'divider-2',
        type: 'divider'
    },
    {
        id: 'about',
        title: 'About',
        type: 'basic',
        icon: 'heroicons_outline:information-circle',
        link: '/about'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
