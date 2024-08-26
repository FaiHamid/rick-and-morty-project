export interface Details {
  name: string,
  url: string,
}

export interface Character {
id: number,
name: string,
status: string,
species: string,
type: string,
gender: string,
origin: Details,
location: Details,
image: string,
episode: string[],
url: string,
created: string,
}

export interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string,
}

export interface DataFromServer {
  info: Info,
  results: Character[],
}