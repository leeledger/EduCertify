import React, { useState } from 'react';
import { User, UserRole } from '../types';

interface SignUpProps {
  onSignUp: (user: User) => void;
  onNavigateLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onNavigateLogin }) => {
  const [role, setRole] = useState<UserRole>('PARENT');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    const newUser: User = {
      id: 'new_user_' + Date.now(),
      name,
      email,
      role
    };
    onSignUp(newUser);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          회원가입
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          EduCertify에 오신 것을 환영합니다
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                가입 유형 선택
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  onClick={() => setRole('PARENT')}
                  className={`cursor-pointer text-center p-3 border rounded-lg text-sm ${role === 'PARENT' ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500' : 'border-slate-300 hover:bg-slate-50'}`}
                >
                  학부모
                </div>
                <div 
                  onClick={() => setRole('ACADEMY')}
                  className={`cursor-pointer text-center p-3 border rounded-lg text-sm ${role === 'ACADEMY' ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500' : 'border-slate-300 hover:bg-slate-50'}`}
                >
                  학원 관계자
                </div>
                <div 
                  onClick={() => setRole('EXPERT')}
                  className={`cursor-pointer text-center p-3 border rounded-lg text-sm ${role === 'EXPERT' ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500' : 'border-slate-300 hover:bg-slate-50'}`}
                >
                  교육 전문가
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                이름
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                이메일 주소
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
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
                  type="password"
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
                회원가입 및 로그인
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              이미 계정이 있으신가요?{' '}
              <button onClick={onNavigateLogin} className="font-medium text-primary-600 hover:text-primary-500">
                로그인하기
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;