import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class TmdbClient {
  private readonly baseUrl = process.env.TMDB_API_BASE_URL;
  private readonly apiKey = process.env.TMDB_API_KEY;

  constructor() {}

  public async getMovieWithCredits(id: number): Promise<AxiosResponse> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits`;
    return axios.get(url);
  }

  public async getActorFilmography(id: number): Promise<AxiosResponse> {
    const url = `${this.baseUrl}/person/${id}/movie_credits?api_key=${this.apiKey}`;
    return axios.get(url);
  }
}
