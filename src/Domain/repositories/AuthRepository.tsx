import { ResponseApiDelivery } from '../../Data/source/remote/models/ResponseApiDelivery';
import { User } from '../entities/User';

export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
}
