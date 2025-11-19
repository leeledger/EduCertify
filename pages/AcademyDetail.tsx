import React from 'react';
import { ArrowLeft, MapPin, Phone, User, Share2, Heart, CheckCircle } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Academy } from '../types';
import RatingBadge from '../components/RatingBadge';

interface AcademyDetailProps {
  academy: Academy;
  onBack: () => void;
}

const AcademyDetail: React.FC<AcademyDetailProps> = ({ academy, onBack }) => {
  const chartData = [
    { subject: '교육 품질', A: academy.metrics.education, fullMark: 10 },
    { subject: '강사 전문성', A: academy.metrics.teachers, fullMark: 10 },
    { subject: '시설 환경', A: academy.metrics.facility, fullMark: 10 },
    { subject: '학생 관리', A: academy.metrics.management, fullMark: 10 },
    { subject: '가격 합리성', A: academy.metrics.price, fullMark: 10 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-slate-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> 목록으로
          </button>
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-full">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Main Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Identity Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-64 w-full relative">
                <img src={academy.imageUrl} alt={academy.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <RatingBadge grade={academy.grade} />
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">{academy.subject}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-1">{academy.name}</h1>
                  <p className="text-slate-200 flex items-center gap-2 text-sm">
                    <MapPin size={14} /> {academy.address}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-slate-200">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">종합 평가</p>
                    <p className="text-2xl font-bold text-primary-600">{academy.totalScore}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">학부모 추천</p>
                    <p className="text-2xl font-bold text-slate-800">{Math.round(academy.parentScore * 10)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">학생 수</p>
                    <p className="text-2xl font-bold text-slate-800">{academy.studentCount}명</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Evaluation Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-primary-600 w-5 h-5" />
                3중 검증 분석 결과
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-600 font-medium mb-1">학부모 평가</p>
                  <div className="text-2xl font-bold text-blue-900">{academy.parentScore} <span className="text-xs font-normal">/ 10</span></div>
                  <p className="text-xs text-blue-500 mt-2">실제 재원생 학부모</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-sm text-indigo-600 font-medium mb-1">전문가 심의</p>
                  <div className="text-2xl font-bold text-indigo-900">{academy.expertScore} <span className="text-xs font-normal">/ 10</span></div>
                  <p className="text-xs text-indigo-500 mt-2">교육 전문가 2인</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <p className="text-sm text-purple-600 font-medium mb-1">AI 분석</p>
                  <div className="text-2xl font-bold text-purple-900">{academy.aiScore} <span className="text-xs font-normal">/ 10</span></div>
                  <p className="text-xs text-purple-500 mt-2">데이터 기반 종합</p>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    <Radar
                      name="평가 점수"
                      dataKey="A"
                      stroke="#2563eb"
                      fill="#3b82f6"
                      fillOpacity={0.5}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
               <h2 className="text-xl font-bold text-slate-900 mb-6">학부모 리뷰 ({academy.reviews.length})</h2>
               {academy.reviews.length > 0 ? (
                 <div className="space-y-6">
                   {academy.reviews.map(review => (
                     <div key={review.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                              <User size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">{review.userName}</p>
                              <p className="text-xs text-slate-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex text-gold-400">
                            {Array.from({length: 5}).map((_, i) => (
                              <span key={i} className={i < review.rating ? 'fill-current' : 'text-slate-200'}>★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-700 text-sm mb-3">{review.content}</p>
                        <div className="flex gap-2">
                          {review.tags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">#{tag}</span>
                          ))}
                        </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <p className="text-slate-500 text-center py-8">등록된 리뷰가 없습니다.</p>
               )}
            </div>
          </div>

          {/* Right Column: Contact & Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-32">
              <h3 className="font-bold text-lg mb-4">문의하기</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span>{academy.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                  <span>{academy.address}</span>
                </div>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-colors">
                상담 예약하기
              </button>
              <button className="w-full bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 font-bold py-3 rounded-xl mt-3 transition-colors">
                학원 홈페이지
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetail;