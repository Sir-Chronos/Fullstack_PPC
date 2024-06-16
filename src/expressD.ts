import { JwtPayload } from 'jsonwebtoken';
import  UserAttributes  from './models/User';

declare global {
  namespace Express {
    interface Request {
      user?: UserAttributes | JwtPayload;
    }
  }
}
