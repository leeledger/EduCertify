export enum Grade {
  THREE_STAR = '3star', // 최우수
  TWO_STAR = '2star',   // 우수
  ONE_STAR = '1star',   // 인증
  NONE = 'none'
}

export interface Review {
  id: string;
  userName: string;
  date: string;
  rating: number;
  content: string;
  tags: string[];
}

export interface Academy {
  id: string;
  name: string;
  location: string;
  subject: string;
  grade: Grade;
  imageUrl: string;
  
  // Scores
  totalScore: number;
  parentScore: number;
  expertScore: number;
  aiScore: number;

  // Detailed Metrics (0-10)
  metrics: {
    education: number;
    teachers: number;
    facility: number;
    management: number;
    price: number;
  };

  description: string;
  reviews: Review[];
  address: string;
  phone: string;
  studentCount: number;
}

export type UserRole = 'PARENT' | 'EXPERT' | 'ACADEMY' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type PageView = 'HOME' | 'DETAIL' | 'APPLY' | 'EXPERT' | 'ADMIN' | 'LOGIN' | 'SIGNUP' | 'SURVEY';