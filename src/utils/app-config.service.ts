/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get PORT(): number {
    return parseInt(this.configService.get<string>('PORT')! || '3000', 10);
  }

  get OPAL_CHAIN_GQL_API(): string {
    return this.configService.get<string>('OPAL_CHAIN_GQL_API')!;
  }

  get UNIQUE_CHAIN_GQL_API(): string {
    return this.configService.get<string>('UNIQUE_CHAIN_GQL_API')!;
  }

  get QUARTZ_CHAIN_GQL_API(): string {
    return this.configService.get<string>('QUARTZ_CHAIN_GQL_API')!;
  }

  get CHAINS() {
    return [
      { name: 'OPAL', url: this.OPAL_CHAIN_GQL_API },
      {
        name: 'UNIQUE',
        url: this.UNIQUE_CHAIN_GQL_API,
      },
      { name: 'QUARTZ', url: this.QUARTZ_CHAIN_GQL_API },
    ].filter(({ url }) => url);
  }
}
