import { Academy, Grade } from './types';

export const MOCK_ACADEMIES: Academy[] = [
  {
    id: '1',
    name: '프린스턴 영어학원',
    location: '서울 강남구',
    subject: '영어',
    grade: Grade.THREE_STAR,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    totalScore: 9.2,
    parentScore: 9.5,
    expertScore: 9.0,
    aiScore: 9.1,
    metrics: {
      education: 9.5,
      teachers: 9.8,
      facility: 8.5,
      management: 9.2,
      price: 8.0
    },
    description: '아이비리그 출신 강사진과 체계적인 커리큘럼을 갖춘 최상위 영어 전문 학원입니다.',
    address: '서울시 강남구 테헤란로 123',
    phone: '02-555-1234',
    studentCount: 250,
    reviews: [
      {
        id: 'r1',
        userName: '김** 학부모',
        date: '2024-11-15',
        rating: 5,
        content: '선생님들이 정말 열정적으로 가르쳐주십니다. 아이 영어 실력이 눈에 띄게 늘었어요.',
        tags: ['열정적', '체계적']
      },
      {
        id: 'r2',
        userName: '이** 학부모',
        date: '2024-11-10',
        rating: 4,
        content: '시설은 조금 노후되었지만 수업 질은 최고입니다.',
        tags: ['수업질최고']
      }
    ]
  },
  {
    id: '2',
    name: '오일러 수학학원',
    location: '서울 서초구',
    subject: '수학',
    grade: Grade.TWO_STAR,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    totalScore: 8.5,
    parentScore: 8.8,
    expertScore: 8.2,
    aiScore: 8.5,
    metrics: {
      education: 8.8,
      teachers: 9.0,
      facility: 9.2,
      management: 8.5,
      price: 7.5
    },
    description: '개념 원리부터 심화 문제까지, 수학적 사고력을 키워주는 프리미엄 수학 학원.',
    address: '서울시 서초구 서초대로 456',
    phone: '02-522-5678',
    studentCount: 180,
    reviews: [
      {
        id: 'r3',
        userName: '박** 학부모',
        date: '2024-11-18',
        rating: 5,
        content: '관리가 정말 철저합니다. 숙제 검사부터 오답 노트까지 완벽해요.',
        tags: ['관리철저', '시설굿']
      }
    ]
  },
  {
    id: '3',
    name: '다빈치 코딩 아카데미',
    location: '경기 분당구',
    subject: '코딩',
    grade: Grade.ONE_STAR,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    totalScore: 7.8,
    parentScore: 8.0,
    expertScore: 7.5,
    aiScore: 7.9,
    metrics: {
      education: 8.2,
      teachers: 8.0,
      facility: 9.5,
      management: 7.0,
      price: 6.5
    },
    description: '최신 장비와 실무 중심의 프로젝트 수업을 제공하는 코딩 전문 교육기관.',
    address: '경기도 성남시 분당구 판교로 789',
    phone: '031-777-9999',
    studentCount: 120,
    reviews: []
  },
  {
    id: '4',
    name: '가우스 영재 센터',
    location: '서울 송파구',
    subject: '과학',
    grade: Grade.TWO_STAR,
    imageUrl: 'https://picsum.photos/800/600?random=4',
    totalScore: 8.7,
    parentScore: 8.5,
    expertScore: 8.9,
    aiScore: 8.7,
    metrics: {
      education: 9.0,
      teachers: 9.2,
      facility: 8.0,
      management: 8.8,
      price: 8.2
    },
    description: '영재고/과학고 대비 전문 커리큘럼 운영.',
    address: '서울시 송파구 올림픽로 100',
    phone: '02-444-1111',
    studentCount: 90,
    reviews: []
  }
];