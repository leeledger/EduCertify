import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Building, CheckCircle, AlertCircle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const trendData = [
    { name: '1월', applicants: 12, certified: 8 },
    { name: '2월', applicants: 19, certified: 12 },
    { name: '3월', applicants: 15, certified: 10 },
    { name: '4월', applicants: 25, certified: 18 },
    { name: '5월', applicants: 32, certified: 24 },
    { name: '6월', applicants: 40, certified: 30 },
  ];

  const pieData = [
    { name: '3성 (최우수)', value: 15 },
    { name: '2성 (우수)', value: 35 },
    { name: '1성 (인증)', value: 50 },
  ];

  const COLORS = ['#b91c1c', '#1e293b', '#475569'];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">관리자 대시보드</h1>
          <div className="text-sm text-slate-500">마지막 업데이트: 2024-11-18 14:30</div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">전체 학원</p>
                <h3 className="text-2xl font-bold text-slate-900">1,234</h3>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Building size={20} /></div>
            </div>
            <span className="text-xs text-green-600 font-medium">▲ 12% 증가 (전월 대비)</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">인증 완료</p>
                <h3 className="text-2xl font-bold text-slate-900">856</h3>
              </div>
              <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle size={20} /></div>
            </div>
            <span className="text-xs text-green-600 font-medium">▲ 8% 증가</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">심사 진행중</p>
                <h3 className="text-2xl font-bold text-slate-900">45</h3>
              </div>
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><AlertCircle size={20} /></div>
            </div>
            <span className="text-xs text-slate-500 font-medium">처리 예정</span>
          </div>

           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-slate-500">활동 회원</p>
                <h3 className="text-2xl font-bold text-slate-900">12.5k</h3>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Users size={20} /></div>
            </div>
            <span className="text-xs text-green-600 font-medium">▲ 5% 증가</span>
          </div>
        </div>

        {/* Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-6">인증 신청 및 완료 추이</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="applicants" stroke="#3b82f6" strokeWidth={2} name="신청" />
                  <Line type="monotone" dataKey="certified" stroke="#10b981" strokeWidth={2} name="인증 완료" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-6">등급별 분포</h3>
            <div className="h-72 flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 w-full mt-4">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                      <span>{entry.name}</span>
                    </div>
                    <span className="font-bold">{entry.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">최근 활동 로그</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              { action: '신규 인증 신청', target: '가우스 영재 센터', time: '10분 전', user: 'admin' },
              { action: '심의 완료', target: '프린스턴 영어학원', time: '1시간 전', user: 'expert_kim' },
              { action: '리뷰 신고 접수', target: '다빈치 코딩', time: '3시간 전', user: 'system' },
            ].map((log, idx) => (
              <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50">
                <div>
                  <span className="font-medium text-slate-900">{log.action}</span>
                  <span className="text-slate-500 mx-2">-</span>
                  <span className="text-slate-700">{log.target}</span>
                </div>
                <div className="text-sm text-slate-500">
                  {log.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;