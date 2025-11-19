import React, { useState } from 'react';
import { CheckCircle2, Upload, ChevronRight, ChevronLeft } from 'lucide-react';

const AcademyApplication: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">학원 인증 신청</h1>
          <div className="flex justify-center items-center gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= num ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {num}
                </div>
                {num < 3 && <div className={`w-12 h-1 mx-2 ${step > num ? 'bg-primary-600' : 'bg-slate-200'}`}></div>}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-16 mt-2 text-xs font-medium text-slate-500">
            <span>기본 정보</span>
            <span>상세 정보</span>
            <span>서류 제출</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-4">기본 정보 입력</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">학원명</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="예: 에듀 아카데미" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">사업자 등록번호</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="000-00-00000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">주소</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="주소를 입력하세요" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">대표자명</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-4">학원 상세 정보</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">교육 과목</label>
                  <select className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none">
                    <option>선택하세요</option>
                    <option>영어</option>
                    <option>수학</option>
                    <option>과학</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">학생 수</label>
                    <input type="number" className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">강사 수</label>
                    <input type="number" className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">개원일</label>
                  <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-4">증빙 서류 제출</h2>
              <div className="space-y-4">
                {[
                  '사업자등록증 사본',
                  '학원 설립 운영 등록증',
                  '강사 명단 및 자격 증빙',
                  '시설 내외부 사진'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-300 transition-colors bg-slate-50">
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                    <button className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700">
                      <Upload size={16} /> 파일 선택
                    </button>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-xs text-blue-800 leading-relaxed">
                  * 제출된 서류는 인증 심사 목적으로만 사용되며, 개인정보보호법에 따라 안전하게 관리됩니다.<br/>
                  * 허위 사실이 발견될 경우 인증이 취소될 수 있습니다.
                </p>
              </div>
            </div>
          )}

          {/* Footer Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className={`flex items-center px-6 py-2 rounded-lg font-medium ${
                step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <ChevronLeft size={20} className="mr-1" /> 이전
            </button>
            
            {step < 3 ? (
              <button
                onClick={() => setStep(Math.min(3, step + 1))}
                className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                다음 단계 <ChevronRight size={20} className="ml-1" />
              </button>
            ) : (
              <button
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-green-200"
                onClick={() => alert('신청이 완료되었습니다.')}
              >
                신청 완료 <CheckCircle2 size={20} className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyApplication;