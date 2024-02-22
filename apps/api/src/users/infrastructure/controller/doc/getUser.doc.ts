import { ApiResponseOptions } from '@nestjs/swagger';

import { zodToOpenAPI } from 'nestjs-zod';

import {
  GetUserByIDResponseDto,
  GetUserByIDResponseZodDto,
} from '../dtos/getUserByIDResponse.dto';

export const GetUserByIDApiOperation = {
  summary: 'Get a user by his id',
};

const GetUserByIDOkResponseExample: GetUserByIDResponseDto = {
  id: 1,
  email: 'john.doe@mail.com',
  displayTop10: true,
  displayRecentlyWatched: true,
  displayWatchlist: true,
};

export const GetUserByIDOkResponse: ApiResponseOptions = {
  status: 200,
  description: 'OK',
  content: {
    'application/json': {
      schema: zodToOpenAPI(GetUserByIDResponseZodDto),
      example: GetUserByIDOkResponseExample,
    },
  },
};
