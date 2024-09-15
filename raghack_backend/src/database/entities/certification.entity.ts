import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('certifications')
export class Certification {
  @PrimaryGeneratedColumn({ name: 'cert_id' })
  certId: number;

  @Column({ type: 'nvarchar', length: 100, name: 'cert' })
  cert: string;

  @Column({ type: 'nvarchar', length: 50, name: 'level' })
  level: string;

  @Column({ type: 'nvarchar', length: 50, name: 'product' })
  product: string;

  @Column({ type: 'nvarchar', length: 50, name: 'role' })
  role: string;

  @Column({ type: 'nvarchar', length: 50, name: 'subject' })
  subject: string;

  @Column({ type: 'nvarchar', length: 50, name: 'renewal_frequency' })
  renewal_frequency: string;

  @Column({ type: 'date', name: 'last_updated' })
  last_updated: Date;

  @Column({ type: 'date', name: 'retirement_date' })
  retirement_date: Date;

  @Column({ type: 'nvarchar', length: 1700, name: 'overview' })
  overview: string;

  @Column({ type: 'nvarchar', length: 350, name: 'skills_measured' })
  skills_measured: string;
}
