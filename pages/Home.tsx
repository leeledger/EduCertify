import React, { useState, useMemo } from 'react';
import { Search, MapPin, BookOpen, Award } from 'lucide-react';
import { Academy, Grade, PageView } from '../types';
import { MOCK_ACADEMIES } from '../constants';
import RatingBadge from '../components/RatingBadge';

interface HomeProps {
  onAcademyClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAcademyClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('전체');
  const [selectedLocation, setSelectedLocation] = useState('전체');

  const filteredAcademies = useMemo(() => {
    return MOCK_ACADEMIES.filter((academy) => {
      const matchesSearch = academy.name.includes(searchTerm) || academy.description.includes(searchTerm);
      const matchesSubject = selectedSubject === '전체' || academy.subject === selectedSubject;
      const matchesLocation = selectedLocation === '전체' || academy.location.includes(selectedLocation);
      return matchesSearch && matchesSubject && matchesLocation;
    });
  }, [searchTerm, selectedSubject, selectedLocation]);

  const subjects = ['전체', '영어', '수학', '과학', '코딩', '예체능'];
  const locations = ['전체', '서울 강남구', '서울 서초구', '서울 송파구', '경기 분당구'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            검증된 학원, <span className="text-primary-400">객관적 기준</span>으로 선택하세요
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            학부모 평가, 전문가 심의, AI 분석의 3중 검증 시스템으로<br className="hidden md:block" />
            우리 아이에게 딱 맞는 우수 학원을 찾아드립니다.
          </p>

          {/* Search Box */}
          <div className="bg-white p-4 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <select 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:ring-2 focus:ring-primary-500 outline-none appearance-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div className="flex-1 relative">
              <BookOpen className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <select 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:ring-2 focus:ring-primary-500 outline-none appearance-none"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
            </div>
            <div className="flex-[2] relative">
              <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="학원명 또는 키워드 검색"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-primary-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
              검색
            </button>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: '3성 최우수 학원', count: '123개', color: 'text-red-700' },
            { label: '2성 우수 학원', count: '456개', color: 'text-slate-800' },
            { label: '1성 인증 학원', count: '789개', color: 'text-slate-600' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
              <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {searchTerm || selectedSubject !== '전체' ? '검색 결과' : '최근 인증 학원'}
          </h2>
          <span className="text-slate-500 text-sm">{filteredAcademies.length}개의 학원을 찾았습니다</span>
        </div>

        {filteredAcademies.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAcademies.map((academy) => (
              <div 
                key={academy.id}
                onClick={() => onAcademyClick(academy.id)}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={academy.imageUrl} 
                    alt={academy.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <RatingBadge grade={academy.grade} size="sm" showText={false} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium text-sm flex items-center gap-1">
                      <MapPin size={14} /> {academy.location} | {academy.subject}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{academy.name}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">{academy.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">종합 평가</span>
                      <span className="text-lg font-bold text-primary-600">{academy.totalScore} <span className="text-xs text-slate-400 font-normal">/ 10</span></span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-slate-500">학부모 만족도</span>
                      <span className="text-sm font-semibold text-slate-700">{Math.round(academy.parentScore * 10)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;