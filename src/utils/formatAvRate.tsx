import { SVGProps } from 'react'
export default function formatAvRate(rateNum: number): JSX.Element[] | '' {
  let maxStars = 5

  if (!rateNum) {
    return ''
  }

  const copyNum = rateNum
  const intPartNum = Math.trunc(copyNum)
  const decPartNum = Number((copyNum - intPartNum).toFixed(2))
  const percent = decPartNum * 100
  const resArr: JSX.Element[] = []

  for (let i = intPartNum; i > 0; i--) {
    resArr.push(
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
          fill="#F2C94C"
        />
      </svg>
    )
  }
  if (intPartNum < maxStars) {
    resArr.push(
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="half">
            <rect x="0" y="0" width="12" height="12" fill="white" />
            <rect x={percent + '%'} y="0" width="12" height="12" fill="red" />
          </mask>
        </defs>
        <path
          d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
          fill="#F2C94C"
          mask="url(#half)"
        />
      </svg>
    )
  } else if (intPartNum < maxStars - 1) {
    for (let i = maxStars - 1 - intPartNum; i > 0; i--) {
      resArr.push(
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
            fill="#EEEDF5"
          />
        </svg>
      )
    }
  }
  return resArr
}
