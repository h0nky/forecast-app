import { FC } from "react";

export const SunIcon: FC<{ width: string }> = ({ width }) => (
  <svg fill="#FFC700" width={width} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve">
    <path d="M12,19.5c-4.135,0-7.5-3.365-7.5-7.5S7.865,4.5,12,4.5s7.5,3.365,7.5,7.5S16.135,19.5,12,19.5z M12,6c-3.308,0-6,2.692-6,6
      s2.692,6,6,6s6-2.692,6-6S15.308,6,12,6z"/>
    <path d="M12,3c-0.414,0-0.75-0.336-0.75-0.75v-1.5C11.25,0.336,11.586,0,12,0s0.75,0.336,0.75,0.75v1.5C12.75,2.664,12.414,3,12,3z
      "/>
    <path d="M18.894,5.856c-0.2,0-0.389-0.078-0.53-0.22c-0.142-0.142-0.22-0.33-0.22-0.53c0-0.2,0.078-0.389,0.22-0.53l1.061-1.061
      c0.142-0.142,0.33-0.22,0.53-0.22s0.389,0.078,0.53,0.22c0.142,0.142,0.22,0.33,0.22,0.53c0,0.2-0.078,0.389-0.22,0.53
      l-1.061,1.061C19.283,5.778,19.094,5.856,18.894,5.856z"/>
    <path d="M21.75,12.75C21.336,12.75,21,12.414,21,12s0.336-0.75,0.75-0.75h1.5c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75
      H21.75z"/>
    <path d="M19.955,20.705c-0.2,0-0.389-0.078-0.53-0.22l-1.061-1.061c-0.292-0.292-0.292-0.768,0-1.061
      c0.142-0.142,0.33-0.22,0.53-0.22s0.389,0.078,0.53,0.22l1.061,1.061c0.292,0.292,0.292,0.768,0,1.061
      C20.344,20.627,20.155,20.705,19.955,20.705z"/>
    <path d="M12,24c-0.414,0-0.75-0.336-0.75-0.75v-1.5c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v1.5
      C12.75,23.664,12.414,24,12,24z"/>
    <path d="M4.045,20.705c-0.2,0-0.389-0.078-0.53-0.22c-0.142-0.142-0.22-0.33-0.22-0.53s0.078-0.389,0.22-0.53l1.061-1.061
      c0.141-0.142,0.33-0.22,0.53-0.22s0.389,0.078,0.53,0.22c0.292,0.292,0.292,0.768,0,1.061l-1.061,1.061
      C4.434,20.627,4.246,20.705,4.045,20.705z"/>
    <path d="M0.75,12.75C0.336,12.75,0,12.414,0,12s0.336-0.75,0.75-0.75h1.5C2.664,11.25,3,11.586,3,12s-0.336,0.75-0.75,0.75H0.75z"
      />
    <path d="M5.106,5.856c-0.2,0-0.389-0.078-0.53-0.22L3.515,4.575c-0.142-0.141-0.22-0.33-0.22-0.53s0.078-0.389,0.22-0.53
      c0.141-0.142,0.33-0.22,0.53-0.22s0.389,0.078,0.53,0.22l1.061,1.061c0.142,0.141,0.22,0.33,0.22,0.53s-0.078,0.389-0.22,0.53
      C5.495,5.778,5.306,5.856,5.106,5.856z"/>
  </svg>
);

export const CloudIcon: FC<{ width: string }> = ({ width }) => (
  <svg width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g clipPath="url(#a)">
      <path
        d="m9.75 21.75c-.674 0-1.346-.153-1.949-.442-2.235-1.072-3.182-3.761-2.11-5.997.743-1.55 2.337-2.552 4.059-2.552.37 0 .736.045 1.093.136.902-2.754 3.486-4.646 6.414-4.646 1.811.002 3.505.706 4.779 1.983 1.273 1.277 1.974 2.972 1.971 4.775-.004 3.718-3.032 6.742-6.75 6.742zm7.518-1.5c2.88 0 5.236-2.353 5.239-5.244.002-1.402-.543-2.721-1.533-3.714s-2.308-1.54-3.711-1.542c-2.524 0-4.693 1.795-5.164 4.268 0 0-.003.016-.005.022-.061.305-.094.634-.095.961 0 .214.014.433.04.647.005.04.007.071.007.102 0 .377-.282.697-.656.744-.032.004-.063.006-.094.006-.377 0-.696-.282-.744-.656-.034-.279-.052-.563-.052-.844.001-.211.012-.422.033-.631-.259-.072-.521-.109-.783-.109-1.149 0-2.211.667-2.706 1.7-.714 1.489-.083 3.281 1.406 3.996.381.183.833.284 1.308.294h7.495z"
        fill="#999"
      />
      <path
        d="m4.5 13.734c-.255 0-.489-.127-.628-.34-.423-.647-.697-1.382-.803-2.144h-2.319c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.327c.015-.107.032-.207.053-.305.157-.75.479-1.459.936-2.069l-1.649-1.649c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.651 1.651c.092-.07.18-.132.268-.19.637-.416 1.358-.689 2.104-.8v-2.328c0-.414.336-.75.75-.75s.75.336.75.75v2.327c.122.016.235.035.345.058.74.155 1.44.47 2.044.916l1.634-1.634c.142-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-1.63 1.63c.078.1.146.197.21.294.046.071.091.143.134.217.101.173.129.375.078.569s-.174.356-.347.457c-.114.067-.245.103-.378.103-.266 0-.514-.142-.648-.371-.031-.052-.062-.104-.096-.155-.548-.839-1.389-1.414-2.37-1.619-.256-.053-.517-.08-.777-.08-.724 0-1.43.211-2.043.612-.839.548-1.414 1.389-1.619 2.37-.206.98-.017 1.982.531 2.821.109.168.147.368.106.564s-.156.364-.324.474c-.122.079-.264.121-.41.121z"
        fill="#ffc700"
      />
    </g>
  </svg>
);