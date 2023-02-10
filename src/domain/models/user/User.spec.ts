import { v4 as uuid } from 'uuid';
import { User } from './User';

describe('User tests', () => {
  it('changeName_whenUpdateName_returnSuccess', () => {
    const user = new User(
      uuid(),
      'User test',
      'test@test.com',
      '12345678912',
      '85999999999',
      '123456',
    );

    user.changeName('User test 2');
    expect(user.name).toBe('User test 2');
  });
  it('changeTelefone_whenUpdateTelefone_returnSuccess', () => {
    const user = new User(
      uuid(),
      'User test',
      'test@test.com',
      '12345678912',
      '85999999999',
      '123456',
    );

    user.changeTelefone('8957454588');
    expect(user.telefone).toBe('8957454588');
  });
  it('changeEmail_whenUpdateEmail_returnSuccess', () => {
    const user = new User(
      uuid(),
      'User test',
      'test@test.com',
      '12345678912',
      '85999999999',
      '123456',
    );

    user.changeEmail('test@test.com.br');
    expect(user.email).toBe('test@test.com.br');
  });
  it('encryptPassword_whenPasswordValid_returnEcrypterPassword', async () => {
    const user = new User(
      uuid(),
      'User test',
      'test@test.com',
      '12345678912',
      '85999999999',
      '123456',
    );

    const password = await user.encryptPassword(user.password);
    expect(password).not.toBe('123456');
  });
  it('user_whenUserValid_returnSuccess', () => {
    const user = new User(
      uuid(),
      'User test',
      'test@test.com',
      '12345678912',
      '85999999999',
      '123456',
    );
    expect(user.name).toBe('User test');
    expect(user.email).toBe('test@test.com');
    expect(user).toHaveProperty('cpf');
  });
});
