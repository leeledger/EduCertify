import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AcademyDetail from './pages/AcademyDetail';
import AcademyApplication from './pages/AcademyApplication';
import ExpertReview from './pages/ExpertReview';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ParentSurvey from './pages/ParentSurvey';
import { MOCK_ACADEMIES } from './constants';
import { PageView, User } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');
  const [selectedAcademyId, setSelectedAcademyId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleAcademyClick = (id: string) => {
    setSelectedAcademyId(id);
    setCurrentPage('DETAIL');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: PageView) => {
    // Access Control Logic
    if (page === 'ADMIN' && user?.role !== 'ADMIN') {
      alert('관리자 권한이 필요합니다.');
      return;
    }
    if (page === 'EXPERT' && user?.role !== 'EXPERT') {
      alert('전문가 권한이 필요합니다.');
      return;
    }
    if (page === 'APPLY' && user?.role !== 'ACADEMY') {
      alert('학원 관계자만 신청할 수 있습니다.');
      return;
    }
    if (page === 'SURVEY' && user?.role !== 'PARENT') {
      alert('학부모만 설문에 참여할 수 있습니다.');
      return;
    }

    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    // Redirect based on role
    if (loggedInUser.role === 'ADMIN') setCurrentPage('ADMIN');
    else if (loggedInUser.role === 'EXPERT') setCurrentPage('EXPERT');
    else if (loggedInUser.role === 'ACADEMY') setCurrentPage('APPLY');
    else setCurrentPage('HOME');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('HOME');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onAcademyClick={handleAcademyClick} />;
      case 'DETAIL':
        const academy = MOCK_ACADEMIES.find(a => a.id === selectedAcademyId);
        if (!academy) return <Home onAcademyClick={handleAcademyClick} />;
        return <AcademyDetail academy={academy} onBack={() => setCurrentPage('HOME')} />;
      case 'APPLY':
        // Double check for component rendering
        if (user?.role !== 'ACADEMY') return <Home onAcademyClick={handleAcademyClick} />;
        return <AcademyApplication />;
      case 'EXPERT':
        if (user?.role !== 'EXPERT') return <Home onAcademyClick={handleAcademyClick} />;
        return <ExpertReview />;
      case 'ADMIN':
        if (user?.role !== 'ADMIN') return <Home onAcademyClick={handleAcademyClick} />;
        return <AdminDashboard />;
      case 'LOGIN':
        return <Login onLogin={handleLogin} onNavigateSignUp={() => setCurrentPage('SIGNUP')} />;
      case 'SIGNUP':
        return <SignUp onSignUp={handleLogin} onNavigateLogin={() => setCurrentPage('LOGIN')} />;
      case 'SURVEY':
        if (user?.role !== 'PARENT') return <Home onAcademyClick={handleAcademyClick} />;
        return <ParentSurvey />;
      default:
        return <Home onAcademyClick={handleAcademyClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        user={user}
        onLogout={handleLogout}
      />
      <div className="flex-grow">
        {renderPage()}
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-white text-lg font-bold mb-4">EduCertify.</h2>
              <p className="text-sm leading-relaxed max-w-xs">
                대한민국 No.1 학원 평가 인증 시스템.<br/>
                신뢰할 수 있는 교육 정보를 제공합니다.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">서비스</h3>
              <ul className="space-y-2 text-sm">
                <li>학원 찾기</li>
                <li>인증 신청</li>
                <li>전문가 등록</li>
                <li>고객센터</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">법적 고지</h3>
              <ul className="space-y-2 text-sm">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>평가 운영 정책</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-center">
            © 2024 EduCertify Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;