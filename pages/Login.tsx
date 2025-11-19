import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
  onNavigateSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onNavigateSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock general login
    const mockUser: User = {
      id: 'u1',
      name: '테스트 유저',
      email: email || 'test@example.com',
      role: 'PARENT'
    };
    onLogin(mockUser);
  };

  const handleQuickLogin = (role: UserRole) => {
    const names = {
      'PARENT': '김학부모',
      'EXPERT': '이전문가',
      'ACADEMY': '박원장',
      'ADMIN': '관리자'
    };
    
    const mockUser: User = {
      id: `u_${role.toLowerCase()}`,
      name: names[role],
      email: `${role.toLowerCase()}@educertify.com`,
      role: role
    };
    onLogin(mockUser);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          로그인
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          EduCertify 계정으로 로그인하세요
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                로그인
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  테스트용 빠른 로그인 (역할 선택)
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button onClick={() => handleQuickLogin('PARENT')} className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                학부모
              </button>
              <button onClick={() => handleQuickLogin('ACADEMY')} className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                학원 원장
              </button>
              <button onClick={() => handleQuickLogin('EXPERT')} className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                교육 전문가
              </button>
              <button onClick={() => handleQuickLogin('ADMIN')} className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-md shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50">
                관리자
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              계정이 없으신가요?{' '}
              <button onClick={onNavigateSignUp} className="font-medium text-primary-600 hover:text-primary-500">
                회원가입하기
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;