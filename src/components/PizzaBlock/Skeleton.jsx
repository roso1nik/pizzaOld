import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="250" y="112" rx="0" ry="0" width="17" height="0" /> 
    <rect x="89" y="113" rx="0" ry="0" width="28" height="0" /> 
    <rect x="24" y="76" rx="0" ry="0" width="31" height="0" /> 
    <rect x="100" y="87" rx="0" ry="0" width="24" height="0" /> 
    <circle cx="140" cy="120" r="100" /> 
    <rect x="0" y="280" rx="0" ry="0" width="280" height="20" /> 
    <rect x="0" y="310" rx="0" ry="0" width="280" height="20" /> 
    <rect x="0" y="360" rx="0" ry="0" width="100" height="20" /> 
    <rect x="130" y="360" rx="0" ry="0" width="150" height="20" /> 
    <rect x="50" y="240" rx="10" ry="10" width="180" height="15" />
  </ContentLoader>
)

export default Skeleton;