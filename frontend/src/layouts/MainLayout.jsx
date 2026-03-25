import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard, FileText, Users, Package,
    LogOut, PlusCircle, Building2, CreditCard, Menu, X
} from 'lucide-react';

import { useTheme, ThemeToggleButton } from '../components/ThemeSelector';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
    const { logout } = useAuth();
    const { theme } = useTheme();

    const navItems = [
        { label: 'Dashboard',        path: '/dashboard',        icon: LayoutDashboard },
        { label: 'Invoices',          path: '/invoices',          icon: FileText       },
        { label: 'Create Invoice',    path: '/invoices/create',   icon: PlusCircle     },
        { label: 'Customers',         path: '/customers',         icon: Users          },
        { label: 'Products',          path: '/products',          icon: Package        },
        { label: 'Business Profile',  path: '/profile',           icon: Building2      },
        { label: 'Pricing',           path: '/pricing',           icon: CreditCard     },
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden animate-fade-in"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`w-64 text-white h-screen fixed left-0 top-0 flex flex-col shadow-2xl z-30 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
                style={{ background: 'var(--sidebar-bg, #111827)' }}
            >
                {/* Logo */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between md:justify-start gap-3">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                            style={{ background: 'var(--primary)' }}
                        >
                            A
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">EasyInvoice</h1>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Invoice Manager</p>
                        </div>
                    </div>
                    <button className="md:hidden text-white/40 hover:text-white" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map(({ label, path, icon: Icon }) => {
                        const active = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                    active ? 'text-white shadow-lg' : 'text-white/50 hover:bg-white/5 hover:text-white'
                                }`}
                                style={active ? {
                                    background: 'var(--sidebar-active)',
                                    boxShadow: '0 4px 14px var(--sidebar-shadow)',
                                } : {}}
                            >
                                <Icon size={20} className={active ? 'text-white' : 'text-white/40 group-hover:text-white'} />
                                <span className="font-medium text-sm">{label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="p-4 border-t border-white/10 space-y-2">
                    {/* Theme picker inside sidebar */}
                    <div className="px-1">
                        <ThemeToggleButton />
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium text-sm">Sign Out</span>
                    </button>
                </div>
            </div>
        </>
    );
};

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50 flex-col md:flex-row">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="md:ml-64 flex-1 flex flex-col min-w-0">
                {/* Mobile Header */}
                <header className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10 w-full border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors">
                            <Menu size={24} />
                        </button>
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                            style={{ background: 'var(--primary)' }}
                        >
                            A
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-gray-900">EasyInvoice</h1>
                    </div>
                    <ThemeToggleButton />
                </header>

                <div className="p-4 sm:p-6 md:p-8 flex-1">
                    <header className="hidden md:flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                            <p className="text-gray-500">Manage your invoices and business efficiently</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <ThemeToggleButton />
                            <Link
                                to="/invoices/create"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all shadow-lg"
                                style={{ background: 'var(--primary)', boxShadow: '0 4px 14px var(--btn-shadow)' }}
                            >
                                <PlusCircle size={18} />
                                Create Invoice
                            </Link>
                        </div>
                    </header>

                    <main className="animate-fade-in mx-auto w-full max-w-7xl">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;