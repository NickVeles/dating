interface Writer {
  id: number,
  github?: string,
  name: string,
}

export const writers: Writer[] = [
  {
    id: 0,
    github: undefined,
    name: "Anonymous",
  },
  {
    id: 1,
    github: "NickVeles",
    name: "Nick Veles",
  },
]