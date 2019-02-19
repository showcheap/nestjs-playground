import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interfaces';
import { create } from 'domain';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
