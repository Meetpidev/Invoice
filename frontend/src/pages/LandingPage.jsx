import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, ChevronRight, ArrowRight, Check } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
           
            <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-sm">E</div>
                        <span className="text-lg font-bold tracking-tight">EasyInvoice</span>
                    </div>

                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
                        <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
                        <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to="/sign-in" className="text-sm font-medium text-slate-600 hover:text-slate-900">Login</Link>
                        <Link to="/register" className="bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-all">
                            Start Free
                        </Link>
                    </div>
                </div>
            </nav>

           
            <section className="pt-40 pb-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        Invoicing for people <br />
                        <span className="text-indigo-600">who hate paperwork.</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                        Create, send, and track professional invoices in seconds. No complex setups, just clean billing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register" className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                            Get Started <ArrowRight size={18} />
                        </Link>
                        <button className="px-8 py-3.5 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

           
            <section id="features" className="py-24 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-lg font-bold">Fast Creation</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Auto-fill client details and save items for one-click invoicing.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                                <Check size={20} />
                            </div>
                            <h3 className="text-lg font-bold">Smart Tracking</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Know the exact moment a client opens your invoice email.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <Shield size={20} />
                            </div>
                            <h3 className="text-lg font-bold">Auto Reminders</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Friendly automated nudges so you always get paid on time.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section id="pricing" className="py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-3">Straightforward pricing</h2>
                        <p className="text-slate-500">Free for your first 5 invoices. No credit card required.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-indigo-300 transition-colors">
                            <div>
                                <h4 className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-4">Starter</h4>
                                <div className="text-4xl font-bold mb-6">₹0 <span className="text-base font-normal text-slate-400">/mo</span></div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-indigo-600" /> 5 Monthly Invoices</li>
                                    <li className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-indigo-600" /> Standard Templates</li>
                                </ul>
                            </div>
                            <Link to="/register" className="w-full py-3 rounded-xl border border-slate-200 text-center text-sm font-bold hover:bg-slate-50 transition-all">
                                Try for Free
                            </Link>
                        </div>

                        <div className="p-8 bg-slate-900 text-white rounded-2xl flex flex-col justify-between shadow-2xl">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-indigo-400 text-xs uppercase tracking-widest mb-4">Pro</h4>
                                    <span className="bg-indigo-500 text-[10px] px-2 py-1 rounded font-black uppercase">Best Value</span>
                                </div>
                                <div className="text-4xl font-bold mb-6">₹399 <span className="text-base font-normal text-slate-400">/mo</span></div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-indigo-400" /> Unlimited Invoices</li>
                                    <li className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-indigo-400" /> Custom Branding</li>
                                    <li className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-indigo-400" /> WhatsApp Reminders</li>
                                </ul>
                            </div>
                            <Link to="/register" className="w-full py-3 rounded-xl bg-indigo-600 text-center text-sm font-bold hover:bg-indigo-700 transition-all">
                                Get Pro Access
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

           
            <footer className="py-12 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm">© 2026 EasyInvoice. Simple billing for creators.</p>
                    <div className="flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#" className="hover:text-indigo-600">Privacy</a>
                        <a href="#" className="hover:text-indigo-600">Terms</a>
                        <a href="#" className="hover:text-indigo-600">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;