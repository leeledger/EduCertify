import React from 'react';
import { GraduationCap, Menu, LogOut, User as UserIcon } from 'lucide-react';
import { PageView, User, UserRole } from '../types';

interface HeaderProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, user, onLogout }) => {
  
  // Define which roles can see which pages
  const getNavItems = () => {
    const common = [{ label: '홈', page: 'HOME' as PageView }];
    
    if (!user) return common;

    switch (user.role) {
      case 'ACADEMY':
        return [...common, { label: '인증 신청', page: 'APPLY' as PageView }];
      case 'EXPERT':
        return [...common, { label: '전문가 심의', page: 'EXPERT' as PageView }];
      case 'ADMIN':
        return [...common, { label: '관리자', page: 'ADMIN' as PageView }];
      case 'PARENT':
        return [...common, { label: '학원 평가하기', page: 'SURVEY' as PageView }];
      default:
        return common;
    }
  };

  const navItems = getNavItems();

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-100 text-red-700';
      case 'EXPERT': return 'bg-indigo-100 text-indigo-700';
      case 'ACADEMY': return 'bg-green-100 text-green-700';
      case 'PARENT': return 'bg-blue-100 text-blue-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getRoleName = (role: UserRole) => {
    switch (role) {
      case 'ADMIN': return '관리자';
      case 'EXPERT': return '전문가';
      case 'ACADEMY': return '학원회원';
      case 'PARENT': return '학부모';
      default: return '회원';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('HOME')}
          >
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              EduCertify<span className="text-primary-600">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-slate-100 p-1.5 rounded-full">
                    <UserIcon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-slate-900 leading-none">{user.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded mt-1 font-medium ${getRoleBadgeColor(user.role)}`}>
                      {getRoleName(user.role)}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={onLogout}
                  className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1"
                >
                  <LogOut size={16} /> 로그아웃
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => onNavigate('LOGIN')}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600"
                >
                  로그인
                </button>
                <button 
                  onClick={() => onNavigate('SIGNUP')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  회원가입
                </button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;