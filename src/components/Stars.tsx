import {FC} from "react"
import Star from "./Star.tsx"

interface StarsProps {
    count: number
}

const Stars: FC<StarsProps> = (props) => {
  const { count } = props;

  if (!Number.isFinite(count) || count < 1 || count > 5) {
    return;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill(0).map((_, i) => <Star key={i} />)}
    </ul>
  )
}

export default Stars;