import { useState, useEffect } from 'react'
import { projects as fallbackProjects } from '../data/portfolio'

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  featured: boolean
}

/**
 * 项目数据 Hook
 *
 * 优先从本地后端接口获取项目数据，接口不可用时回退到前端占位数据。
 * 后端接口地址可通过 VITE_API_BASE_URL 环境变量配置。
 *
 * 后端接口约定：
 *   GET /api/projects
 *   Response: { data: Project[] }
 */
export function useProjects() {
  const [data, setData] = useState<Project[]>(fallbackProjects)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
    const controller = new AbortController()

    async function fetchProjects() {
      try {
        const res = await fetch(`${apiBase}/api/projects`, {
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const list = json.data || json
        if (Array.isArray(list) && list.length > 0) {
          setData(list)
        }
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message)
          // 接口不可用时静默回退到占位数据
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
    return () => controller.abort()
  }, [])

  return { data, loading, error }
}
