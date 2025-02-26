import cn from 'classnames'

import styles from './background.module.css'

function Background() {
  return (
    <div className="absolute inset-0">
      <div className="relative xl:static isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-black/10 [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)] dark:stroke-white/10 dark:[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg
            x="50%"
            y={-1}
            className="overflow-visible fill-neutral-200/20 dark:fill-neutral-800/20"
          >
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
      </div>
      
      <div className="absolute inset-0 inline-flex flex-row justify-center lg:gap-14">
        <div className={cn(
          styles.bg1,
          'w-[85px] h-[300px] sm:w-[100px] sm:h-[300px] lg:w-[150px] lg:3-[400px] xl:w-[200px] xl:h-[400px] relative rounded-full bg-[#C4AC68] opacity-70 blur-[90px] lg:blur-[100px]'
        )}>
        </div>

        <div className={cn(
          styles.bg2,
          'w-[85px] h-[300px] sm:w-[100px] sm:h-[300px] lg:w-[150px] lg:h-[400px] xl:w-[300px] xl:h-[400px] relative rounded-full bg-[#ecdaa9] opacity-70 blur-[90px] lg:blur-[100px]'
        )}>
        </div>

        <div className={cn(
          styles.bg1,
          'w-[85px] h-[300px] sm:w-[100px] sm:h-[300px] lg:w-[150px] lg:h-[400px] xl:w-[200px] xl:h-[400px] relative rounded-full bg-[#ede5d0] opacity-70 blur-[90px] lg:blur-[100px]'
        )}>
        </div>
      </div>
    </div>
  )
}

export default function LandingBackground() {
  return (
    <Background />
  )
}