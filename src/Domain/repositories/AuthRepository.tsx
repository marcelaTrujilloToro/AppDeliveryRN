import { ResponseApiDelivery } from '../../Data/source/remote/models/ResponseApiDelivery';
import { User } from '../entities/User';
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
  registerWithImage(
    user: User,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiDelivery>;
}
