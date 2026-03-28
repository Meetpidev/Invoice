import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import { FiMail, FiLock, FiArrowRight, FiShield } from 'react-icons/fi';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex bg-white">
          
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tr from-indigo-900 via-indigo-800 to-purple-800 p-12 text-white flex-col justify-between relative overflow-hidden">
             
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold tracking-tight">EasyInvoice</h2>
                </div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-6 backdrop-blur-sm">
                        <FiShield className="text-indigo-300" />
                        <span>Secure Enterprise Access</span>
                    </div>
                    <h3 className="text-5xl font-extrabold leading-tight mb-6">
                        Welcome back to <br /> 
                        <span className="text-indigo-300">your command center.</span>
                    </h3>
                    <p className="text-indigo-100 text-lg max-w-md">
                        Access your dashboard to track invoices, manage client relationships, and monitor your cash flow.
                    </p>
                </div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-10 h-10 rounded-full border-2 border-indigo-800 bg-indigo-500 flex items-center justify-center text-xs font-bold`}>
                                U{i}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-indigo-200">
                        Joined by <span className="text-white font-bold">10,000+</span> professionals this month.
                    </p>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center lg:text-left">
                        <h1 className="text-4xl font-black text-gray-900 mb-3">Sign In</h1>
                        <p className="text-gray-500">Enter your credentials to access your account.</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 text-sm animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">Forgot?</a>
                            </div>
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
                            className="group w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transform transition hover:-translate-y-0.5 active:scale-95"
                        >
                            Sign In
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            New to InvoicePro?{' '}
                            <Link to="/register" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;