import { createZodDto } from 'nestjs-zod';

import { UserSchema } from '../../../../../prisma/generated/zod';

export const GetUserByIDResponseZodDto = UserSchema;

export class GetUserByIDResponseDto extends createZodDto(
  GetUserByIDResponseZodDto,
) {}
