import { PersonNaturalEntity } from "@/entities/person-natural.entity";
import { Result } from "true-myth";

export interface PersonNaturalServicePort {
  create: (input: PersonNaturalEntity) => Promise<Result<boolean, Error>>
}