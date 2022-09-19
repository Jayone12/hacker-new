export const diffTime = (timestamp: number) => {
  const currentTime = Date.now();
  // 해커뉴스의 time은 unix time으로 비교하기 위해 밀리초로 변경한다.
  const storyTime = timestamp * 1000;
  // 1000으로 나눠서 밀리초를 초로 바꾸고 60으로 나눠 분으로 바꾼다. (1분은 60초)
  const diff = Math.floor((currentTime - storyTime) / 1000 / 60);

  if (diff < 1) return `a few seconds`;
  if (diff < 60) {
    return `${diff} minutes ago`;
  }

  // 분으로 바꾼 diff에서 60으로 또 나누어 시간으로 바꾼다. (1시간은 60분)
  const diffHour = Math.floor(diff / 60);
  if (diffHour < 24) {
    return `${diffHour} hours ago`;
  }

  // 시간으로 바꾼거에서 24로 나눠서 일수를 계산한다. (하루는 24시간)
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 365) {
    return `${diffDay} days ago`;
  }

  // 마지막은 년수로 계산
  return `${Math.floor(diffDay / 365)} years ago`;
};
