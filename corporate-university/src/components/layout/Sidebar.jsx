"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu as MenuIcon, User2, LogOut, ChevronDown, Settings, Info, History } from 'lucide-react';
import { Layout, Menu, Button, Drawer, Dropdown, Avatar } from 'antd';
import { useAuth } from '@/hooks/auth';
import NAV_ITEMS from '@/config/navigation';
import { getPageMetaByPath } from '@/config/pageMeta';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter()
    const { logout } = useAuth();

    const navItems = NAV_ITEMS;

    const pageMeta = useMemo(() => getPageMetaByPath(pathname || ''), [pathname]);

    return (
        <div className="h-screen w-full overflow-hidden bg-gray-100">
            {/* Top bar with burger on mobile/tablet */}
            <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between gap-3 px-4 py-3 bg-primary text-white">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logos/corpu-light.svg"
                        alt="Kemenkop Corporate University"
                        width={120}
                        height={32}
                        priority
                    />
                </div>
                <Button
                    aria-label="Open sidebar"
                    type="text"
                    onClick={() => setIsOpen(true)}
                    className="text-white"
                    icon={<MenuIcon className="h-5 w-5" />}
                />
            </div>

            <div className="mx-auto flex h-[calc(100vh-56px)] lg:h-screen w-full overflow-hidden">
                {/* Desktop sidebar */}
                <div className="hidden lg:block p-3">
                    <Layout.Sider
                        width={288}
                        className="rounded-2xl !bg-primary shadow-md h-[calc(100vh-24px)]"
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="p-8">
                            <Image
                                src="/logos/corpu-light.svg"
                                alt="Kemenkop Corporate University"
                                width={180}
                                height={48}
                                priority
                            />
                        </div>
                        <div className="px-2 h-[calc(100%-80px)] overflow-y-auto">
                            <Menu
                                mode="inline"
                                selectable
                                selectedKeys={[pathname || '']}
                                items={navItems.map((item) => ({
                                    key: item.href,
                                    icon: <item.Icon className="h-5 w-5 text-white" />,
                                    label: (
                                        <Link className="text-white/90" href={item.href}>{item.label}</Link>
                                    ),
                                }))}
                                className="bg-transparent text-white [&_.ant-menu-item-selected]:!bg-white/10 [&_.ant-menu-item]:!text-white/90"
                            />
                        </div>
                    </Layout.Sider>
                </div>

                {/* Drawer sidebar (mobile/tablet) */}
                <Drawer
                    className="lg:hidden"
                    placement="right"
                    width={288}
                    bodyStyle={{ padding: 0, background: 'transparent' }}
                    styles={{ body: { padding: 0 } }}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <div className="h-full bg-primary p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <Image
                                src="/logos/corpu-light.svg"
                                alt="Kemenkop Corporate University"
                                width={150}
                                height={40}
                            />
                            <Button type="text" className="text-white" onClick={() => setIsOpen(false)}>Close</Button>
                        </div>
                        <div className="px-2 h-[calc(100%-56px)] overflow-y-auto">
                            <Menu
                                mode="inline"
                                selectable
                                selectedKeys={[pathname || '']}
                                onClick={() => setIsOpen(false)}
                                items={navItems.map((item) => ({
                                    key: item.href,
                                    icon: <item.Icon className="h-5 w-5 text-white" />,
                                    label: (
                                        <Link className="text-white/90" href={item.href}>{item.label}</Link>
                                    ),
                                }))}
                                className="bg-transparent text-white [&_.ant-menu-item-selected]:!bg-white/10 [&_.ant-menu-item]:!text-white/90"
                            />
                        </div>
                    </div>
                </Drawer>

                {/* Main content */}
                <main className="flex-1 overflow-auto h-full p-4 lg:p-6">
                    {/* Top Bar */}
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-primary">{pageMeta.title}</h1>
                            <p className="mt-1 text-sm text-gray-500">{pageMeta.description}</p>
                        </div>
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'profile',
                                        label: 'Profil Saya',
                                        icon: <Settings className="h-4 w-4" />,
                                        onClick: () => router.push(`/user/profile`),
                                        className: "!px-4 !py-3 !rounded-2xl"
                                    },
                                    {
                                        key: 'panduan',
                                        label: 'Panduan',
                                        icon: <Info className="h-4 w-4" />,
                                        onClick: () => router.push(`/user/guide`),
                                        className: "!px-4 !py-3 !rounded-2xl"
                                    },
                                    {
                                        key: 'history-learning',
                                        label: 'Riwayat Pembelajaran',
                                        icon: <History className="h-4 w-4" />,
                                        onClick: () => router.push(`/user/history/learning`),
                                        className: "!px-4 !py-3 !rounded-2xl"
                                    },
                                    {
                                        key: 'logout',
                                        label: 'Keluar',
                                        icon: <LogOut className="h-4 w-4" />,
                                        onClick: () => logout(),
                                        className: "!text-red-500 hover:!bg-red-500/10 !px-4 !py-3 !rounded-2xl"
                                    },
                                ],
                            }}
                            placement='bottomRight'
                            open={isProfileOpen}
                            onOpenChange={setIsProfileOpen}
                        >
                            <Button className="!w-max !h-max !border-0 !rounded-2xl ">
                                <div className='flex items-center gap-3 !px-3 !py-4'>
                                    <Avatar className="bg-primary text-white" icon={<User2 className="h-5 w-5" />} />
                                    <span className="text-sm font-semibold text-primary">Student</span>
                                    <ChevronDown className="h-5 w-5 text-primary" />
                                </div>
                            </Button>
                        </Dropdown>
                    </div>

                    {children}
                </main>
            </div>
        </div>
    );
};

export default Sidebar;