import { Column, Entity, Index } from 'typeorm';

@Index('extrinsics_pkey', ['chain', 'timestamp'], { unique: true })
@Entity('extrinsics_stats', { schema: 'public' })
export class ExtrinsicsStats {
  @Column('text', { primary: true, name: 'chain' })
  chain: string;

  @Column('int8', { name: 'count' })
  count: number;

  @Column('int8', { primary: true, name: 'timestamp' })
  timestamp: number;
}
