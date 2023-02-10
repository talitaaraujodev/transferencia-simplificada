import { User } from '../../domain/models/user/User';
export interface UserPersistence {
  create(user: User): Promise<User>;
}
