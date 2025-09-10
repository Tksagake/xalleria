import React, { useEffect, useState } from 'react';

interface CounterNumberProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const CounterNumber: React.FC<CounterNumberProps> = ({
  value,
  duration = 2000,
  className = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default CounterNumber;