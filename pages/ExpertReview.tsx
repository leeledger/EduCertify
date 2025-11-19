import React from 'react';
import { Save, Send } from 'lucide-react';

const ExpertReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">전문가 심의 평가</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
            <div>
              <span className="text-slate-400 text-xs">심의 대상</span>
              <h2 className="text-lg font-bold">프린스턴 영어학원</h2>
            </div>
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">심사중</span>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Criteria 1 */}
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                1. 교육 과정 및 커리큘럼 <span className="ml-2 text-xs text-slate-500 font-normal">(25점)</span>
              </h3>
              <div className="grid grid-cols-4 gap-4 mb-3">
                {['미흡', '보통', '양호', '우수'].map((label) => (
                  <label key={label} className="flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50 peer-checked:bg-blue-50 peer-checked:border-blue-500">
                    <input type="radio" name="criteria1" className="mr-2" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
              <textarea 
                className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                rows={3}
                placeholder="상세 평가 의견을 작성해주세요."
              ></textarea>
            </div>

             {/* Criteria 2 */}
             <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                2. 강사 전문성 및 자격 <span className="ml-2 text-xs text-slate-500 font-normal">(20점)</span>
              </h3>
              <div className="grid grid-cols-4 gap-4 mb-3">
                {['미흡', '보통', '양호', '우수'].map((label) => (
                  <label key={label} className="flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                    <input type="radio" name="criteria2" className="mr-2" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
              <textarea 
                className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                rows={3}
                placeholder="상세 평가 의견을 작성해주세요."
              ></textarea>
            </div>

             {/* Criteria 3 */}
             <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                3. 시설 및 환경 <span className="ml-2 text-xs text-slate-500 font-normal">(15점)</span>
              </h3>
              <div className="grid grid-cols-4 gap-4 mb-3">
                {['미흡', '보통', '양호', '우수'].map((label) => (
                  <label key={label} className="flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50">
                    <input type="radio" name="criteria3" className="mr-2" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
              <textarea 
                className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                rows={3}
                placeholder="상세 평가 의견을 작성해주세요."
              ></textarea>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h3 className="font-bold text-md mb-2">최종 추천 등급</h3>
              <div className="flex gap-4">
                {['3성 (최우수)', '2성 (우수)', '1성 (인증)', '인증 불가'].map((grade) => (
                  <label key={grade} className="flex items-center">
                    <input type="radio" name="finalGrade" className="mr-2" />
                    <span className="text-sm">{grade}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end gap-3">
            <button className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
              <Save size={18} className="mr-2" /> 임시 저장
            </button>
            <button className="flex items-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700" onClick={() => alert('심의 결과가 제출되었습니다.')}>
              <Send size={18} className="mr-2" /> 결과 제출
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertReview;