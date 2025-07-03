import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function DiffTime(created) {
  moment.locale('ru');

  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment();
      const postTime = moment(created);
      const timeDifference = moment.duration(currentTime.diff(postTime));

      let timeString;
      if (timeDifference.asMinutes() < 60) {
        timeString = `${Math.round(timeDifference.asMinutes())} минут назад`;
      } else if (timeDifference.asHours() < 24) {
        timeString = `${Math.round(timeDifference.asHours())} часов назад`;
      } else {
        timeString = `${Math.round(timeDifference.asDays())} дней назад`;
      }

      setTimeAgo(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, [created]);

  return (
    <div>
      <p>Время создания поста: {timeAgo}</p>
    </div>
  );
}