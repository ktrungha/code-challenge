import { randomUUID, UUID } from 'crypto';
import { Person } from './model';

class PersonService {
    async listPerson(
        familyName?: string,
        givenName?: string,
        nickName?: string
    ) {
        const condition: Record<string, string | undefined> = {
            familyName,
            givenName,
            nickName,
        };

        // remove keys with undefined value in the object
        Object.entries(condition).forEach((entry) => {
            if (entry[1] === undefined) {
                delete condition[entry[0]];
            }
        });

        return await Person.findAll({ where: condition });
    }

    async create(familyName: string, givenName: string, nickName?: string) {
        return await Person.create({
            id: randomUUID(),
            familyName,
            givenName,
            nickName,
        });
    }

    async readPerson(id: UUID) {
        return await Person.findByPk(id);
    }

    async writePerson(
        id: UUID,
        familyName: string,
        givenName: string,
        nickName: string
    ) {
        return await Person.update(
            { familyName, givenName, nickName: nickName || null },
            { where: { id } }
        );
    }

    async deletePerson(id: UUID) {
        await Person.destroy({ where: { id } });
    }
}

export const personService = new PersonService();
