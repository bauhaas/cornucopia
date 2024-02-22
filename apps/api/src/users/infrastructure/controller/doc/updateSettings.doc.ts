import { ApiBodyOptions, ApiResponseOptions } from '@nestjs/swagger';

import { zodToOpenAPI } from 'nestjs-zod';

import {
  UpdateSettingsRequestDto,
  UpdateSettingsRequestZodDto,
} from '../dtos/updateSettingsRequest.dto';

export const updateSettingsApiOperation = {
  summary: 'Update a user settings',
};

export const updateEnableSettingsBodyExample: UpdateSettingsRequestDto = {
  displayTop10: true,
  displayRecentlyWatched: true,
  displayWatchlist: true,
};

export const updateDisableSettingsBodyExample: UpdateSettingsRequestDto = {
  displayTop10: false,
  displayRecentlyWatched: false,
  displayWatchlist: false,
};

export const updateSettingsApiBody: ApiBodyOptions = {
  schema: zodToOpenAPI(UpdateSettingsRequestZodDto),
  examples: {
    'Enable all settings': {
      value: updateEnableSettingsBodyExample,
    },
    'Disable all settings': {
      value: updateDisableSettingsBodyExample,
    },
  },
};

export const updateSettingsNoContentResponse: ApiResponseOptions = {
  status: 204,
  description: 'The settings were successfully updated.',
};
