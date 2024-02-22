import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const UpdateSettingsRequestZodDto = z.object({
  displayTop10: z
    .boolean()
    .optional()
    .describe('display top 10 movies category'),
  displayRecentlyWatched: z
    .boolean()
    .optional()
    .describe('display recently watched movies category'),
  displayWatchlist: z
    .boolean()
    .optional()
    .describe('display the movies watchlist category'),
});

export class UpdateSettingsRequestDto extends createZodDto(
  UpdateSettingsRequestZodDto,
) {}
