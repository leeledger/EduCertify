import React from 'react';
import { Star } from 'lucide-react';
import { Grade } from '../types';

interface RatingBadgeProps {
  grade: Grade;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ grade, size = 'md', showText = true }) => {
  const getGradeConfig = (g: Grade) => {
    switch (g) {
      case Grade.THREE_STAR:
        return { stars: 3, text: '최우수 학원', bg: 'bg-red-800', textCol: 'text-white' };
      case Grade.TWO_STAR:
        return { stars: 2, text: '우수 학원', bg: 'bg-slate-800', textCol: 'text-white' };
      case Grade.ONE_STAR:
        return { stars: 1, text: '인증 학원', bg: 'bg-slate-600', textCol: 'text-white' };
      default:
        return { stars: 0, text: '미인증', bg: 'bg-gray-200', textCol: 'text-gray-500' };
    }
  };

  const config = getGradeConfig(grade);
  if (config.stars === 0) return null;

  const starSize = size === 'sm' ? 12 : size === 'md' ? 16 : 24;
  const padding = size === 'sm' ? 'px-2 py-0.5' : size === 'md' ? 'px-3 py-1' : 'px-4 py-2';
  const fontSize = size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg';

  return (
    <div className={`inline-flex items-center gap-2 rounded-full ${config.bg} ${config.textCol} ${padding} shadow-sm`}>
      <div className="flex gap-0.5">
        {Array.from({ length: config.stars }).map((_, i) => (
          <Star key={i} size={starSize} className="fill-gold-400 text-gold-400" />
        ))}
      </div>
      {showText && <span className={`font-bold ${fontSize}`}>{config.text}</span>}
    </div>
  );
};

export default RatingBadge;