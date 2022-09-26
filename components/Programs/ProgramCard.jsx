import Link from 'next/link';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import TitleCard from '../TitleCard';

export function ProgramCard({ program }) {
  return (
    <Link
      key={uuidv4()}
      href={`/about/programs/${program.id}/${_.kebabCase(
        program.attributes.title,
      )}`}
      passHref
    >
      <a>
        <TitleCard
          title={program.attributes.title}
          bg={program.attributes.coverMedia}
        />
      </a>
    </Link>
  );
}
