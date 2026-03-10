import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

export default function ArticleCopyright({ post }) {
  const router = useRouter()
  const [path, setPath] = useState(siteConfig('LINK') + router.asPath)
  
  useEffect(() => {
    setPath(window.location.href)
  }, [])

  const { locale } = useGlobal()

  // 检查是否隐藏版权声明
  if (post?.copyright === 'Hide' || post?.copyright === 'None') {
    return null
  }

  // 获取声明协议类型，为空则默认使用 CC BY-NC-SA 4.0
  const copyrightType = post?.copyright || 'CC BY-NC-SA 4.0'
  const copyrightNotice = copyrightType === 'CC BY-NC-SA 4.0' 
    ? '如无特别声明，本文采用 CC BY-NC-SA 4.0 许可协议，转载请注明出处。' 
    : `本文采用 ${copyrightType} 许可协议。`

  return (
    <section className="mt-8 relative overflow-hidden rounded-xl">
      {/* 现代通透毛玻璃背景和自适应边框 */}
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-[#0A1428]/30 backdrop-blur-md border border-gray-200/50 dark:border-[var(--p3-border-base)]/50 transition-colors duration-300"></div>
      
      {/* 增强型左侧高亮边饰带（增加渐变与霓虹发光） */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--p3-theme-color)] to-[var(--p3-color-accent)] glow-primary opacity-80"></div>
      
      {/* 内容区域 */}
      <div className="relative z-10 p-5 pl-6 space-y-3 text-sm text-gray-600 dark:text-[var(--p3-text-secondary)] transition-colors duration-300">
        
        <div className="flex items-start">
          <strong className="w-20 shrink-0 font-bold text-gray-800 dark:text-[var(--p3-text-primary)]">{locale.COMMON.AUTHOR}:</strong>
          <SmartLink href="/aboutme" className="hover:text-[var(--p3-theme-color)] transition-colors duration-300 dark:hover:text-[var(--p3-color-accent)]">
            {siteConfig('AUTHOR')}
          </SmartLink>
        </div>
        
        <div className="flex items-start">
          <strong className="w-20 shrink-0 font-bold text-gray-800 dark:text-[var(--p3-text-primary)]">{locale.COMMON.URL}:</strong>
          <a
            className="break-all hover:text-[var(--p3-theme-color)] transition-colors duration-300 dark:hover:text-[var(--p3-color-accent)] underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4"
            href={path}
          >
            {path}
          </a>
        </div>
        
        <div className="flex items-start">
          <strong className="w-20 shrink-0 font-bold text-gray-800 dark:text-[var(--p3-text-primary)]">{locale.COMMON.COPYRIGHT}:</strong>
          <span className="leading-relaxed">{copyrightNotice}</span>
        </div>
      </div>
    </section>
  )
}
