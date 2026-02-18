import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { parse, generate } from 'css-tree'

function parseStyle(style) {
  const rulesSet = []
  const ast = parse(style)

  ast.children.forEach(node => {
    if (node.type === 'Rule'
        && node.prelude
        && node.prelude.type === 'SelectorList'
        && node.prelude.children) {
      node.prelude.children.forEach(selector => {
        if (selector.children
            && selector.children.getSize() > 1
            && selector.children.first().type === 'ClassSelector'
            && selector.children.first().name.startsWith('page-')) {
          const pageClass = selector.children.shift().data
          const found = pageClass.name.match(/page-(\d+)/)
          if (found && found.length > 1) {
            const idx = parseInt(found[1])
            const rules = rulesSet[idx]
            if (rules) {
              rules.push(generate(node))
            } else {
              rulesSet[idx] = [generate(node)]
            }
          }
        }
      })
    }
  })

  return rulesSet.map(rules => rules ? rules.join('\n') : null)
}

async function loadContent(url) {
  if (!url) return []
  const res = await fetch(url)
  const text = await res.text()
  return text.split(/[\n\r]-{4,}[\n\r]/m)
}

async function loadStyle(url) {
  if (!url) return []
  const res = await fetch(url)
  const text = await res.text()
  return parseStyle(text)
}

export const useStore = create(
  persist(
    (set, get) => ({
      pages: [{ content: '', style: '' }],
      current: 0,

      updatePage: (page) => set(state => ({
        pages: state.pages.map((p, i) =>
          i === state.current ? { ...p, ...page } : p
        ),
      })),

      addPage: () => set(state => ({
        pages: [...state.pages, { content: '', style: '' }],
      })),

      selectPage: (index) => set({ current: index }),

      goToNext: () => set(state => {
        if (state.current < state.pages.length - 1) {
          return { current: state.current + 1 }
        }
        return {}
      }),

      goToPrev: () => set(state => {
        if (state.current > 0) {
          return { current: state.current - 1 }
        }
        return {}
      }),

      deleteAllSlides: () => set({
        pages: [{ content: '', style: '' }],
        current: 0,
      }),

      setEntirePages: (pages, current) => set({ pages, current }),

      loadSlide: async (contentUrl, styleUrl) => {
        const [contents, styles] = await Promise.all([
          loadContent(contentUrl),
          loadStyle(styleUrl),
        ])
        const len = Math.max(contents.length, styles.length)
        const pages = Array.from({ length: len }, (_, i) => ({
          content: contents[i] || '',
          style: styles[i] || '',
        }))
        set({ pages, current: 0 })
      },
    }),
    {
      name: 'show-me-the-slide',
      partialize: (state) => ({
        pages: state.pages,
        current: state.current,
      }),
    }
  )
)
