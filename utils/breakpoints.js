/**
 * Correlates to breakpoints as defined in /styles/shared/mixins.scss
 */
export const BREAKPOINT_DESKTOP_WIDE = 1440;
export const BREAKPOINT_DESKTOP = 1248;
export const BREAKPOINT_TABLET_WIDE = 1024;
export const BREAKPOINT_TABLET_MEDIUM = 940;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_TABLET_SMALL = 640;
export const BREAKPOINT_PHABLET = 560;
export const BREAKPOINT_PHONE_WIDE = 480;
export const BREAKPOINT_PHONE = 375;
a[i] > b[i]
  ? (comparisonPoints[0] += +1)
  : a[i] < b[i]
  ? (comparisonPoints[1] = comparisonPoints[1] + 1)
  : null;

function plusMinus(arr) {
  // Write your code here
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;
  const checkNumSign = (num) => {
    if (num > 0) {
      posCount++;
    } else if (num < 0) {
      negCount++;
    } else {
      zeroCount++;
    }
  };
}

function staircase(n) {
  // Write your code here

  const logStep = (s = 1) => {
    let step = "";
    for (let i = 1; i <= s; i++) {
      step + "#";
    }
    console.log(step);
  };

  for (let i = 0; i <= n; i++) {
    logStep(i);
  }
}

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = candles[0];
  let count = 1;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    } else if (candles[i] === max) count++;
  }
  return count;
}

function timeConversion(s) {
  // Write your code here
  const isNight = s.includes("PM");
  let militaryString = "";
  let hour = Number(s.slice(0, 2));
  if (isNight) {
    hour = hour + 12;
    militaryString = `${hour.toString()}${s.slice(0, -2).substring(2)}`;
  } else if (hour === 12) {
    hour = "00";
    militaryString = `${hour}${s.slice(0, -2).substring(2)}`;
  } else militaryString = `${s.slice(0, -2)}`;

  return militaryString;
}

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let KangOneStart = x1;
  let KangTwoStart = x2;
  let KangOneJump = v1;
  let KangTwoJump = v2;
  if (KangTwoStart > KangOneStart && KangTwoJump > KangOneJump) {
    return "NO";
  } else if ((KangTwoStart - KangOneStart) % (KangOneJump - KangTwoJump) === 0) {
    return "YES";
  } else return "NO";
}

function breakingRecords(scores) {
  // Write your code here
  let minScore = scores[0];
  let maxScore = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 1; i < scores.length; i++) {
    const currentScore = scores[i];
    if (currentScore > maxScore) {
      maxScore = currentScore;
      maxCount++;
    } else if (currentScore < minScore) {
      minScore = currentScore;
      minCount++;
    }
  }

  return [maxCount, minCount];
}
