import { AxiosError } from 'axios';
import { User } from '../../Domain/entities/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import {
  ApiDelivery,
  ApiDeliveryWithImage,
} from '../source/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../source/remote/models/ResponseApiDelivery';
import { ImagePickerAsset } from 'expo-image-picker';
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository {
  async registerWithImage(
    user: User,
    file: ImagePickerAsset
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append('image', {
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!,
      });

      data.append('user', JSON.stringify(user));

      const response = await ApiDeliveryWithImage.post<ResponseApiDelivery>(
        '/users/createWithImage',
        data
      );

      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;

      console.log('Error', JSON.stringify(e.response?.data));

      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>(
        '/users/create',
        user
      );

      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;

      console.log('Error', JSON.stringify(e.response?.data));

      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>(
        '/users/login',
        { email, password }
      );

      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;

      console.log('Error', JSON.stringify(e.response?.data));

      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
