// import { siteConfig } from '@/lib/config'
import { IconClock, IconRefresh, IconFolder, IconFileText } from '@tabler/icons-react'

/**
 * PostMeta Component - Minimalist Light Industrial
 * Minimalist/futuristic metadata display
 * No redundant labels ("DATE:", etc.), just pure data and icons.
 * Tabler Icons for Futuristic Feel
 */
export const PostMeta = ({ post }) => {
  if (!post) return null

  return (
    <div className="mb-10 w-full">
      {/* Header Block */}
      <div className="mb-6 relative">
        {/* Top Identification Line */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono text-[var(--p3-text-muted)] border-b border-[var(--p3-border-base)] pb-2">
            <span className="font-bold text-[var(--p3-text-primary)]">DOC_ID // {post.id?.slice(0,6) || 'UNKNOWN'}</span>
            <span className="flex-1" />
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                ONLINE
            </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-[var(--p3-text-primary)] mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Data Grid - Borderless, clean negative space */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-mono text-[var(--p3-text-secondary)]">
            
            {/* Date */}
            <div className="flex items-center gap-2">
                <IconClock size={14} stroke={1.5} className="text-[var(--p3-text-muted)]" />
                <span>{post.publishDay}</span>
            </div>

            {/* Last Update Time */}
            {post.lastEditedDay && post.lastEditedDay !== post.publishDay && (
                <div className="flex items-center gap-2">
                    <IconRefresh size={14} stroke={1.5} className="text-[var(--p3-text-muted)]" />
                    <span>UPDATED: {post.lastEditedDay}</span>
                </div>
            )}

            {/* Category */}
            {post.category && (
                <div className="flex items-center gap-2">
                    <IconFolder size={14} stroke={1.5} className="text-[var(--p3-text-muted)]" />
                    <span className="font-bold text-[var(--p3-text-primary)]">{post.category.toUpperCase()}</span>
                </div>
            )}

            {/* Reading Time / Count */}
            <div className="flex items-center gap-2">
                <IconFileText size={14} stroke={1.5} className="text-[var(--p3-text-muted)]" />
                <span>{post.wordCount || '-'} CHARS</span>
            </div>

            {/* Tags - Minimalist Pills */}
            {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 ml-auto">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-[var(--p3-bg-secondary)] text-[var(--p3-text-secondary)] text-xs rounded hover:bg-[var(--p3-text-primary)] hover:text-white transition-colors cursor-pointer">
                            #{tag.toUpperCase()}
                        </span>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  )
}
