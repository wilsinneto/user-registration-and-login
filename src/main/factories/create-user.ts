import { CreateUser } from '@/usecases/user'
import { InMemoryUserRepository } from '@/usecases/user/repository'
import { CreateUserController } from '@/web-controllers/'

export const makeCreateUserController = (): CreateUserController => {
  const inMemoryUserRepository = new InMemoryUserRepository([])
  const createUserUseCase = new CreateUser(inMemoryUserRepository)
  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}
