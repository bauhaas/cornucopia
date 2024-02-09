import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-github2';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: 'a9e88a3fb7aaacea4a16',
      clientSecret: '021ecf60787627e0bbe6ca1e64298bfd3bc7d405',
      callbackURL: 'http://localhost:3000/authentication/github/callback',
      scope: ['user:email'],
    });
  }

  //id a9e88a3fb7aaacea4a16
  // secret 9264ca05a226f2616ed2eab17c45b1324fae53e4
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any, info?: any) => void,
  ): Promise<any> {
    console.log('validate github');
    try {
      const { username, emails } = profile;
      const user = {
        userId: username,
        email: emails && emails.length > 0 ? emails[0].value : null,
      };
      console.log(user);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
}
