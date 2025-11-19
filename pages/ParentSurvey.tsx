import React, { useState } from 'react';
import { Star, Check, Search } from 'lucide-react';
import { MOCK_ACADEMIES } from '../constants';
import { Academy } from '../types';

const ParentSurvey: React.FC = () => {
  const [selectedAcademy, setSelectedAcademy] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [ratings, setRatings] = useState({
    education: 0,
    teachers: 0,
    facility: 0,
    management: 0,
    price: 0
  });
  const [reviewText, setReviewText] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const filteredAcademies = MOCK_ACADEMIES.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const availableTags = ['체계적인 관리', '열정적인 선생님', '좋은 시설', '셔틀운행', '숙제많음', '성적향상', '친절한 상담'];

  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleRating = (category: keyof typeof ratings, score: number) => {
    setRatings(prev => ({ ...prev, [category]: score }));
  };

  const handleSubmit = () => {
    if (!selectedAcademy) {
      alert('평가할 학원을 선택해주세요.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">평가 제출 완료</h2>
          <p className="text-slate-600 mb-8">
            소중한 의견 감사합니다.<br/>
            학부모님의 평가는 다른 분들에게 큰 도움이 됩니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700"
          >
            다른 학원 평가하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-primary-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">학원 만족도 평가</h1>
            <p className="text-primary-200">재원 경험이 있는 학원에 대한 솔직한 평가를 남겨주세요.</p>
          </div>

          <div className="p-8 space-y-8">
            {/* 1. Select Academy */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-sm flex items-center justify-center mr-2">1</span>
                평가할 학원 선택
              </h2>
              
              {!selectedAcademy ? (
                <div className="relative">
                   <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                   <input 
                     type="text"
                     placeholder="학원 이름을 검색하세요"
                     className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                   />
                   {searchQuery && (
                     <div className="mt-2 border border-slate-200 rounded-lg max-h-48 overflow-y-auto">
                       {filteredAcademies.map(academy => (
                         <div 
                           key={academy.id}
                           className="p-3 hover:bg-slate-50 cursor-pointer border-b last:border-0 border-slate-100"
                           onClick={() => {
                             setSelectedAcademy(academy.id);
                             setSearchQuery('');
                           }}
                         >
                           <div className="font-bold text-slate-900">{academy.name}</div>
                           <div className="text-xs text-slate-500">{academy.location} | {academy.subject}</div>
                         </div>
                       ))}
                       {filteredAcademies.length === 0 && (
                         <div className="p-4 text-center text-slate-500 text-sm">검색 결과가 없습니다.</div>
                       )}
                     </div>
                   )}
                </div>
              ) : (
                <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div>
                    <span className="text-xs text-blue-600 font-bold mb-1 block">선택된 학원</span>
                    <span className="font-bold text-slate-900">{MOCK_ACADEMIES.find(a => a.id === selectedAcademy)?.name}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedAcademy('')}
                    className="text-sm text-slate-500 hover:text-red-500 underline"
                  >
                    변경
                  </button>
                </div>
              )}
            </div>

            {selectedAcademy && (
              <>
                {/* 2. Detailed Rating */}
                <div className="animate-fade-in">
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-sm flex items-center justify-center mr-2">2</span>
                    항목별 만족도
                  </h2>
                  <div className="grid gap-4 bg-slate-50 p-6 rounded-xl">
                    {[
                      { key: 'education', label: '교육 품질 (커리큘럼)' },
                      { key: 'teachers', label: '강사 전문성' },
                      { key: 'facility', label: '시설 및 환경' },
                      { key: 'management', label: '학생 관리' },
                      { key: 'price', label: '수강료 합리성' },
                    ].map((item) => (
                      <div key={item.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => handleRating(item.key as keyof typeof ratings, star)}
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star 
                                size={24} 
                                className={`${
                                  // @ts-ignore
                                  ratings[item.key] >= star ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                                }`} 
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Review Text */}
                <div className="animate-fade-in">
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-sm flex items-center justify-center mr-2">3</span>
                    상세 리뷰
                  </h2>
                  <textarea 
                    className="w-full border border-slate-300 rounded-lg p-4 h-32 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                    placeholder="아이의 학습 변화, 장단점 등 구체적인 후기를 남겨주세요. (50자 이상)"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  ></textarea>
                </div>

                 {/* 4. Tags */}
                 <div className="animate-fade-in">
                  <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-sm flex items-center justify-center mr-2">4</span>
                    키워드 선택 (최대 3개)
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          tags.includes(tag) 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        # {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 animate-fade-in">
                  <button 
                    onClick={handleSubmit}
                    disabled={reviewText.length < 10}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
                      reviewText.length >= 10
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-200' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    평가 제출하기
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentSurvey;