import { useMutation, useQuery } from "react-query";

const persons = [
  { id: 1, name: "Yvonne Sankey" },
  { id: 2, name: "Audrey Andrews" },
  { id: 3, name: "Charles Gotcher" },
  { id: 4, name: "August Riggs" },
  { id: 5, name: "Nancy Johnson" },
  { id: 6, name: "John Smith" },
  { id: 7, name: "Vicki Premo" },
  { id: 8, name: "Steven Angulo" },
  { id: 9, name: "Zora Gill" },
  { id: 10, name: "Eric Hicks" },
];

interface QueryError {
  message: string;
}

export const useSearchMutation = () =>
  useMutation<typeof persons, QueryError, string | null, void>((name) => {
    if (!name || name.length < 2) {
      return Promise.reject({
        message: "Query must be at least 2 characters long.",
      });
    }
    return Promise.resolve(
      persons.filter((person) =>
        person.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      )
    );
  });

