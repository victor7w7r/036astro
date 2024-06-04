import {
  type AwilixContainer,
  type ContainerOptions,
  createContainer,
  type ResolveOptions,
  type Resolver
} from 'awilix'

type ContainerDefinition = Record<string, Resolver<unknown>>

type ExtractResolverType<T> = T extends Resolver<infer X> ? X : null

type TypedAwilixContainer<T extends ContainerDefinition> = Pick<
  AwilixContainer,
  Exclude<keyof AwilixContainer, 'resolve'>
> & {
  resolve: <K extends keyof T>(
    key: K,
    resolveOptions?: Readonly<ResolveOptions>
  ) => ExtractResolverType<T[K]>
}

export const createTypedContainer = <T extends ContainerDefinition>(
  registrations: T,
  options?: Readonly<ContainerOptions>
): TypedAwilixContainer<T> =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  createContainer(options).register(registrations) as never
