/**
 * Endspace Theme - Endfield Style Configuration
 * 重要配置项，默认值均为当前效果
 * 
 * ============================================
 * 特殊页面配置说明 (Special Pages)
 * ============================================
 * 
 * 以下页面需要在 Notion 中配置菜单(Menu)：
 * - 【AboutMe 关于我页面】- 点击侧边栏头像跳转
 * - 【Portfolio 作品集页面】- 侧边栏导航项
 * - 【Friends 友链页面】- 侧边栏导航项
 * 
 * 配置步骤：
 * 1. 在 Notion 的菜单数据库中添加一个新条目
 * 2. 设置 Type 为 Menu
 * 3. 设置 Title 为你想要的菜单名称
 * 4. 设置 Slug 为对应的路径
 * 5. 在 Notion 中创建对应的页面内容
 * 具体可参考NotionNext的帮助手册：https://docs.tangly1024.com/article/notion-next-secondary-menu
 * 
 * 示例配置：
 * | Type | Title     | Slug       |
 * |------|-----------|------------|
 * | Menu | AboutMe   | /aboutme   |
 * | Menu | Portfolio | /portfolio |
 * | Menu | Friends   | /friends   |
 * 
 * 配置完成后，Portfolio 和 Friends 会自动出现在侧边栏导航中。
 */

const CONFIG = {
  // ============================================
  // 主题色配置 - P3R (Persona 3 Reload) 风格
  // ============================================
  // 主色 (Primary) - 用于高亮、交互、按钮边框
  P3_THEME_COLOR: '#00A0E9',
  P3_THEME_COLOR_DIM: 'rgba(0, 160, 233, 0.15)',

  // 背景色 (Surface) - 深色背景
  P3_BG_SURFACE: '#050A1A',
  P3_BG_SURFACE_ELEVATED: '#0A1428', // 卡片/浮层背景

  // 次级色 (Secondary) - 用于层级区分
  P3_COLOR_SECONDARY: '#003B71',
  P3_COLOR_SECONDARY_DIM: 'rgba(0, 59, 113, 0.5)',

  // 高亮色 (Accent) - 用于光效、发光装饰
  P3_COLOR_ACCENT: '#78D2F0',
  P3_COLOR_ACCENT_DIM: 'rgba(120, 210, 240, 0.3)',

  // 按钮毛玻璃背景 (Primary 30% 透明度)
  P3_BTN_BG: 'rgba(0, 160, 233, 0.3)',

  // 发光边框阴影
  P3_GLOW_SHADOW: '0 0 8px rgba(0, 160, 233, 0.6), 0 0 16px rgba(0, 160, 233, 0.3)',

  // ============================================
  // 加载动画 (Loading Animation)
  // ============================================
  P3_LOADING_COVER: true, // 是否显示加载动画

  // 加载动画显示的站点名称 (右侧竖排大字)
  P3_LOADING_SITE_NAME: 'SAILINGROOT_SPACE', // 站点名称，显示在加载动画右侧

  // 加载进度文字 (不同阶段)
  P3_LOADING_TEXT_INIT: 'INITIALIZING', // 初始化阶段显示的文字
  P3_LOADING_TEXT_LOADING: 'LOADING', // 加载阶段显示的文字
  P3_LOADING_TEXT_COMPLETE: 'READY', // 加载完成阶段显示的文字
  P3_LOADING_TEXT_SWEEPING: 'LAUNCHING', // 扫描阶段显示的文字
  P3_LOADING_TEXT_FADEOUT: 'WELCOME', // 淡出阶段显示的文字

  // 加载动画中的图片，可以使用public目录下的图片如'/images/logo.png'，也可以使用url如https://example.com/image.png
  P3_LOADING_IMAGE: '/avatar.png', // 加载动画中显示的图片

  // ============================================
  // 水印文字配置 (Watermark Text)
  // ============================================
  // 首页标题栏背景滚动水印文字（大字循环动画）
  P3_BANNER_WATERMARK_TEXT: 'SAILINGROOT_SPACE',
  // 文章详情页右上角水印文字
  P3_ARTICLE_WATERMARK_TEXT: 'SAILINGROOT',

  // ============================================
  // 菜单配置 (Menu)
  // ============================================
  P3_MENU_CATEGORY: true, // 显示分类菜单
  P3_MENU_TAG: true, // 显示标签菜单
  P3_MENU_ARCHIVE: true, // 显示归档菜单
  P3_MENU_SEARCH: true, // 显示搜索菜单

  // ============================================
  // 文章列表 (Post List)
  // ============================================
  P3_POST_LIST_COVER: true, // 文章列表是否显示封面图
  P3_POST_LIST_PREVIEW: true, // 文章列表是否显示摘要预览

  // ============================================
  // 文章详情页 (Article Page)
  // ============================================
  P3_ARTICLE_LAYOUT_VERTICAL: false, // 文章页是否使用垂直布局
  P3_ARTICLE_ADJACENT: true // 是否显示上一篇/下一篇文章导航
}
export default CONFIG
