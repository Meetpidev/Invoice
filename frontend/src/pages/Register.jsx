import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import { FiUser, FiMail, FiLock, FiCheckCircle } from 'react-icons/fi';

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 p-12 text-white flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold tracking-tight">EasyInvoice</h2>
                </div>

                <div className="relative z-10">
                    <h3 className="text-5xl font-extrabold leading-tight mb-6">
                        Manage your business <br /> 
                        <span className="text-indigo-200">finances in one place.</span>
                    </h3>
                    <ul className="space-y-4 text-lg text-indigo-100">
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-green-400" /> Professional Invoicing
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-green-400" /> Automated Expense Tracking
                        </li>
                        <li className="flex items-center gap-3">
                            <FiCheckCircle className="text-green-400" /> Real-time Financial Reports
                        </li>
                    </ul>
                </div>

                <div className="relative z-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-sm italic opacity-90">
                        "The best tool for managing my freelance invoices. It's saved me hours of manual data entry every month."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center font-bold">M</div>
                        <div>
                            <p className="text-sm font-semibold text-white">Smith</p>
                            <p className="text-xs text-indigo-200">Independent Consultant</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-4xl font-black text-gray-900 mb-3">Create Account</h1>
                        <p className="text-gray-500">Join thousands of professionals simplifying their billing.</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 text-sm animate-pulse">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Username</label>
                            <Input
                                icon={FiUser}
                                type="text"
                                placeholder="johndoe"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                            <Input
                                icon={FiMail}
                                type="email"
                                placeholder="name@company.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                            <Input
                                icon={FiLock}
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transform transition hover:-translate-y-0.5 active:scale-95"
                        >
                            Get Started
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            Already using InvoicePro?{' '}
                            <Link to="/sign-in" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;