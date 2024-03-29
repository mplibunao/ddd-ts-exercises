import Database, { IUser, UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public readonly db = Database

  constructor() {
    this.db = Database
  }

  async createUser(user: UserRequestDto): Promise<IUser> {
    return this.db.create(user)
  }
}
