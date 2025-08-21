



export const useTruncate = (words: string, maxLength :number) => {
    return words.length > maxLength ? `${words.slice(0, maxLength)} ....read more` : words
  }