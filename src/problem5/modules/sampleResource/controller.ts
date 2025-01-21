import { UUID } from 'crypto';
import { Request, Response } from 'express';
import { personService } from './service';

class PersonController {
    public async create(req: Request, res: Response) {
        const body = req.body;
        try {
            const person = await personService.create(
                body.familyName,
                body.givenName,
                body.nickName
            );
            res.send(person);
        } catch (e) {
            res.status(500).send({ e });
        }
    }

    public async list(req: Request, res: Response) {
        // Use query params in GET as input instead of request body to ease caching support
        // Better to have framework such as NestJS to support processing these query params in controller
        const familyName = req.query.familyName as string;
        const givenName = req.query.givenName as string;
        const nickName = req.query.nickName as string;

        try {
            const people = await personService.listPerson(
                familyName,
                givenName,
                nickName
            );
            res.send(people);
        } catch (e) {
            res.status(500).send({ e });
        }
    }

    public async read(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const person = await personService.readPerson(id as UUID);
            if (person) {
                res.send(person);
            } else {
                res.status(404).send({});
            }
        } catch (e) {
            res.status(500).send({ e });
        }
    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const body = req.body;
        try {
            const [affected] = await personService.writePerson(
                id as UUID,
                body.familyName,
                body.givenName,
                body.nickName
            );
            if (affected) {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        } catch (e) {
            res.status(500).send({ e });
        }
    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await personService.deletePerson(id as UUID);
            res.send({ success: true });
        } catch (e) {
            res.status(500).send({ e });
        }
    }
}

export const personController = new PersonController();
