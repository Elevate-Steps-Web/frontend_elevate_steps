import { v4 as uuidv4 } from 'uuid';
import Container from '../Container';
import { ProgramCard } from './ProgramCard';

export function ProgramListSection({ programs = [] }) {
  return (
    <Container>
      <div className="flex flex-wrap w-full mx-42 px-10 md:px-20 lg:px-0 justify-center justify-items-between gap-y-12 gap-x-12 mb-36">
        {programs.map((program) => (
          <ProgramCard key={uuidv4()} program={program} />
        ))}
      </div>
    </Container>
  );
}
