import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certification } from './entities/certification.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Certification)
    private certificationRepository: Repository<Certification>,
  ) {}

  findAll() {
    return this.certificationRepository.find();
  }

  async freetextsearch(searchTerms: string[], k: number): Promise<Certification[]> {

    const escapeSingleQuotes = (str: string) => str.replace(/'/g, "''");

    const searchTermString = searchTerms
        .map(search => `"${escapeSingleQuotes(search)}"`)
        .join(' OR ');

    // Query using raw SQL to perform a free text search
    const query = `
        SELECT TOP (${k}) ft.[KEY], ft.RANK, c.*
        FROM FREETEXTTABLE(certifications, (overview, skills_measured), '${searchTermString}') AS ft
        JOIN certifications AS c
        ON ft.[KEY] = c.cert_id
        ORDER BY ft.RANK DESC;
    `;

    return this.certificationRepository.query(query);
  }
}
