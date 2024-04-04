export * from './binance'

export type UseCase<R> = Readonly<{
  exec: () => Promise<R>
}>

export type UseCaseWithParams<R, P> = Readonly<{
  exec: (params: P) => Promise<R>
}>
