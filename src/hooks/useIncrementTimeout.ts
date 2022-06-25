import React, { useEffect, useRef, useState } from 'react'

interface props {
  endCount: number
  endTime?: number
  slowRate?: number
  initCount?: number
  initInterval?: number
}

const useIncrementTimeout = ({
  endCount,
  endTime = 2000,
  slowRate = 1.04,
  initCount = 0,
  initInterval = 4,
}: props) => {
  if (initInterval >= endTime) {
    throw new Error(
      'Error on useIncrementTimeout, initInterval 은 endTime 보다 클 수 없습니다. ',
    )
  }

  if (initInterval < 1) {
    throw new Error(
      'Error on userIncrementTimeout, initInterval 은 1보다 커야 합니다.',
    )
  }

  const [count, setCount] = useState(initCount)
  const [interval, setInterval] = useState(initInterval)

  const leftTime = useRef(endTime)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      const nextCount = getNextCount({
        interval,
        leftTime: leftTime.current,
        previousCount: count,
        endCount: endCount,
        slowRate,
      })

      const nextInterval = slowRate * interval
      setCount(nextCount)
      setInterval(nextInterval)
      leftTime.current -= nextInterval
    }, interval)

    setTimeout(() => {
      if (timeoutId.current) clearTimeout(timeoutId.current)
    }, endTime)
  }, [count, endCount, endTime, slowRate, interval])

  return count
}

export default useIncrementTimeout

interface GetIncrementTerm {
  interval: number
  leftTime: number
  previousCount: number
  endCount: number
  slowRate: number
}

function getNextCount({
  interval,
  leftTime,
  previousCount,
  endCount,
  slowRate,
}: GetIncrementTerm) {
  const leftCount = endCount - previousCount
  const increment = leftCount * (interval / leftTime)
  const nextCount = previousCount + increment

  console.log(leftTime)

  if (leftTime - interval - interval * slowRate <= 0) return endCount
  if (nextCount >= endCount) return endCount
  if (nextCount < endCount && leftTime - interval <= 0) return endCount
  return Math.round(increment) + previousCount
}
