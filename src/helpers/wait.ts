import { performance } from 'perf_hooks'

export const wait = async (seconds: number) =>
  new Promise<number>((resolve) => {
    const t0 = performance.now()

    setTimeout(() => {
      const t1 = performance.now()
      resolve(t1 - t0)
    }, seconds * 1000)
  })

export default wait
