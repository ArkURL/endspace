/**
 * Endspace Theme - Global Styles (JSX)
 * P3R (Persona 3 Reload) / Endfield-inspired aesthetic
 */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

export const Style = () => {
  // P3R 色板配置
  const themeColor = siteConfig('P3_THEME_COLOR', '#00A0E9', CONFIG)
  const themeColorDim = siteConfig('P3_THEME_COLOR_DIM', 'rgba(0, 160, 233, 0.15)', CONFIG)
  const bgSurface = siteConfig('P3_BG_SURFACE', '#050A1A', CONFIG)
  const bgSurfaceElevated = siteConfig('P3_BG_SURFACE_ELEVATED', '#0A1428', CONFIG)
  const colorSecondary = siteConfig('P3_COLOR_SECONDARY', '#003B71', CONFIG)
  const colorSecondaryDim = siteConfig('P3_COLOR_SECONDARY_DIM', 'rgba(0, 59, 113, 0.5)', CONFIG)
  const colorAccent = siteConfig('P3_COLOR_ACCENT', '#78D2F0', CONFIG)
  const colorAccentDim = siteConfig('P3_COLOR_ACCENT_DIM', 'rgba(120, 210, 240, 0.3)', CONFIG)
  const btnBg = siteConfig('P3_BTN_BG', 'rgba(0, 160, 233, 0.3)', CONFIG)
  const glowShadow = siteConfig('P3_GLOW_SHADOW', '0 0 8px rgba(0, 160, 233, 0.6), 0 0 16px rgba(0, 160, 233, 0.3)', CONFIG)

  return (
    <style jsx global>{`
      /* ============================================
         CSS Custom Properties - P3R Theme
         ============================================ */
      :root {
        /* Light Mode (保留作为备用) */
        --p3-bg-base: #fafafa;
        --p3-bg-primary: #ffffff;
        --p3-bg-secondary: #f4f4f5;
        --p3-bg-tertiary: #e4e4e7;
        
        --p3-text-primary: #18181b;
        --p3-text-secondary: #52525b;
        --p3-text-muted: #a1a1aa;
        
        /* P3R 主题色 */
        --p3-accent-yellow: ${themeColor};
        --p3-accent-yellow-dim: ${themeColorDim};
        --p3-accent-cyan: ${colorAccent};
        --p3-accent-cyan-dim: ${colorAccentDim};
        --p3-color-secondary: ${colorSecondary};
        --p3-color-secondary-dim: ${colorSecondaryDim};
        
        /* Borders & Lines */
        --p3-border-base: #e4e4e7;
        --p3-border-active: ${themeColor};
        --p3-grid-color: rgba(0,0,0,0.03);
        
        /* P3R 特效 */
        --p3-btn-glass-bg: ${btnBg};
        --p3-glow-shadow: ${glowShadow};
        
        /* Shadows */
        --p3-shadow-base: 
          0 1px 2px rgba(0, 0, 0, 0.04),
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 4px 8px rgba(0, 0, 0, 0.04);
        --p3-shadow-hover: 
          0 4px 8px rgba(0, 0, 0, 0.08),
          0 8px 16px rgba(0, 0, 0, 0.06),
          0 16px 32px rgba(0, 0, 0, 0.04),
          0 0 0 1px var(--p3-accent-yellow);
      }

      /* Dark Mode - P3R 深蓝风格 */
      .dark {
        --p3-bg-base: ${bgSurface};
        --p3-bg-primary: ${bgSurfaceElevated};
        --p3-bg-secondary: ${colorSecondary};
        --p3-bg-tertiary: ${colorSecondaryDim};
        
        --p3-text-primary: #E8F4FC;
        --p3-text-secondary: ${colorAccent};
        --p3-text-muted: rgba(120, 210, 240, 0.6);
        
        --p3-accent-yellow: ${themeColor};
        --p3-accent-yellow-dim: ${themeColorDim};
        --p3-accent-cyan: ${colorAccent};
        --p3-accent-cyan-dim: ${colorAccentDim};
        --p3-color-secondary: ${colorSecondary};
        --p3-color-secondary-dim: ${colorSecondaryDim};
        
        --p3-border-base: ${colorSecondary};
        --p3-border-active: ${themeColor};
        --p3-grid-color: rgba(0, 160, 233, 0.05);
        
        --p3-btn-glass-bg: ${btnBg};
        --p3-glow-shadow: ${glowShadow};
        
        --p3-shadow-base: 
          0 1px 2px rgba(0, 0, 0, 0.4),
          0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 8px rgba(0, 0, 0, 0.2);
        --p3-shadow-hover: 
          ${glowShadow},
          0 8px 16px rgba(0, 0, 0, 0.4),
          0 16px 32px rgba(0, 0, 0, 0.3);
      }

      /* ============================================
         Viewport Scaling (Responsive Font Size)
         ============================================ */
      html {
        /* CSS fallback for viewport scaling when JS not loaded */
        /* Desktop: scale based on viewport width relative to 1440px base (larger content) */
        font-size: clamp(14px, calc(16px * (100vw / 1440)), 24px);
      }
      
      /* Portrait/Mobile orientation: different scaling base */
      @media (orientation: portrait), (max-width: 767px) {
        html {
          font-size: clamp(14px, calc(16px * (100vw / 390)), 20px);
        }
      }

      /* ============================================
         Global Base Styles
         ============================================ */
      #theme-endspace {
        background-color: var(--p3-bg-base);
        color: var(--p3-text-primary);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        overflow-x: hidden;
        /* Custom Tech Cursor - Sharp Spearhead with Heavy Shadow */
        cursor: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M2 2 L12 28 L16 18 L26 14 L2 2 Z' fill='%2318181b' stroke='%23ffffff' stroke-width='1.5' style='filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.3));'/%3E%3C/svg%3E") 2 2, auto;
      }
      
      #theme-endspace a, #theme-endspace button, #theme-endspace [role="button"], #theme-endspace .cursor-pointer {
        /* Pointer Cursor - Target Reticle Style */
        cursor: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M2 2 L12 28 L16 18 L26 14 L2 2 Z' fill='%2362F0F5' stroke='%23000000' stroke-width='1.5' style='filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.3));'/%3E%3Ccircle cx='24' cy='24' r='4' fill='none' stroke='%2362F0F5' stroke-width='2'/%3E%3C/svg%3E") 2 2, pointer;
      }

      /* Technical Grid Background */
      #theme-endspace::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: 
          linear-gradient(var(--p3-grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--p3-grid-color) 1px, transparent 1px);
        background-size: 40px 40px;
        z-index: -1;
        pointer-events: none;
      }

      /* ============================================
         Typography & Technical Text
         ============================================ */
      .tech-text {
        font-family: 'JetBrains Mono', 'Courier New', monospace;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-weight: 500;
      }
      
      .tech-num {
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1px;
      }

      /* ============================================
         P3R (Persona 3 Reload) 专属样式
         ============================================ */
      
      /* P3R 毛玻璃按钮 - 30% 透明度背景 + backdrop-filter */
      .p3r-btn {
        background: var(--p3-btn-glass-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--p3-border-active);
        box-shadow: var(--p3-glow-shadow);
        color: var(--p3-text-primary);
        padding: 0.75rem 1.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        /* 几何切割感 - 斜角 */
        clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
      }
      
      .p3r-btn:hover {
        background: rgba(0, 160, 233, 0.5);
        box-shadow: 
          0 0 12px rgba(0, 160, 233, 0.8),
          0 0 24px rgba(0, 160, 233, 0.4),
          0 0 48px rgba(0, 160, 233, 0.2);
        transform: translateY(-2px);
      }
      
      .p3r-btn:active {
        transform: translateY(0);
        box-shadow: var(--p3-glow-shadow);
      }
      
      /* P3R 卡片 - 发光边框 + 几何切割 */
      .p3r-card {
        background: var(--p3-bg-primary);
        border: 1px solid var(--p3-border-active);
        box-shadow: var(--p3-glow-shadow);
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        /* 几何切割感 */
        clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
      }
      
      .p3r-card:hover {
        box-shadow: 
          0 0 16px rgba(0, 160, 233, 0.7),
          0 0 32px rgba(0, 160, 233, 0.4),
          0 4px 16px rgba(0, 0, 0, 0.3);
        transform: translateY(-4px);
      }
      
      /* P3R 面板 - 毛玻璃效果 */
      .p3r-panel {
        background: var(--p3-btn-glass-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--p3-color-secondary);
        box-shadow: inset 0 1px 0 rgba(120, 210, 240, 0.1);
      }
      
      /* P3R 发光文字 */
      .p3r-glow-text {
        color: var(--p3-accent-cyan);
        text-shadow: 
          0 0 4px rgba(120, 210, 240, 0.6),
          0 0 8px rgba(120, 210, 240, 0.4),
          0 0 16px rgba(120, 210, 240, 0.2);
      }
      
      /* P3R 扫描线动画 */
      @keyframes p3r-scan {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      
      .p3r-scan-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, 
          transparent, 
          var(--p3-accent-cyan) 20%, 
          var(--p3-border-active) 50%,
          var(--p3-accent-cyan) 80%, 
          transparent
        );
        animation: p3r-scan 4s linear infinite;
        pointer-events: none;
      }
      
      /* P3R 几何装饰角 */
      .p3r-corner::before,
      .p3r-corner::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 2px solid var(--p3-border-active);
        pointer-events: none;
      }
      
      .p3r-corner::before {
        top: -1px;
        left: -1px;
        border-right: none;
        border-bottom: none;
      }
      
      .p3r-corner::after {
        bottom: -1px;
        right: -1px;
        border-left: none;
        border-top: none;
      }

      /* ============================================
         "Float" Container Styles (Glassmorphism -> Solid Block)
         ============================================ */
      .p3-frame {
        background: var(--p3-bg-primary); /* Solid background for floating block effect */
        border: 1px solid var(--p3-border-base);
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
           0 10px 30px -10px rgba(0,0,0,0.1),
           0 4px 6px -2px rgba(0,0,0,0.05); /* Enhanced shadow for lift */
        z-index: 10;
      }

      .dark .p3-frame {
        background: #18181b; /* Solid dark background */
        border-color: #3f3f46;
      }

      /* Corner Markers (Minimalist L-shape) */
      .p3-frame::before {
        content: '';
        position: absolute;
        top: -1px; left: -1px;
        width: 0; height: 0;
        border-top: 3px solid var(--p3-text-primary);
        border-left: 3px solid var(--p3-text-primary);
        transition: all 0.3s ease;
        opacity: 0;
        z-index: 20;
      }
      .p3-frame::after {
        content: '';
        position: absolute;
        bottom: -1px; right: -1px;
        width: 0; height: 0;
        border-bottom: 3px solid var(--p3-text-primary);
        border-right: 3px solid var(--p3-text-primary);
        transition: all 0.3s ease;
        opacity: 0;
        z-index: 20;
      }

      /* Active State: Heavy Corners appear */
      .p3-frame:hover {
        border-color: var(--p3-border-active);
        box-shadow: var(--p3-shadow-hover);
        transform: translateY(-2px);
      }
      .p3-frame:hover::before, .p3-frame:hover::after {
        opacity: 1;
        width: 16px; height: 16px;
      }

      /* ============================================
         Card Styles - Enhanced 3D Depth
         ============================================ */
      .endspace-card {
        background: var(--p3-bg-primary); /* Solid background */
        border: 1px solid var(--p3-border-base);
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: var(--p3-shadow-base);
      }

      .endspace-card:hover {
        border-color: var(--p3-border-active);
        box-shadow: 
          0 20px 25px -5px rgba(0, 0, 0, 0.1), 
          0 10px 10px -5px rgba(0, 0, 0, 0.04),
          0 0 0 1px var(--p3-accent-yellow); /* Glow border */
        transform: translateY(-4px) scale(1.01);
        z-index: 20;
      }
      
      .dark .endspace-card {
         background: #18181b;
      }

      /* ============================================
         Notion Content Overrides (Light Mode)
         ============================================ */
      #notion-article {
        color: var(--p3-text-primary);
        font-size: 1.05rem;
        line-height: 1.75;
      }

      /* Headers - NieR: Automata Style Dynamic Shadow */
      /* Requirement: Misaligned when not hovered, Merged when hovered */
      #notion-article h1, #notion-article h2, #notion-article h3 {
        color: var(--p3-text-primary);
        font-weight: 800;
        margin-top: 2.5em;
        margin-bottom: 1em;
        position: relative;
        padding-left: 1rem;
        letter-spacing: 0.02em; /* Slightly wider spacing for the 'digital' look */
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Snappy tech transition */
        
        /* Default: Distinctly Misaligned / Interlaced Layers */
        /* Layer 1: Cyan Ghost (Top Left) */
        /* Layer 2: Red/Dark Ghost (Bottom Right) */
        text-shadow: 
          -4px -2px 0 rgba(6, 182, 212, 0.5), 
          4px 2px 0 rgba(255, 50, 50, 0.3);
          
        /* Subtle opacity drop to emphasize the 'hologram' feel when idle */
        opacity: 0.85; 
      }
      
      /* Hover: Merge / Snap to focus */
      #notion-article h1:hover, #notion-article h2:hover, #notion-article h3:hover {
        /* Shadows merge into the text */
        text-shadow: 
          0 0 0 rgba(6, 182, 212, 0),
          0 0 0 rgba(255, 50, 50, 0);
        opacity: 1;
        transform: translateX(2px); /* Slight physical shift on 'lock-on' */
      }
      
      .dark #notion-article h1, .dark #notion-article h2, .dark #notion-article h3 {
        /* Dark mode: Stronger, glow-like ghosts */
        text-shadow: 
          -4px -2px 0 rgba(98, 240, 245, 0.5),
          4px 2px 0 rgba(255, 50, 50, 0.4);
      }
      
      .dark #notion-article h1:hover, .dark #notion-article h2:hover, .dark #notion-article h3:hover {
         text-shadow: none;
      }
      
      #notion-article h1::before, 
      #notion-article h2::before,
      #notion-article h3::before {
        content: '';
        position: absolute;
        left: 0; top: 0.2em; bottom: 0.2em;
        width: 6px;
        background: var(--p3-accent-yellow);
        box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      
      /* Bar also reacts to hover */
      #notion-article h1:hover::before,
      #notion-article h2:hover::before,
      #notion-article h3:hover::before {
        background: var(--p3-text-primary);
        width: 8px;
        box-shadow: none;
      }

      /* Quotes */
      #notion-article blockquote {
        background: var(--p3-bg-secondary);
        border-left: 3px solid var(--p3-text-primary);
        color: var(--p3-text-secondary);
        padding: 1.2rem 1.5rem;
        margin: 2rem 0;
        font-style: italic;
      }

      /* Lists */
      #notion-article ul li, #notion-article ol li {
        margin-bottom: 0.5em;
        color: var(--p3-text-secondary);
      }
      #notion-article ul li::marker {
        color: var(--p3-accent-cyan);
        font-weight: bold;
      }

      /* Links in Content */
      #notion-article a {
        color: var(--p3-text-primary);
        text-decoration: none;
        border-bottom: 2px solid var(--p3-accent-cyan-dim);
        transition: all 0.2s;
        font-weight: 600;
      }
      #notion-article a:hover {
        background: var(--p3-accent-cyan-dim);
        border-bottom-color: var(--p3-accent-cyan);
      }

      /* Code Blocks */
      #notion-article pre {
        background: #18181b !important;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 4px !important;
        box-shadow: var(--p3-shadow-base);
      }

      /* ============================================
         Buttons (Cut Corner Aesthetic)
         ============================================ */
      .endspace-btn {
        background: transparent;
        border: 2px solid var(--p3-border-active);
        color: var(--p3-text-primary);
        padding: 0.6rem 1.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.2s;
      }
      
      .endspace-btn:hover {
        background: var(--p3-border-active);
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      .endspace-button-primary {
        background: var(--p3-border-active);
        border: none;
        color: white;
        padding: 0.75rem 1.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        transition: all 0.2s;
      }

      .endspace-button-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      /* ============================================
         Tech Decorations Utilities (Minimalist)
         ============================================ */
      .scan-line {
        width: 100%;
        height: 1px;
        background: var(--p3-border-base);
        margin: 1rem 0;
      }

      /* Spectrum bar decoration */
      .spectrum-bar {
        height: 2px;
        background: linear-gradient(90deg, 
          var(--p3-accent-cyan) 0%, 
          var(--p3-accent-yellow) 50%, 
          var(--p3-accent-cyan) 100%
        );
      }

      /* Loading Animation (Spinner) */
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .loading-radar {
        width: 24px; height: 24px;
        border: 2px solid var(--p3-border-base);
        border-top-color: var(--p3-text-primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      /* Tech corner decoration */
      .tech-corner {
        position: relative;
      }
      .tech-corner::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 8px; height: 8px;
        border-top: 2px solid var(--p3-accent-cyan);
        border-left: 2px solid var(--p3-accent-cyan);
      }
      .tech-corner::after {
        content: '';
        position: absolute;
        bottom: 0; right: 0;
        width: 8px; height: 8px;
        border-bottom: 2px solid var(--p3-accent-cyan);
        border-right: 2px solid var(--p3-accent-cyan);
      }

      /* ============================================
         Mobile Responsive Styles
         ============================================ */
      
      /* Safe area support for notched devices */
      .safe-area-bottom {
        padding-bottom: env(safe-area-inset-bottom);
      }
      .safe-area-top {
        padding-top: env(safe-area-inset-top);
      }

      /* Mobile-specific adjustments */
      @media (max-width: 767px) {
        /* Smaller grid on mobile */
        #theme-endspace::before {
          background-size: 30px 30px;
        }

        /* Reduce padding on mobile */
        .p3-frame {
          padding: 1rem !important;
        }

        /* Smaller technical text */
        .tech-text {
          font-size: 0.75rem;
          letter-spacing: 0.3px;
        }

        /* Ensure minimum touch targets */
        button, a, [role="button"] {
          min-height: 44px;
        }

        /* Notion content adjustments */
        #notion-article {
          font-size: 1.1rem;
          line-height: 1.75;
        }

        #notion-article p {
          margin-bottom: 1.25em;
        }
      }

      /* ============================================
         Player Styles
         ============================================ */
      .endspace-player-glow {
        box-shadow: 0 0 10px var(--p3-accent-yellow);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .endspace-player-rotating {
        animation: rotate 8s linear infinite;
      }

      /* ============================================
         Scan Line & HUD Animations
         ============================================ */
      
      /* Horizontal Scan Line */
      @keyframes ef-scan-horizontal {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      
      .ef-scan-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, 
          transparent, 
          var(--p3-accent-cyan) 20%, 
          var(--p3-accent-cyan) 80%, 
          transparent
        );
        animation: ef-scan-horizontal 4s linear infinite;
        pointer-events: none;
        opacity: 0.5;
      }
      
      /* Vertical Scan Line */
      @keyframes ef-scan-vertical {
        0% { transform: translateX(-100%); opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { transform: translateX(100vw); opacity: 0; }
      }

      .ef-scan-line-v {
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(180deg, 
          transparent, 
          var(--p3-accent-cyan) 30%, 
          var(--p3-accent-cyan) 70%, 
          transparent
        );
        animation: ef-scan-vertical 6s linear infinite;
        pointer-events: none;
        opacity: 0.3;
      }

      /* Pulse Glow Animation */
      @keyframes ef-pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        50% { 
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3);
        }
      }
      
      .ef-pulse-glow {
        animation: ef-pulse-glow 3s ease-in-out infinite;
      }

      /* ============================================
         Endfield Button Styles
         ============================================ */
      
      /* Button with Left Highlight Bar */
      .ef-button {
        position: relative;
        background: var(--p3-bg-primary);
        border: 1px solid var(--p3-border-base);
        padding: 0.75rem 1.5rem 0.75rem 2rem;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.2s ease;
      }
      
      .ef-button::before {
        content: '';
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 55%;
        background-color: var(--p3-accent-yellow);
        transition: all 0.2s ease;
      }
      
      .ef-button:hover {
        background: var(--p3-border-active);
        color: white;
        border-color: var(--p3-border-active);
      }
      
      .ef-button:hover::before {
        height: 70%;
        background-color: var(--p3-accent-yellow);
      }

      /* ============================================
         Card Enhancement Styles
         ============================================ */
      
      /* Enhanced Card with texture */
      .ef-card {
        position: relative;
        background: var(--p3-bg-primary);
        border: 1px solid var(--p3-border-base);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .ef-card:hover {
        border-color: var(--p3-accent-yellow);
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
        transform: translateY(-2px);
      }

      /* Index Number Badge - Industrial Style */
      .ef-index-badge {
        position: absolute;
        top: -1px;
        left: -1px;
        padding: 0.25rem 0.5rem;
        background: var(--p3-accent-yellow);
        color: #000;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      /* ============================================
         HUD Corner Decorations
         ============================================ */
      
      .ef-hud-corners {
        position: relative;
      }
      
      /* Top Left HUD */
      .ef-hud-tl::before {
        content: '';
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: 3rem;
        height: 3rem;
        border-top: 2px solid rgba(6, 182, 212, 0.4);
        border-left: 2px solid rgba(6, 182, 212, 0.4);
        pointer-events: none;
        z-index: 50;
      }
      
      /* Bottom Right HUD */
      .ef-hud-br::after {
        content: '';
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
        border-bottom: 2px solid rgba(6, 182, 212, 0.4);
        border-right: 2px solid rgba(6, 182, 212, 0.4);
        pointer-events: none;
        z-index: 50;
      }

      /* ============================================
         Glowing Border Animation
         ============================================ */
      
      @keyframes ef-border-glow {
        0%, 100% { 
          border-color: var(--p3-border-base);
          box-shadow: none;
        }
        50% { 
          border-color: var(--p3-accent-cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
      }
      
      .ef-glow-border:hover {
        animation: ef-border-glow 2s ease-in-out infinite;
      }

      /* ============================================
         NieR: Automata Style Title (Reusable)
         ============================================ */
      .nier-title {
        position: relative;
        font-weight: 800;
        letter-spacing: 0.05em;
        text-shadow: 
          2px 2px 0 rgba(98, 240, 245, 0.35),
          4px 4px 0 rgba(98, 240, 245, 0.18),
          6px 6px 10px rgba(0, 0, 0, 0.15);
      }
      
      .dark .nier-title {
        text-shadow: 
          2px 2px 0 rgba(98, 240, 245, 0.45),
          4px 4px 0 rgba(98, 240, 245, 0.25),
          6px 6px 15px rgba(0, 0, 0, 0.6);
      }

      /* ============================================
         3D Button Effects
         ============================================ */
      .endspace-btn-3d {
        position: relative;
        background: var(--p3-bg-primary);
        border: 2px solid var(--p3-accent-yellow);
        color: var(--p3-text-primary);
        padding: 0.75rem 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
          0 4px 0 rgba(98, 240, 245, 0.6),
          0 6px 12px rgba(0, 0, 0, 0.15);
      }
      
      .endspace-btn-3d:hover {
        transform: translateY(-2px);
        box-shadow: 
          0 6px 0 rgba(98, 240, 245, 0.7),
          0 10px 20px rgba(0, 0, 0, 0.2);
      }
      
      .endspace-btn-3d:active {
        transform: translateY(2px);
        box-shadow: 
          0 2px 0 rgba(98, 240, 245, 0.5),
          0 3px 6px rgba(0, 0, 0, 0.1);
      }

      /* ============================================
         Sidebar & Navigation 3D Depth
         ============================================ */
      .endspace-sidebar-3d {
        box-shadow: 
          4px 0 8px rgba(0, 0, 0, 0.05),
          8px 0 16px rgba(0, 0, 0, 0.03);
      }
      
      .dark .endspace-sidebar-3d {
        box-shadow: 
          4px 0 8px rgba(0, 0, 0, 0.3),
          8px 0 16px rgba(0, 0, 0, 0.2);
      }
      /* ============================================
         NieR: Automata Style Navigation Transition
         ============================================ */
      /* ============================================
         NieR: Automata Style Navigation Transition
         ============================================ */
      .nier-nav-item {
        position: relative;
        overflow: hidden;
        transition: color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1;
        /* Default Text Color */
        color: var(--p3-text-muted); 
        border-radius: 1px; /* Rounded corners as seen in screenshot */
        margin-bottom: 2px; /* Slight spacing between items */
      }

      /* Sliding Background Layer */
      .nier-nav-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: #E0E0E0; /* Hover: Darker Grey */
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: -1;
      }
      
      /* Active / Hover State Text Color */
      .nier-nav-item:hover, .nier-nav-item.active {
        color: var(--p3-text-primary) !important;
      }
      
      /* Hover State: Slide to full width */
      .nier-nav-item:hover::before {
        width: 100%;
      }

      /* Active State: Always full width with Distinct Color */
      .nier-nav-item.active::before {
        width: 100%;
        background: #EBEBEB; /* Active: Lighter Grey */
      }
      
      /* Target the icon specifically if needed to ensure color fill */
      .nier-nav-item svg, .nier-nav-item .icon-container {
        transition: color 0.3s ease;
        z-index: 2;
      }
      
      /* Removed specific active override to keep consistent grey background */
      
      /* Also update the base hover/active shared rule to use this darker grey */
      
      .dark .nier-nav-item::before {
        background: #f4f4f5; /* Light bg in dark mode */
      }
      .dark .nier-nav-item:hover, .dark .nier-nav-item.active {
        color: #fafafa !important; /* Dark text in dark mode */
      }

      /* ============================================
         Endfield Category Button Styles
         ============================================ */
      /* ============================================
         Endfield Unified Button Styles
         ============================================ */
      /* ============================================
         Endfield Unified Button Styles (High Priority)
         ============================================ */
      .ef-btn {
        display: inline-flex !important;
        align-items: center;
        gap: 0.75rem; /* Space between indicator and text */
        padding: 0.5rem 1rem 0.5rem 0.75rem;
        background-color: #3F3F46 !important; /* Normal: Dark Grey matching screenshot */
        border-radius: 1px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: fit-content;
        min-width: min-content;
        border: 1px solid transparent; 
        text-decoration: none !important; /* Remove default link underline */
        position: relative;
        z-index: 10;
      }
      
      .ef-btn:hover {
        background-color: #27272A !important; /* Hover: Darker Grey */
        border-radius: 3px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }
      
      /* Indicator Element */
      .ef-btn-indicator {
        display: block;
        width: 4px;
        height: 18px;
        background-color: var(--p3-accent-yellow); /* 主题色 */
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); /* Rectangle */
      }
      
      .ef-btn:hover .ef-btn-indicator {
        width: 12px;
        height: 12px;
        background-color: var(--p3-accent-yellow);
        clip-path: polygon(0 0, 100% 50%, 0 100%); /* Triangle */
      }
      
      /* Text Styles */
      .ef-btn-text {
        color: #e4e4e7 !important;
        font-weight: 600;
        font-size: 0.95rem;
        letter-spacing: 0.05em;
        white-space: nowrap;
        transition: color 0.3s ease;
      }
      
      .ef-btn:hover .ef-btn-text {
        color: #ffffff !important;
      }
    `}</style>
  )
}
